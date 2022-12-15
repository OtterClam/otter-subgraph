import { BigDecimal, BigInt, log } from '@graphprotocol/graph-ts'
import { BuyFish, BuyProduct as BuyProductEvent, BuyItem as BuyItemEvent } from '../generated/OttopiaStore/OttopiaStore'
import { toDecimal } from './utils/Decimals'
import { getClamUsdRate } from './utils/Price'
import { loadOrCreateTransaction } from './utils/Transactions'
import { loadOrCreateTreasuryRevenue, setTreasuryRevenueTotals } from './utils/TreasuryRevenue'
import { BuyProduct } from '../generated/schema'
import { loadOrCreateBuyProductIds } from './Adventure'

export function handleBuyProduct(buy: BuyProductEvent): void {
  //Save the buy transaction
  let transaction = loadOrCreateTransaction(buy.transaction, buy.block)

  let clamPaid = toDecimal(buy.params.amount.times(buy.params.price), 9)

  let entity = new BuyProduct(transaction.id)
  entity.productId = buy.params.id
  entity.price = toDecimal(buy.params.price, 9)
  entity.amount = buy.params.amount

  entity.totalClam = clamPaid
  entity.save()

  // Add Product to IDs list
  let productIds = loadOrCreateBuyProductIds()
  productIds.productIds.push(buy.params.id)
  productIds.save()

  //10% of Ottopia CLAM is burned
  //40% of Ottopia CLAM is DAO revenue
  //50% is Prize Pool
  let revenueClam = clamPaid.times(BigDecimal.fromString('0.9'))
  let clamMarketValue = revenueClam.times(getClamUsdRate(buy.block.number))

  log.debug('Ottopia transfered {} CLAM to DAO+PrizePool at time {}, txid {}', [
    revenueClam.toString(),
    buy.block.timestamp.toString(),
    buy.transaction.hash.toHexString(),
  ])

  let revenue = loadOrCreateTreasuryRevenue(buy.block.timestamp)

  revenue.ottopiaClamAmount = revenue.ottopiaClamAmount.plus(revenueClam)
  revenue.ottopiaMarketValue = revenue.ottopiaMarketValue.plus(clamMarketValue)

  revenue = setTreasuryRevenueTotals(revenue)

  revenue.save()
}

export function handleBuyItem(buy: BuyItemEvent): void {
  //Save the buy transaction
  let transaction = loadOrCreateTransaction(buy.transaction, buy.block)

  let clamPaid = toDecimal(buy.params.amount.times(buy.params.price), 9)

  let entity = new BuyProduct(transaction.id)
  entity.productId = buy.params.itemId

  entity.price = toDecimal(buy.params.price, 9)
  entity.amount = buy.params.amount

  entity.totalClam = clamPaid
  entity.save()

  // Add Product to IDs list
  let productIds = loadOrCreateBuyProductIds()
  productIds.productIds.push(buy.params.itemId)
  productIds.save()

  //10% of Ottopia CLAM is burned
  //40% of Ottopia CLAM is DAO revenue
  //50% is Prize Pool
  let revenueClam = clamPaid.times(BigDecimal.fromString('0.9'))
  let clamMarketValue = revenueClam.times(getClamUsdRate(buy.block.number))

  log.debug('Ottopia transfered {} CLAM to DAO+PrizePool at time {}, txid {}', [
    revenueClam.toString(),
    buy.block.timestamp.toString(),
    buy.transaction.hash.toHexString(),
  ])

  let revenue = loadOrCreateTreasuryRevenue(buy.block.timestamp)

  revenue.ottopiaClamAmount = revenue.ottopiaClamAmount.plus(revenueClam)
  revenue.ottopiaMarketValue = revenue.ottopiaMarketValue.plus(clamMarketValue)

  revenue = setTreasuryRevenueTotals(revenue)

  revenue.save()
}

export function handleBuyFish(buy: BuyFish): void {
  //Save the buy transaction
  let transaction = loadOrCreateTransaction(buy.transaction, buy.block)

  let clamPaid = toDecimal(buy.params.clamAmount, 9)

  let productId = BigInt.fromI32(-2)
  let entity = new BuyProduct(transaction.id)
  entity.productId = productId
  entity.price = clamPaid
  entity.amount = BigInt.fromI32(1)
  entity.totalClam = clamPaid
  entity.save()

  // Add Product to IDs list
  let productIds = loadOrCreateBuyProductIds()
  productIds.productIds.push(productId)
  productIds.save()

  //10% of Ottopia CLAM is burned
  //40% of Ottopia CLAM is DAO revenue
  //50% is Prize Pool
  let revenueClam = clamPaid.times(BigDecimal.fromString('0.9'))
  let clamMarketValue = revenueClam.times(getClamUsdRate(buy.block.number))

  log.debug('FISH bought for {} CLAM to DAO+PrizePool at time {}, txid {}', [
    revenueClam.toString(),
    buy.block.timestamp.toString(),
    buy.transaction.hash.toHexString(),
  ])

  let revenue = loadOrCreateTreasuryRevenue(buy.block.timestamp)

  revenue.ottopiaClamAmount = revenue.ottopiaClamAmount.plus(revenueClam)
  revenue.ottopiaMarketValue = revenue.ottopiaMarketValue.plus(clamMarketValue)

  revenue = setTreasuryRevenueTotals(revenue)

  revenue.save()
}
