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

export class OwnershipPulled extends ethereum.Event {
  get params(): OwnershipPulled__Params {
    return new OwnershipPulled__Params(this);
  }
}

export class OwnershipPulled__Params {
  _event: OwnershipPulled;

  constructor(event: OwnershipPulled) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipPushed extends ethereum.Event {
  get params(): OwnershipPushed__Params {
    return new OwnershipPushed__Params(this);
  }
}

export class OwnershipPushed__Params {
  _event: OwnershipPushed;

  constructor(event: OwnershipPushed) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OtterStakingDistributor__adjustmentsResult {
  value0: boolean;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: boolean, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class OtterStakingDistributor__infoResult {
  value0: BigInt;
  value1: Address;

  constructor(value0: BigInt, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class OtterStakingDistributor extends ethereum.SmartContract {
  static bind(address: Address): OtterStakingDistributor {
    return new OtterStakingDistributor("OtterStakingDistributor", address);
  }

  CLAM(): Address {
    let result = super.call("CLAM", "CLAM():(address)", []);

    return result[0].toAddress();
  }

  try_CLAM(): ethereum.CallResult<Address> {
    let result = super.tryCall("CLAM", "CLAM():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  adjustments(param0: BigInt): OtterStakingDistributor__adjustmentsResult {
    let result = super.call(
      "adjustments",
      "adjustments(uint256):(bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new OtterStakingDistributor__adjustmentsResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_adjustments(
    param0: BigInt
  ): ethereum.CallResult<OtterStakingDistributor__adjustmentsResult> {
    let result = super.tryCall(
      "adjustments",
      "adjustments(uint256):(bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new OtterStakingDistributor__adjustmentsResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  distribute(): boolean {
    let result = super.call("distribute", "distribute():(bool)", []);

    return result[0].toBoolean();
  }

  try_distribute(): ethereum.CallResult<boolean> {
    let result = super.tryCall("distribute", "distribute():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  epochLength(): BigInt {
    let result = super.call("epochLength", "epochLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_epochLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("epochLength", "epochLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  info(param0: BigInt): OtterStakingDistributor__infoResult {
    let result = super.call("info", "info(uint256):(uint256,address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new OtterStakingDistributor__infoResult(
      result[0].toBigInt(),
      result[1].toAddress()
    );
  }

  try_info(
    param0: BigInt
  ): ethereum.CallResult<OtterStakingDistributor__infoResult> {
    let result = super.tryCall("info", "info(uint256):(uint256,address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new OtterStakingDistributor__infoResult(
        value[0].toBigInt(),
        value[1].toAddress()
      )
    );
  }

  nextEpochTime(): BigInt {
    let result = super.call("nextEpochTime", "nextEpochTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextEpochTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextEpochTime",
      "nextEpochTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextRewardAt(_rate: BigInt): BigInt {
    let result = super.call("nextRewardAt", "nextRewardAt(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_rate)
    ]);

    return result[0].toBigInt();
  }

  try_nextRewardAt(_rate: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextRewardAt",
      "nextRewardAt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_rate)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextRewardFor(_recipient: Address): BigInt {
    let result = super.call(
      "nextRewardFor",
      "nextRewardFor(address):(uint256)",
      [ethereum.Value.fromAddress(_recipient)]
    );

    return result[0].toBigInt();
  }

  try_nextRewardFor(_recipient: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextRewardFor",
      "nextRewardFor(address):(uint256)",
      [ethereum.Value.fromAddress(_recipient)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treasury(): Address {
    let result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _treasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _clam(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _epochLength(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _nextEpochTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddRecipientCall extends ethereum.Call {
  get inputs(): AddRecipientCall__Inputs {
    return new AddRecipientCall__Inputs(this);
  }

  get outputs(): AddRecipientCall__Outputs {
    return new AddRecipientCall__Outputs(this);
  }
}

export class AddRecipientCall__Inputs {
  _call: AddRecipientCall;

  constructor(call: AddRecipientCall) {
    this._call = call;
  }

  get _recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardRate(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddRecipientCall__Outputs {
  _call: AddRecipientCall;

  constructor(call: AddRecipientCall) {
    this._call = call;
  }
}

export class DistributeCall extends ethereum.Call {
  get inputs(): DistributeCall__Inputs {
    return new DistributeCall__Inputs(this);
  }

  get outputs(): DistributeCall__Outputs {
    return new DistributeCall__Outputs(this);
  }
}

export class DistributeCall__Inputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }
}

export class DistributeCall__Outputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PullManagementCall extends ethereum.Call {
  get inputs(): PullManagementCall__Inputs {
    return new PullManagementCall__Inputs(this);
  }

  get outputs(): PullManagementCall__Outputs {
    return new PullManagementCall__Outputs(this);
  }
}

export class PullManagementCall__Inputs {
  _call: PullManagementCall;

  constructor(call: PullManagementCall) {
    this._call = call;
  }
}

export class PullManagementCall__Outputs {
  _call: PullManagementCall;

  constructor(call: PullManagementCall) {
    this._call = call;
  }
}

export class PushManagementCall extends ethereum.Call {
  get inputs(): PushManagementCall__Inputs {
    return new PushManagementCall__Inputs(this);
  }

  get outputs(): PushManagementCall__Outputs {
    return new PushManagementCall__Outputs(this);
  }
}

export class PushManagementCall__Inputs {
  _call: PushManagementCall;

  constructor(call: PushManagementCall) {
    this._call = call;
  }

  get newOwner_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PushManagementCall__Outputs {
  _call: PushManagementCall;

  constructor(call: PushManagementCall) {
    this._call = call;
  }
}

export class RemoveRecipientCall extends ethereum.Call {
  get inputs(): RemoveRecipientCall__Inputs {
    return new RemoveRecipientCall__Inputs(this);
  }

  get outputs(): RemoveRecipientCall__Outputs {
    return new RemoveRecipientCall__Outputs(this);
  }
}

export class RemoveRecipientCall__Inputs {
  _call: RemoveRecipientCall;

  constructor(call: RemoveRecipientCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveRecipientCall__Outputs {
  _call: RemoveRecipientCall;

  constructor(call: RemoveRecipientCall) {
    this._call = call;
  }
}

export class RenounceManagementCall extends ethereum.Call {
  get inputs(): RenounceManagementCall__Inputs {
    return new RenounceManagementCall__Inputs(this);
  }

  get outputs(): RenounceManagementCall__Outputs {
    return new RenounceManagementCall__Outputs(this);
  }
}

export class RenounceManagementCall__Inputs {
  _call: RenounceManagementCall;

  constructor(call: RenounceManagementCall) {
    this._call = call;
  }
}

export class RenounceManagementCall__Outputs {
  _call: RenounceManagementCall;

  constructor(call: RenounceManagementCall) {
    this._call = call;
  }
}

export class SetAdjustmentCall extends ethereum.Call {
  get inputs(): SetAdjustmentCall__Inputs {
    return new SetAdjustmentCall__Inputs(this);
  }

  get outputs(): SetAdjustmentCall__Outputs {
    return new SetAdjustmentCall__Outputs(this);
  }
}

export class SetAdjustmentCall__Inputs {
  _call: SetAdjustmentCall;

  constructor(call: SetAdjustmentCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _add(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get _rate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _target(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SetAdjustmentCall__Outputs {
  _call: SetAdjustmentCall;

  constructor(call: SetAdjustmentCall) {
    this._call = call;
  }
}
