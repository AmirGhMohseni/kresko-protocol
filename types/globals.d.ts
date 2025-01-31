import { FakeContract, MockContract } from "@defi-wonderland/smock";
import {
    TestCollateralAssetArgs,
    TestCollateralAssetUpdate,
    TestKreskoAssetArgs,
    TestKreskoAssetUpdate,
} from "@utils/test";
import type { BytesLike } from "ethers";
import { DeployResult } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ContractTypes } from "types";
import { KreskoAssetAnchor } from "types/typechain/src/contracts/kreskoasset";
import type * as Contracts from "./typechain";
import { CollateralAssetStruct, KrAssetStructOutput } from "./typechain/src/contracts/minter/facets/StateFacet";
declare global {
    const hre: HardhatRuntimeEnvironment;
    /* -------------------------------------------------------------------------- */
    /*                              Minter Contracts                              */
    /* -------------------------------------------------------------------------- */
    export type TC = ContractTypes;

    type TestKrAsset = {
        krAsset?: boolean;
        collateral?: boolean;
        address: string;
        contract: TC["KreskoAsset"];
        deployArgs?: TestKreskoAssetArgs;
        kresko: () => Promise<KrAssetStructOutput>;
        mocks: {
            contract: MockContract<KreskoAsset>;
            clFeed: MockContract<Contracts.MockAggregatorV3>;
            fluxFeed: FakeContract<FluxPriceFeed>;
            anchor?: MockContract<KreskoAssetAnchor>;
        };
        anchor: KreskoAssetAnchor;
        priceFeed: Contracts.MockAggregatorV3;
        setBalance: (user: SignerWithAddress, balance: BigNumber) => Promise<void>;
        setPrice: (price: number) => void;
        getPrice: () => Promise<BigNumber>;
        setMarketOpen: (marketOpen: boolean) => void;
        getMarketOpen: () => Promise<boolean>;
        update: (update: TestKreskoAssetUpdate) => Promise<TestKrAsset>;
    };
    type TestCollateral = {
        address: string;
        collateral?: boolean;
        krAsset?: boolean;
        deployArgs: TestCollateralAssetArgs;
        contract: ERC20Upgradeable;
        kresko: () => Promise<CollateralAssetStruct>;
        mocks?: {
            contract: MockContract<ERC20Upgradeable>;
            clFeed: MockContract<Contracts.MockAggregatorV3>;
            fluxFeed: FakeContract<FluxPriceFeed>;
            anchor?: MockContract<KreskoAssetAnchor>;
        };
        priceFeed: Contracts.MockAggregatorV3;
        anchor: KreskoAssetAnchor;
        setPrice: (price: number) => void;
        setBalance: (user: SignerWithAddress, amount: BigNumber) => Promise<void>;
        getPrice: () => Promise<BigNumber>;
        update: (update: TestCollateralAssetUpdate) => Promise<TestCollateral>;
    };

    type TestKrAssets = TestKrAsset[];
    type TestCollaterals = TestCollateral[];

    type TestAsset = TestCollateral | TestKrAsset;
    /* -------------------------------------------------------------------------- */
    /*                                   Oracles                                  */
    /* -------------------------------------------------------------------------- */
    type SequencerUptimeFeed = Contracts.MockSequencerUptimeFeed;
    type FluxPriceFeed = TC["FluxPriceFeed"];
    type FluxPriceFeedFactory = TC["FluxPriceFeedFactory"];
    type UniV2Router = Contracts.UniswapV2Router02;
    type UniV2Factory = Contracts.UniswapV2Factory;
    /* -------------------------------------------------------------------------- */
    /*                               Misc Contracts                               */
    /* -------------------------------------------------------------------------- */

    type Contract = import("ethers").Contract;
    type GnosisSafeL2 = TC["GnosisSafeL2"];
    type KreskoAsset = TC["KreskoAsset"];
    type KrStaking = TC["KrStaking"];
    type WETH9 = TC["WETH9"];
    type ERC20Upgradeable = TC["ERC20Upgradeable"];
    type IERC20 = TC["IERC20"];
    type BigNumberish = import("ethers").BigNumberish;
    type BigNumber = import("ethers").BigNumber;
    /* -------------------------------------------------------------------------- */
    /*                               Signers / Users                              */
    /* -------------------------------------------------------------------------- */
    type Signer = import("ethers").Signer;
    type SignerWithAddress = import("@nomiclabs/hardhat-ethers/signers").SignerWithAddress;

    /* -------------------------------------------------------------------------- */
    /*                                 Deployments                                */
    /* -------------------------------------------------------------------------- */
    type Artifact = import("hardhat/types").Artifact;

    // type DeployResultWithSignaturesUnknown<C extends Contract> = readonly [C, string[], DeployResult];
    type DeployResultWithSignatures<T> = readonly [T, string[], DeployResult];

    type DiamondCutInitializer = [string, BytesLike];

    interface KreskoConstructor {
        feeRecipient: string;
        liquidationIncentive: BigNumberish;
        minimumCollateralizationRatio: BigNumberish;
        minimumDebtValue: BigNumberish;
        liquidationThreshold: BigNumberish;
    }
    interface KreskoAssetInitializer {
        name: string;
        symbol: string;
        decimals: number;
        owner: string;
        kresko: string;
    }

    interface KreskoAssetAnchorInitializer {
        krAsset: string;
        name: string;
        symbol: string;
        owner: string;
    }
    interface Network {
        rpcUrl?: string;
        chainId?: number;
        tags: string[];
        gasPrice?: number | "auto" | undefined;
        live?: boolean;
        saveDeployments?: boolean;
    }
}
