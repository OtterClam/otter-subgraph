import { Investment, ClaimReward, Transaction } from '../../generated/schema'
import { toDecimal } from '../utils/Decimals'
import { BigDecimal, BigInt, log } from '@graphprotocol/graph-ts'
import { OHM_NAV_REPORTER } from '../utils/Constants'
import { OHMNavReporter } from '../../generated/OtterClamERC20V2/OHMNavReporter'
import { InvestmentInterface, loadOrCreateInvestment } from '.'

export class OHMInvestment implements InvestmentInterface {
  public investment!: Investment
  public readonly strategy: string = 'OHM'
  public readonly protocol: string = 'OlympusDAO'
  public readonly startBlock: BigInt = BigInt.fromI32(36560593)
  private currentBlock: BigInt = BigInt.zero()
  private active: boolean = false

  constructor(transaction: Transaction) {
    this.currentBlock = transaction.blockNumber
    if (transaction.blockNumber.ge(this.startBlock)) {
      this.active = true
      let nav = this.netAssetValue()
      if (nav.gt(BigDecimal.fromString('10'))) {
        let _investment = loadOrCreateInvestment(this.strategy, this.protocol, transaction.timestamp)
        _investment.protocol = this.protocol
        _investment.netAssetValue = nav
        this.investment = _investment
        this.investment.save()
      } else {
        this.active = false
      }
    }
  }

  netAssetValue(): BigDecimal {
    if (this.active) {
      let tryNAV = OHMNavReporter.bind(OHM_NAV_REPORTER).try_netAssetValue()
      let netAssetVal = tryNAV.reverted ? BigInt.zero() : tryNAV.value
      return toDecimal(netAssetVal, 6)
    }
    return BigDecimal.zero()
  }

  addRevenue(claim: ClaimReward): void {}
}
