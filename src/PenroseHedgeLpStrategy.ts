import { BigDecimal, log } from '@graphprotocol/graph-ts'
import { ERC20 } from '../generated/OtterClamERC20V2/ERC20'
import {
  ClaimRewardToken as ClaimRewardTokenEvent,
  PayoutReward as PayoutRewardEvent,
} from '../generated/PenroseHedgeLpStrategy/PenroseHedgeLpStrategy'
import { ClaimReward } from '../generated/schema'
import { DYST_ERC20, PEN_ERC20, USDC_ERC20 } from './utils/Constants'
import { toDecimal } from './utils/Decimals'
import { loadOrCreateTransaction } from './utils/Transactions'
import { updateTreasuryRevenueDystRewardPaid, updateTreasuryRevenuePenRewardPaid } from './utils/TreasuryRevenue'

export function handleClaimReward(event: ClaimRewardTokenEvent): void {
  let transaction = loadOrCreateTransaction(event.transaction, event.block)
  let claim = new ClaimReward(`${event.address.toHexString()}_${transaction.id}_${event.params.token.toHexString()}`)
  claim.transaction = transaction.id
  claim.timestamp = transaction.timestamp
  claim.amountUsd = toDecimal(event.params.usdcAmount, 6) //Claim in USDC (6 decimals)
  claim.amountToken = toDecimal(event.params.amount, ERC20.bind(event.params.token).decimals())
  claim.token = event.params.token
  claim.save()

  if (event.params.token == PEN_ERC20) {
    updateTreasuryRevenuePenRewardPaid(transaction, event.params.amount)
  }
  if (event.params.token == DYST_ERC20) {
    updateTreasuryRevenueDystRewardPaid(transaction, event.params.amount)
  }
}
