/* Autogenerated file. Do not edit manually. */
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface UniswapMathInterface extends utils.Interface {
  functions: {
    "computeProfitMaximizingTrade(uint256,uint256,uint256,uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "getGasCostOfGetLiquidityValueAfterArbitrageToPrice(address,address,uint256,uint256,uint256)": FunctionFragment;
    "getLiquidityValue(address,address,uint256)": FunctionFragment;
    "getLiquidityValueAfterArbitrageToPrice(address,address,uint256,uint256,uint256)": FunctionFragment;
    "getReservesAfterArbitrage(address,address,uint256,uint256)": FunctionFragment;
    "profitMaximizingTrade(address,address,uint256,uint256)": FunctionFragment;
    "router()": FunctionFragment;
    "swapToPrice(address,address,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "computeProfitMaximizingTrade"
      | "factory"
      | "getGasCostOfGetLiquidityValueAfterArbitrageToPrice"
      | "getLiquidityValue"
      | "getLiquidityValueAfterArbitrageToPrice"
      | "getReservesAfterArbitrage"
      | "profitMaximizingTrade"
      | "router"
      | "swapToPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "computeProfitMaximizingTrade",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetLiquidityValueAfterArbitrageToPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityValue",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityValueAfterArbitrageToPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getReservesAfterArbitrage",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "profitMaximizingTrade",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapToPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeProfitMaximizingTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetLiquidityValueAfterArbitrageToPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityValueAfterArbitrageToPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReservesAfterArbitrage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "profitMaximizingTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapToPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UniswapMath extends BaseContract {
  contractName: "UniswapMath";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapMathInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    computeProfitMaximizingTrade(
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { aToB: boolean; amountIn: BigNumber }>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getGasCostOfGetLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLiquidityValue(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAAmount: BigNumber;
        tokenBAmount: BigNumber;
      }
    >;

    getLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAAmount: BigNumber;
        tokenBAmount: BigNumber;
      }
    >;

    getReservesAfterArbitrage(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    profitMaximizingTrade(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { amountIn: BigNumber; aToB: boolean }>;

    router(overrides?: CallOverrides): Promise<[string]>;

    swapToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      maxSpendTokenA: PromiseOrValue<BigNumberish>,
      maxSpendTokenB: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  computeProfitMaximizingTrade(
    truePriceTokenA: PromiseOrValue<BigNumberish>,
    truePriceTokenB: PromiseOrValue<BigNumberish>,
    reserveA: PromiseOrValue<BigNumberish>,
    reserveB: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { aToB: boolean; amountIn: BigNumber }>;

  factory(overrides?: CallOverrides): Promise<string>;

  getGasCostOfGetLiquidityValueAfterArbitrageToPrice(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    truePriceTokenA: PromiseOrValue<BigNumberish>,
    truePriceTokenB: PromiseOrValue<BigNumberish>,
    liquidityAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLiquidityValue(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    liquidityAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      tokenAAmount: BigNumber;
      tokenBAmount: BigNumber;
    }
  >;

  getLiquidityValueAfterArbitrageToPrice(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    truePriceTokenA: PromiseOrValue<BigNumberish>,
    truePriceTokenB: PromiseOrValue<BigNumberish>,
    liquidityAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      tokenAAmount: BigNumber;
      tokenBAmount: BigNumber;
    }
  >;

  getReservesAfterArbitrage(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    truePriceTokenA: PromiseOrValue<BigNumberish>,
    truePriceTokenB: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
  >;

  profitMaximizingTrade(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    truePriceTokenA: PromiseOrValue<BigNumberish>,
    truePriceTokenB: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { amountIn: BigNumber; aToB: boolean }>;

  router(overrides?: CallOverrides): Promise<string>;

  swapToPrice(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    truePriceTokenA: PromiseOrValue<BigNumberish>,
    truePriceTokenB: PromiseOrValue<BigNumberish>,
    maxSpendTokenA: PromiseOrValue<BigNumberish>,
    maxSpendTokenB: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    computeProfitMaximizingTrade(
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { aToB: boolean; amountIn: BigNumber }>;

    factory(overrides?: CallOverrides): Promise<string>;

    getGasCostOfGetLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityValue(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAAmount: BigNumber;
        tokenBAmount: BigNumber;
      }
    >;

    getLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAAmount: BigNumber;
        tokenBAmount: BigNumber;
      }
    >;

    getReservesAfterArbitrage(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    profitMaximizingTrade(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { amountIn: BigNumber; aToB: boolean }>;

    router(overrides?: CallOverrides): Promise<string>;

    swapToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      maxSpendTokenA: PromiseOrValue<BigNumberish>,
      maxSpendTokenB: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    computeProfitMaximizingTrade(
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getGasCostOfGetLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityValue(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReservesAfterArbitrage(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    profitMaximizingTrade(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    swapToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      maxSpendTokenA: PromiseOrValue<BigNumberish>,
      maxSpendTokenB: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeProfitMaximizingTrade(
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGasCostOfGetLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityValue(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityValueAfterArbitrageToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      liquidityAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReservesAfterArbitrage(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    profitMaximizingTrade(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapToPrice(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      truePriceTokenA: PromiseOrValue<BigNumberish>,
      truePriceTokenB: PromiseOrValue<BigNumberish>,
      maxSpendTokenA: PromiseOrValue<BigNumberish>,
      maxSpendTokenB: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
