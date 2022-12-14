import { BigDecimal, BigInt, log } from '@graphprotocol/graph-ts'
import { Revive } from '../generated/Adventure/Adventure'
import { toDecimal } from './utils/Decimals'
import { getClamUsdRate } from './utils/Price'
import { loadOrCreateTransaction } from './utils/Transactions'
import { loadOrCreateTreasuryRevenue, setTreasuryRevenueTotals } from './utils/TreasuryRevenue'
import { BuyProduct } from '../generated/schema'

export function handleRevive(event: Revive): void {
  let transaction = loadOrCreateTransaction(event.transaction, event.block)

  let clamPrice = getClamUsdRate(event.block.number)

  //Save the buy event
  let entity = new BuyProduct(transaction.id)
  // Starting Adventure IDs from 10k
  entity.product_id = BigInt.fromString('100000')
  entity.price = clamPrice
  entity.amount = BigInt.fromI32(1)
  entity.totalClam = BigDecimal.fromString('1')

  entity.save()

  //10% of Ottopia CLAM is burned
  //40% of Ottopia CLAM is DAO revenue
  //50% is Prize Pool
  let revenueClam = BigDecimal.fromString('0.9')
  let clamMarketValue = revenueClam.times(clamPrice)

  log.debug('Ottopia transfered {} CLAM to DAO+PrizePool at time {}, txid {}', [
    revenueClam.toString(),
    event.block.timestamp.toString(),
    event.transaction.hash.toHexString(),
  ])

  let revenue = loadOrCreateTreasuryRevenue(event.block.timestamp)

  revenue.ottopiaClamAmount = revenue.ottopiaClamAmount.plus(revenueClam)
  revenue.ottopiaMarketValue = revenue.ottopiaMarketValue.plus(clamMarketValue)

  revenue = setTreasuryRevenueTotals(revenue)

  revenue.save()
}
