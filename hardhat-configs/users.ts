import { HardhatUserConfig } from "hardhat/config";

if (!process.env.OPERATOR) {
    throw new Error("OPERATOR not set");
}
if (!process.env.FEED_VALIDATOR) {
    throw new Error("FEED_VALIDATOR not set");
}
if (!process.env.TREASURY) {
    throw new Error("TREASURY not set");
}
if (!process.env.FUNDER) {
    throw new Error("FUNDER not set");
}
if (!process.env.MULTISIG) {
    throw new Error("MULTISIG not set");
}

export const hardhatUsers = {
    // Dynamic
    multisig: {
        default: process.env.MULTISIG,
        420: process.env.MULTISIG,
    },
    treasury: {
        default: process.env.MULTISIG,
        420: process.env.MULTISIG,
    },
    feedValidator: {
        default: process.env.FEED_VALIDATOR,
    },
    testnetFunder: {
        default: process.env.FUNDER,
    },
    // Derivative addresses
    deployer: {
        default: 0,
    },
    admin: {
        default: 0,
    },
    owner: {
        default: 2,
    },
    liquidator: {
        default: 4,
    },
    nonadmin: {
        default: 5,
    },
    // Test users
    userOne: {
        default: 31,
    },
    userTwo: {
        default: 32,
    },
    userThree: {
        default: 33,
    },
    userFour: {
        default: 34,
    },
    userFive: {
        default: 35,
    },
    testUserOne: {
        default: 36,
    },
    testUserTwo: {
        default: 37,
    },
    testUserThree: {
        default: 38,
    },
    testUserFour: {
        default: 39,
    },
    testUserFive: {
        default: 40,
    },
    testUserSix: {
        default: 41,
    },
    testUserSeven: {
        default: 42,
    },
    testUserEight: {
        default: 43,
    },
    testUserNine: {
        default: 44,
    },
    testUserTen: {
        default: 45,
    },
    testUserExtra: {
        default: 46,
    },
    devOne: {
        default: 47,
    },
    devTwo: {
        default: 48,
    },
    extOne: {
        default: 49,
    },
    extTwo: {
        default: 50,
    },
    extThree: {
        default: 51,
    },
    funder: {
        default: 52,
    },
};
export const users: HardhatUserConfig["namedAccounts"] = hardhatUsers;
