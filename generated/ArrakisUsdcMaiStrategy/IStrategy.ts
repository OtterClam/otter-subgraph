// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ClaimReward extends ethereum.Event {
  get params(): ClaimReward__Params {
    return new ClaimReward__Params(this);
  }
}

export class ClaimReward__Params {
  _event: ClaimReward;

  constructor(event: ClaimReward) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ClaimRewardToken extends ethereum.Event {
  get params(): ClaimRewardToken__Params {
    return new ClaimRewardToken__Params(this);
  }
}

export class ClaimRewardToken__Params {
  _event: ClaimRewardToken;

  constructor(event: ClaimRewardToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get usdcAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Invest extends ethereum.Event {
  get params(): Invest__Params {
    return new Invest__Params(this);
  }
}

export class Invest__Params {
  _event: Invest;

  constructor(event: Invest) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class InvestToken extends ethereum.Event {
  get params(): InvestToken__Params {
    return new InvestToken__Params(this);
  }
}

export class InvestToken__Params {
  _event: InvestToken;

  constructor(event: InvestToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get usdcAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NetAssetValueUpdated extends ethereum.Event {
  get params(): NetAssetValueUpdated__Params {
    return new NetAssetValueUpdated__Params(this);
  }
}

export class NetAssetValueUpdated__Params {
  _event: NetAssetValueUpdated;

  constructor(event: NetAssetValueUpdated) {
    this._event = event;
  }

  get from(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get to(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PayoutReward extends ethereum.Event {
  get params(): PayoutReward__Params {
    return new PayoutReward__Params(this);
  }
}

export class PayoutReward__Params {
  _event: PayoutReward;

  constructor(event: PayoutReward) {
    this._event = event;
  }

  get nav(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get revenue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get payout(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PortfolioManagerUpdated extends ethereum.Event {
  get params(): PortfolioManagerUpdated__Params {
    return new PortfolioManagerUpdated__Params(this);
  }
}

export class PortfolioManagerUpdated__Params {
  _event: PortfolioManagerUpdated;

  constructor(event: PortfolioManagerUpdated) {
    this._event = event;
  }

  get value(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ReinvestRateUpdated extends ethereum.Event {
  get params(): ReinvestRateUpdated__Params {
    return new ReinvestRateUpdated__Params(this);
  }
}

export class ReinvestRateUpdated__Params {
  _event: ReinvestRateUpdated;

  constructor(event: ReinvestRateUpdated) {
    this._event = event;
  }

  get value(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ReinvestStrategyUpdated extends ethereum.Event {
  get params(): ReinvestStrategyUpdated__Params {
    return new ReinvestStrategyUpdated__Params(this);
  }
}

export class ReinvestStrategyUpdated__Params {
  _event: ReinvestStrategyUpdated;

  constructor(event: ReinvestStrategyUpdated) {
    this._event = event;
  }

  get value(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class IStrategy extends ethereum.SmartContract {
  static bind(address: Address): IStrategy {
    return new IStrategy("IStrategy", address);
  }

  claimAndReinvest(to_: Address): BigInt {
    let result = super.call(
      "claimAndReinvest",
      "claimAndReinvest(address):(uint256)",
      [ethereum.Value.fromAddress(to_)]
    );

    return result[0].toBigInt();
  }

  try_claimAndReinvest(to_: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimAndReinvest",
      "claimAndReinvest(address):(uint256)",
      [ethereum.Value.fromAddress(to_)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  invest(token_: Address, amount_: BigInt): BigInt {
    let result = super.call("invest", "invest(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(token_),
      ethereum.Value.fromUnsignedBigInt(amount_)
    ]);

    return result[0].toBigInt();
  }

  try_invest(token_: Address, amount_: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("invest", "invest(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(token_),
      ethereum.Value.fromUnsignedBigInt(amount_)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  netAssetValue(): BigInt {
    let result = super.call("netAssetValue", "netAssetValue():(uint256)", []);

    return result[0].toBigInt();
  }

  try_netAssetValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "netAssetValue",
      "netAssetValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdraw(token_: Address, amount_: BigInt): BigInt {
    let result = super.call("withdraw", "withdraw(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(token_),
      ethereum.Value.fromUnsignedBigInt(amount_)
    ]);

    return result[0].toBigInt();
  }

  try_withdraw(token_: Address, amount_: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdraw",
      "withdraw(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(token_),
        ethereum.Value.fromUnsignedBigInt(amount_)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ClaimAndReinvestCall extends ethereum.Call {
  get inputs(): ClaimAndReinvestCall__Inputs {
    return new ClaimAndReinvestCall__Inputs(this);
  }

  get outputs(): ClaimAndReinvestCall__Outputs {
    return new ClaimAndReinvestCall__Outputs(this);
  }
}

export class ClaimAndReinvestCall__Inputs {
  _call: ClaimAndReinvestCall;

  constructor(call: ClaimAndReinvestCall) {
    this._call = call;
  }

  get to_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimAndReinvestCall__Outputs {
  _call: ClaimAndReinvestCall;

  constructor(call: ClaimAndReinvestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InvestCall extends ethereum.Call {
  get inputs(): InvestCall__Inputs {
    return new InvestCall__Inputs(this);
  }

  get outputs(): InvestCall__Outputs {
    return new InvestCall__Outputs(this);
  }
}

export class InvestCall__Inputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }

  get token_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class InvestCall__Outputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get token_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
