import type { HardhatRuntimeEnvironment, HardhatUsers } from "hardhat/types";
import "@kreskolabs/hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import { FluxPriceFeedFactory } from "types/typechain/src/contracts/vendor/flux/FluxPriceFeedFactory";
export const getUsers = async (hre?: HardhatRuntimeEnvironment): Promise<HardhatUsers<SignerWithAddress>> => {
    if (!hre) hre = require("hardhat");

    return (await hre.ethers.getNamedSigners()) as HardhatUsers<SignerWithAddress>;
};
export const getOracle = async (oracleDesc: string, hre?: HardhatRuntimeEnvironment) => {
    const { feedValidator } = await hre.ethers.getNamedSigners();
    const factory = await hre.ethers.getContract<FluxPriceFeedFactory>("FluxPriceFeedFactory");

    const fluxFeed = await factory.addressOfPricePair(oracleDesc, 8, feedValidator.address);
    if (fluxFeed === hre.ethers.constants.AddressZero) {
        throw new Error(`Oracle ${oracleDesc} address is 0`);
    }
    return fluxFeed;
};
export const getAddresses = async (hre?: HardhatRuntimeEnvironment): Promise<HardhatUsers<string>> => {
    if (!hre) hre = require("hardhat");

    return (await hre.getNamedAccounts()) as HardhatUsers<string>;
};

export const randomContractAddress = (hre: HardhatRuntimeEnvironment) => {
    const pubKey = hre.ethers.Wallet.createRandom().publicKey;

    return hre.ethers.utils.getContractAddress({
        from: pubKey,
        nonce: 0,
    });
};
