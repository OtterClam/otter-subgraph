import { BigDecimal, BigInt } from '@graphprotocol/graph-ts'
import { PearlBankMetric } from '../../generated/schema'
import { dayFromTimestamp } from './Dates'

export function loadOrCreatePearlBankMetric(timestamp: BigInt): PearlBankMetric {
  let date = BigInt.fromString(dayFromTimestamp(timestamp))
  let id = 'PearlBankMetric_' + date.toString()

  let metric = PearlBankMetric.load(id)
  if (!metric) {
    metric = new PearlBankMetric(id)
  }

  metric.timestamp = date

  return metric
}
