/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// Deployment
import { HardhatUserConfig } from "hardhat/config";
import { resolve } from "path";
import "tsconfig-paths/register";
/* -------------------------------------------------------------------------- */
/*                                   Plugins                                  */
/* -------------------------------------------------------------------------- */

import "hardhat-diamond-abi";
// note: hardhat-diamond-abi should always be exported before typechain if used together
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-web3";
import "hardhat-contract-sizer";
import "hardhat-interface-generator";
import "solidity-coverage";
import * as tdly from "@tenderly/hardhat-tenderly";
tdly.setup();

// import "hardhat-preprocessor";
// import "hardhat-watcher";
// import "hardhat-gas-reporter";

/* -------------------------------------------------------------------------- */
/*                                   Dotenv                                   */
/* -------------------------------------------------------------------------- */
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: resolve(__dirname, "./.env") });
const mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
    throw new Error("No mnemonic set");
}
const isExport = process.env.EXPORT;
let exportUtil: any;

/* -------------------------------------------------------------------------- */
/*                                    Tasks                                   */
/* -------------------------------------------------------------------------- */
import "./src/tasks";
/* -------------------------------------------------------------------------- */
/*                                Config helpers                              */
/* -------------------------------------------------------------------------- */
import { compilers, handleForking, networks, users, diamondAbiConfig } from "hardhat-configs";
/* -------------------------------------------------------------------------- */
/*                              Extensions To HRE                             */
/* -------------------------------------------------------------------------- */
import "hardhat-configs/extensions";

/* -------------------------------------------------------------------------- */
/*                               CONFIGURATION                                */
/* -------------------------------------------------------------------------- */

let externalArtifacts = [];
let outDir = "types/typechain";

if (isExport) {
    console.log("isExport", isExport);
    exportUtil = require("./src/utils/export");
    externalArtifacts = exportUtil.externalArtifacts();
    outDir = "packages/contracts/src/types/";
}

const config: HardhatUserConfig = {
    solidity: { compilers },
    networks: handleForking(networks(mnemonic)),
    namedAccounts: users,
    mocha: {
        reporter: "mochawesome",
        timeout: process.env.CI ? 45000 : process.env.FORKING ? 300000 : 15000,
    },
    paths: {
        artifacts: "artifacts",
        cache: "cache",
        sources: "src/contracts",
        tests: "src/test",
        deploy: "src/deploy",
        deployments: "deployments",
    },
    external: {
        contracts: [
            {
                artifacts: "./node_modules/@kreskolabs/gnosis-safe-contracts/build/artifacts",
            },
        ],
    },
    diamondAbi: diamondAbiConfig,
    typechain: {
        outDir,
        target: "ethers-v5",
        alwaysGenerateOverloads: false,
        dontOverrideCompile: false,
        discriminateTypes: true,
        tsNocheck: true,
        externalArtifacts,
    },
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: false,
        runOnCompile: false,
        except: ["vendor"],
    },
    etherscan: {
        apiKey: {
            optimisticGoerli: process.env.ETHERSCAN_API_KEY!,
        },
    },
    tenderly: {
        project: "protocol",
        username: "kresko",
        privateVerification: true,
    },
};

export default config;
