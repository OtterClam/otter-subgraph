import {
  ClaimRewardToken as ClaimRewardTokenEvent,
  PayoutReward as PayoutRewardEvent,
} from '../generated/UniV3MaticUsdcHedgedLpStrategy/IStrategy'
import { ERC20 } from '../generated/OtterClamERC20V2/ERC20'
import { ClaimReward, PayoutReward } from '../generated/schema'
import { MAI_ERC20, MATIC_ERC20, QUICK_ERC20, USDC_ERC20, USDT_ERC20 } from './utils/Constants'
import { toDecimal } from './utils/Decimals'
import { loadOrCreateTransaction } from './utils/Transactions'
import {
  updateTreasuryRevenueClaimMaiReward,
  updateTreasuryRevenueClaimQuickReward,
  updateTreasuryRevenueClaimUsdtReward,
} from './utils/TreasuryRevenue'
import { QuickswapV3MaiUsdtInvestment } from './Investments/QuickswapV3MaiUsdt'

export function handleClaimRewardToken(event: ClaimRewardTokenEvent): void {
  let transaction = loadOrCreateTransaction(event.transaction, event.block)
  let claim = new ClaimReward(`${event.address.toHexString()}_${transaction.id}_${event.params.token.toHexString()}`)
  claim.transaction = transaction.id
  claim.timestamp = transaction.timestamp
  claim.amountUsd = toDecimal(event.params.usdcAmount, 6) //Claim in USDC (6 decimals)
  claim.amountToken = toDecimal(event.params.amount, ERC20.bind(event.params.token).decimals())
  claim.token = event.params.token
  claim.save()

  if (event.params.token == MAI_ERC20) {
    updateTreasuryRevenueClaimMaiReward(event.block.number, claim)
  }
  if (event.params.token == USDT_ERC20) {
    updateTreasuryRevenueClaimUsdtReward(event.block.number, claim)
  }
  if (event.params.token == QUICK_ERC20) {
    updateTreasuryRevenueClaimQuickReward(event.block.number, claim)
  }

  let investment = new QuickswapV3MaiUsdtInvestment(transaction)
  investment.addRevenue(claim)
}

export function handlePayoutReward(event: PayoutRewardEvent): void {
  let transaction = loadOrCreateTransaction(event.transaction, event.block)
  let investment = new QuickswapV3MaiUsdtInvestment(transaction)

  let payout = new PayoutReward(`${investment.strategy}_${transaction.id}`)
  payout.netAssetValue = toDecimal(event.params.nav, 6)
  payout.revenue = toDecimal(event.params.revenue, 6)
  payout.payout = toDecimal(event.params.payout, 6)
  payout.transactionHash = transaction.id
  payout.save()

  investment.calculateNetProfit(payout)
}
