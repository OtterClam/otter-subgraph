import { Address, log, BigInt, BigDecimal, DataSourceContext } from '@graphprotocol/graph-ts'
import { Transfer, DystopiaLPBalance } from '../generated/schema'
import { PairCreated as PairCreatedEvent } from '../generated/DystPairFactory/DystPairFactory'
import { loadOrCreateTransaction } from './utils/Transactions'

import { toDecimal } from './utils/Decimals'
import { DYSTOPIA_TRACKED_PAIRS } from './utils/Constants'
import { DystPair } from '../generated/templates'
import { dataSource } from '@graphprotocol/graph-ts'

/*
DystPairs are dynamically created from a template in the subgraph.yaml
Possible LPs:
1. CLAM/MAI
2. CLAM/USD+
3. USDC/MAI
4. USDC/FRAX
5. DYST/MATIC
*/
export function handlePairCreated(event: PairCreatedEvent): void {
  if (!DYSTOPIA_TRACKED_PAIRS.includes(event.params.pair.toHexString())) return

  log.debug('DYST pair factory created {}', [event.params.pair.toHexString()])
  let context = new DataSourceContext()
  context.setString('pair', event.params.pair.toHexString())
  DystPair.createWithContext(event.params.pair, context)
}
