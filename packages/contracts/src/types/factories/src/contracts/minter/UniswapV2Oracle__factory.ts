/* Autogenerated file. Do not edit manually. */
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { UniswapV2Oracle, UniswapV2OracleInterface } from "../../../../src/contracts/minter/UniswapV2Oracle";

const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address",
            },
            {
                internalType: "address",
                name: "_admin",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "NewAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "krAsset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "pairAddress",
                type: "address",
            },
        ],
        name: "NewKrAssetPair",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newMinUpdatePeriod",
                type: "uint256",
            },
        ],
        name: "NewMinUpdatePeriod",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pair",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token0",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token1",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "updatePeriod",
                type: "uint256",
            },
        ],
        name: "NewPair",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token0",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token1",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "blockTimestampLast",
                type: "uint32",
            },
            {
                components: [
                    {
                        internalType: "uint224",
                        name: "_x",
                        type: "uint224",
                    },
                ],
                indexed: false,
                internalType: "struct UQ.uq112x112",
                name: "price0CumulativeLast",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint224",
                        name: "_x",
                        type: "uint224",
                    },
                ],
                indexed: false,
                internalType: "struct UQ.uq112x112",
                name: "price1CumulativeLast",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "updatePeriod",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timeElapsed",
                type: "uint256",
            },
        ],
        name: "NewPrice",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pair",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token0",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token1",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "updatePeriod",
                type: "uint256",
            },
        ],
        name: "PairUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_pairAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_updatePeriod",
                type: "uint256",
            },
        ],
        name: "configurePair",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_pairAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountIn",
                type: "uint256",
            },
        ],
        name: "consult",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_kreskoAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountIn",
                type: "uint256",
            },
        ],
        name: "consultKrAsset",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_erc20",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "drainERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "contract IUniswapV2Factory",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_kreskoAsset",
                type: "address",
            },
        ],
        name: "getKrAssetPair",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint224",
                                name: "_x",
                                type: "uint224",
                            },
                        ],
                        internalType: "struct UQ.uq112x112",
                        name: "price0Average",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint224",
                                name: "_x",
                                type: "uint224",
                            },
                        ],
                        internalType: "struct UQ.uq112x112",
                        name: "price1Average",
                        type: "tuple",
                    },
                    {
                        internalType: "address",
                        name: "token0",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token1",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "price0CumulativeLast",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "price1CumulativeLast",
                        type: "uint256",
                    },
                    {
                        internalType: "uint32",
                        name: "blockTimestampLast",
                        type: "uint32",
                    },
                    {
                        internalType: "uint256",
                        name: "updatePeriod",
                        type: "uint256",
                    },
                ],
                internalType: "struct UniswapV2Oracle.PairData",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "incentiveAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "incentiveToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_pairAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_kreskoAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_updatePeriod",
                type: "uint256",
            },
        ],
        name: "initPair",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "krAssets",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minUpdatePeriod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "pairs",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint224",
                        name: "_x",
                        type: "uint224",
                    },
                ],
                internalType: "struct UQ.uq112x112",
                name: "price0Average",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint224",
                        name: "_x",
                        type: "uint224",
                    },
                ],
                internalType: "struct UQ.uq112x112",
                name: "price1Average",
                type: "tuple",
            },
            {
                internalType: "address",
                name: "token0",
                type: "address",
            },
            {
                internalType: "address",
                name: "token1",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "price0CumulativeLast",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "price1CumulativeLast",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "blockTimestampLast",
                type: "uint32",
            },
            {
                internalType: "uint256",
                name: "updatePeriod",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newAdmin",
                type: "address",
            },
        ],
        name: "setAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newIncentiveToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "setIncentiveToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_minUpdatePeriod",
                type: "uint256",
            },
        ],
        name: "setMinUpdatePeriod",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_pairAddress",
                type: "address",
            },
        ],
        name: "update",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_kreskoAsset",
                type: "address",
            },
        ],
        name: "updateWithIncentive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
] as const;

const _bytecode =
    "0x60a06040526729a2241af62c00006001556103846003553480156200002357600080fd5b506040516200203a3803806200203a83398101604081905262000046916200012e565b60408051808201909152600381526237313160e81b60208201526001600160a01b038316620000935760405162461bcd60e51b81526004016200008a919062000165565b60405180910390fd5b5060408051808201909152600381526203731360ec1b60208201526001600160a01b038216620000d85760405162461bcd60e51b81526004016200008a919062000165565b5060609190911b6001600160601b031916608052600280546001600160a01b0319166001600160a01b03909216919091179055620001bb565b80516001600160a01b03811681146200012957600080fd5b919050565b6000806040838503121562000141578182fd5b6200014c8362000111565b91506200015c6020840162000111565b90509250929050565b6000602080835283518082850152825b81811015620001935785810183015185820160400152820162000175565b81811115620001a55783604083870101525b50601f01601f1916929092016040019392505050565b60805160601c611e61620001d9600039806115075250611e616000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063999db345116100a2578063c45310d411610071578063c45310d41461022e578063c45a015514610241578063cae5d73b14610249578063f851a44014610251578063fe33b3021461025957610116565b8063999db345146101ed5780639e89404714610200578063b26237e014610213578063b50d882c1461021b57610116565b8063636cfa0c116100e9578063636cfa0c1461017f578063638126f81461019f578063704b6c02146101b45780637e56402f146101c7578063813c3c93146101da57610116565b80631c1b87721461011b5780633cfdaa7d1461013057806352244ec8146101595780635b10f7ac1461016c575b600080fd5b61012e610129366004611af6565b610280565b005b61014361013e366004611af6565b61046d565b6040516101509190611d06565b60405180910390f35b61012e610167366004611ba6565b610525565b61012e61017a366004611b66565b6106a2565b61019261018d366004611b66565b610c4f565b6040516101509190611e0a565b6101a7610d94565b6040516101509190611c86565b61012e6101c2366004611af6565b610da3565b61012e6101d5366004611b2e565b610e34565b6101a76101e8366004611af6565b610f75565b61012e6101fb366004611c3f565b610f90565b61012e61020e366004611af6565b611017565b610192611376565b610192610229366004611ba6565b61137c565b61012e61023c366004611ba6565b611498565b6101a7611505565b610192611529565b6101a761152f565b61026c610267366004611af6565b61153e565b604051610150989796959493929190611d85565b6001600160a01b0381166000908152600460209081526040918290206006810154835180850190945260038452620dcc0d60ea1b92840192909252919063ffffffff166102e95760405162461bcd60e51b81526004016102e09190611cb3565b60405180910390fd5b5060008060006102f8856115b5565b6006870154600788015460408051808201909152600381526237303760e81b602082015294975092955090935063ffffffff9081168403929190831610156103535760405162461bcd60e51b81526004016102e09190611cb3565b5060405180602001604052808263ffffffff16876004015487038161037457fe5b046001600160e01b03908116909152905186546001600160e01b031916911617855560408051602081019091526005860154819063ffffffff8416908603816103b957fe5b046001600160e01b0390811690915290516001870180546001600160e01b03191691909216178155600486018590556005860184905560068601805463ffffffff191663ffffffff851690811790915560038701546002880154600789015460405193946001600160a01b039384169493909216927f4801f5931ba41963b02f50608ecec4798a1aaac41e7e85e64c50430e25c38fa49261045d928c928990611ddb565b60405180910390a4505050505050565b610475611a69565b506001600160a01b038082166000908152600560208181526040808420548516845260048083529381902081516101208101835281546001600160e01b039081166101008301908152825283518086018552600184015490911681529381019390935260028101548616918301919091526003810154909416606082015291830154608083015282015460a0820152600682015463ffffffff1660c082015260079091015460e08201525b919050565b60025460408051808201909152600381526237303960e81b6020820152906001600160a01b0316331461056b5760405162461bcd60e51b81526004016102e09190611cb3565b506001600160a01b0382811660009081526004602052604090206002015416158015906105b457506001600160a01b038281166000908152600460205260409020600301541615155b604051806040016040528060038152602001620dcc0d60ea1b815250906105ee5760405162461bcd60e51b81526004016102e09190611cb3565b50600354811015604051806040016040528060038152602001621b981960e91b8152509061062f5760405162461bcd60e51b81526004016102e09190611cb3565b506001600160a01b03808316600081815260046020526040908190206007810185905560038101546002909101549151908416939190911691907f5d6c5f7b483e292dff8098abd4301c1a91d6933f1a5c7bd3304031a6199dd64590610696908690611e0a565b60405180910390a45050565b60025460408051808201909152600381526237303960e81b6020820152906001600160a01b031633146106e85760405162461bcd60e51b81526004016102e09190611cb3565b5060408051808201909152600381526237303160e81b60208201526001600160a01b03841661072a5760405162461bcd60e51b81526004016102e09190611cb3565b50600354811015604051806040016040528060038152602001621b981960e91b8152509061076b5760405162461bcd60e51b81526004016102e09190611cb3565b506001600160a01b03838116600090815260046020908152604091829020600201548251808401909352600383526237303360e81b91830191909152909116156107c85760405162461bcd60e51b81526004016102e09190611cb3565b5060008390506000816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561080957600080fd5b505afa15801561081d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108419190611b12565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561087e57600080fd5b505afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b69190611b12565b90506001600160a01b038216158015906108d857506001600160a01b03811615155b604051806040016040528060038152602001620dcc0d60ea1b815250906109125760405162461bcd60e51b81526004016102e09190611cb3565b50816001600160a01b0316856001600160a01b031614806109445750806001600160a01b0316856001600160a01b0316145b1561099d576001600160a01b0385811660008181526005602052604080822080546001600160a01b031916948b169485179055517feabf019a206f6caf3c62b981b764479e0340f903f1ae92e6188e96401b49fe0c9190a35b6000806000856001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156109db57600080fd5b505afa1580156109ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a139190611bf1565b925092509250826001600160701b0316600014158015610a3b57506001600160701b03821615155b604051806040016040528060038152602001621b981b60e91b81525090610a755760405162461bcd60e51b81526004016102e09190611cb3565b506001600160a01b038981166000908152600460208181526040928390206002810180546001600160a01b03199081168c881617909155600390910180549091168986161790558251635909c0d560e01b81529251938a1693635909c0d5938084019390829003018186803b158015610aed57600080fd5b505afa158015610b01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b259190611c57565b600460008b6001600160a01b03166001600160a01b0316815260200190815260200160002060040181905550856001600160a01b0316635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8a57600080fd5b505afa158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc29190611c57565b6001600160a01b038a8116600081815260046020526040908190206005810194909455600784018b90556006909301805463ffffffff191663ffffffff861617905591518682169291881691907f8aec9bfffd40d5d25863c2e7368454e9b267f42b45bcdf7a99feddfa18c09f4c90610c3c908c90611e0a565b60405180910390a4505050505050505050565b6001600160a01b03808416600090815260046020818152604080842081516101208101835281546001600160e01b039081166101008301908152825283518086018552600184015490911681529381019390935260028101548616918301829052600381015486166060840152928301546080830152600583015460a0830152600683015463ffffffff1660c083015260079092015460e0820152919285161415610d19578051610d0990610d0490856117aa565b611834565b6001600160901b03169150610d8c565b80606001516001600160a01b0316846001600160a01b0316146040518060400160405280600381526020016206e60760eb1b81525090610d6c5760405162461bcd60e51b81526004016102e09190611cb3565b506020810151610d8090610d0490856117aa565b6001600160901b031691505b509392505050565b6000546001600160a01b031681565b60025460408051808201909152600381526237303960e81b6020820152906001600160a01b03163314610de95760405162461bcd60e51b81526004016102e09190611cb3565b50600280546001600160a01b0319166001600160a01b0383169081179091556040517f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c90600090a250565b60025460408051808201909152600381526237303960e81b6020820152906001600160a01b03163314610e7a5760405162461bcd60e51b81526004016102e09190611cb3565b506040516370a0823160e01b81526001600160a01b0383169063a9059cbb90839083906370a0823190610eb1903090600401611c86565b60206040518083038186803b158015610ec957600080fd5b505afa158015610edd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f019190611c57565b6040518363ffffffff1660e01b8152600401610f1e929190611c9a565b602060405180830381600087803b158015610f3857600080fd5b505af1158015610f4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f709190611bd1565b505050565b6005602052600090815260409020546001600160a01b031681565b60025460408051808201909152600381526237303960e81b6020820152906001600160a01b03163314610fd65760405162461bcd60e51b81526004016102e09190611cb3565b5060038190556040517f8a7025db6a9c815ab177c3a163acda9e7b1fb0fad7da8a4bc340863591925cda9061100c908390611e0a565b60405180910390a150565b6001600160a01b03808216600090815260056020908152604080832054909316825260048152908290206006810154835180850190945260038452620dcc0d60ea1b92840192909252919063ffffffff166110855760405162461bcd60e51b81526004016102e09190611cb3565b506001600160a01b038083166000908152600560205260408120549091829182916110b091166115b5565b6006870154600788015460408051808201909152600381526237303760e81b602082015294975092955090935063ffffffff90811684039291908316101561110b5760405162461bcd60e51b81526004016102e09190611cb3565b5060405180602001604052808263ffffffff16876004015487038161112c57fe5b046001600160e01b03908116909152905186546001600160e01b031916911617855560408051602081019091526005860154819063ffffffff84169086038161117157fe5b046001600160e01b0390811690915290516001870180546001600160e01b03191691909216178155600486018590556005860184905560068601805463ffffffff191663ffffffff851690811790915560038701546002880154600789015460405193946001600160a01b039384169493909216927f4801f5931ba41963b02f50608ecec4798a1aaac41e7e85e64c50430e25c38fa492611215928c928990611ddb565b60405180910390a46000546040516370a0823160e01b81526729a2241af62c0000916001600160a01b0316906370a0823190611255903090600401611c86565b60206040518083038186803b15801561126d57600080fd5b505afa158015611281573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a59190611c57565b11604051806040016040528060038152602001621b989960e91b815250906112e05760405162461bcd60e51b81526004016102e09190611cb3565b5060005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061131b9033906729a2241af62c000090600401611c9a565b602060405180830381600087803b15801561133557600080fd5b505af1158015611349573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136d9190611bd1565b50505050505050565b60035481565b6001600160a01b0380831660008181526005602081815260408084205486168452600480835281852082516101208101845281546001600160e01b0390811661010083019081528252845180870186526001840154909116815294810194909452600281015488169284018390526003810154909716606084015286015460808301529185015460a0820152600685015463ffffffff1660c082015260079094015460e0850152909291141561144c57805161143c90610d0490856117aa565b6001600160901b03169150611491565b80606001516001600160a01b0316846001600160a01b0316146114725760009150611491565b602081015161148590610d0490856117aa565b6001600160901b031691505b5092915050565b60025460408051808201909152600381526237303960e81b6020820152906001600160a01b031633146114de5760405162461bcd60e51b81526004016102e09190611cb3565b50600080546001600160a01b0319166001600160a01b039390931692909217909155600155565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b6002546001600160a01b031681565b6004602081815260009283526040928390208351808301855281546001600160e01b03908116825285519384019095526001820154909416825260028101546003820154938201546005830154600684015460079094015494956001600160a01b03938416959316939192909163ffffffff169088565b60008060006115c261183b565b9050836001600160a01b0316635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b1580156115fd57600080fd5b505afa158015611611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116359190611c57565b9250836001600160a01b0316635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b15801561167057600080fd5b505afa158015611684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a89190611c57565b91506000806000866001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156116e857600080fd5b505afa1580156116fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117209190611bf1565b9250925092508363ffffffff168163ffffffff16146117a05780840363ffffffff81166117596001600160701b03808616908716611845565b600001516001600160e01b031602870196508063ffffffff1661178e856001600160701b0316856001600160701b0316611845565b516001600160e01b0316029590950194505b5050509193909250565b6117b2611aba565b60008215806117d857505082516001600160e01b0316828102908382816117d557fe5b04145b61181d576040805162461bcd60e51b815260206004820152601160248201527055513a3a6d756c3a206f766572666c6f7760781b604482015290519081900360640190fd5b604080516020810190915290815290505b92915050565b5160701c90565b63ffffffff421690565b61184d611acd565b600082116118a2576040805162461bcd60e51b815260206004820152601e60248201527f55513a3a6672616374696f6e3a206469766973696f6e206279207a65726f0000604482015290519081900360640190fd5b826118bc575060408051602081019091526000815261182e565b6001600160901b03831161195157600082607085901b816118d957fe5b0490506001600160e01b03811115611931576040805162461bcd60e51b815260206004820152601660248201527555513a3a6672616374696f6e3a206f766572666c6f7760501b604482015290519081900360640190fd5b6040518060200160405280826001600160e01b031681525091505061182e565b600061196284600160701b856119b9565b90506001600160e01b03811115611931576040805162461bcd60e51b815260206004820152601660248201527555513a3a6672616374696f6e3a206f766572666c6f7760501b604482015290519081900360640190fd5b60008080600019858709868602925082811090839003039050806119ef57600084116119e457600080fd5b508290049050611a62565b8084116119fb57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b604051806101000160405280611a7d611acd565b8152602001611a8a611acd565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b6040518060200160405280600081525090565b60408051602081019091526000815290565b80516001600160701b038116811461052057600080fd5b600060208284031215611b07578081fd5b8135611a6281611e13565b600060208284031215611b23578081fd5b8151611a6281611e13565b60008060408385031215611b40578081fd5b8235611b4b81611e13565b91506020830135611b5b81611e13565b809150509250929050565b600080600060608486031215611b7a578081fd5b8335611b8581611e13565b92506020840135611b9581611e13565b929592945050506040919091013590565b60008060408385031215611bb8578182fd5b8235611bc381611e13565b946020939093013593505050565b600060208284031215611be2578081fd5b81518015158114611a62578182fd5b600080600060608486031215611c05578283fd5b611c0e84611adf565b9250611c1c60208501611adf565b9150604084015163ffffffff81168114611c34578182fd5b809150509250925092565b600060208284031215611c50578081fd5b5035919050565b600060208284031215611c68578081fd5b5051919050565b6001600160a01b03169052565b63ffffffff169052565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6000602080835283518082850152825b81811015611cdf57858101830151858201604001528201611cc3565b81811115611cf05783604083870101525b50601f01601f1916929092016040019392505050565b8151516001600160e01b03908116825260208084015151909116908201526040808301516001600160a01b031690820152606080830151610100830191611d4f90840182611c6f565b506080830151608083015260a083015160a083015260c0830151611d7660c0840182611c7c565b5060e092830151919092015290565b97516001600160e01b039081168952965190961660208801526001600160a01b039485166040880152929093166060860152608085015260a084019190915263ffffffff1660c083015260e08201526101000190565b93546001600160e01b03908116855292549092166020840152604083015263ffffffff16606082015260800190565b90815260200190565b6001600160a01b0381168114611e2857600080fd5b5056fea2646970667358221220a0e2e33c606b6ad01c9899e621183809dc7ef5b2d3b3cbe2216e699e4f345a4464736f6c63430007060033";

type UniswapV2OracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: UniswapV2OracleConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
    xs.length > 1;

export class UniswapV2Oracle__factory extends ContractFactory {
    constructor(...args: UniswapV2OracleConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "UniswapV2Oracle";
    }

    override deploy(
        _factory: PromiseOrValue<string>,
        _admin: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<UniswapV2Oracle> {
        return super.deploy(_factory, _admin, overrides || {}) as Promise<UniswapV2Oracle>;
    }
    override getDeployTransaction(
        _factory: PromiseOrValue<string>,
        _admin: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): TransactionRequest {
        return super.getDeployTransaction(_factory, _admin, overrides || {});
    }
    override attach(address: string): UniswapV2Oracle {
        return super.attach(address) as UniswapV2Oracle;
    }
    override connect(signer: Signer): UniswapV2Oracle__factory {
        return super.connect(signer) as UniswapV2Oracle__factory;
    }
    static readonly contractName: "UniswapV2Oracle";

    public readonly contractName: "UniswapV2Oracle";

    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): UniswapV2OracleInterface {
        return new utils.Interface(_abi) as UniswapV2OracleInterface;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Oracle {
        return new Contract(address, _abi, signerOrProvider) as UniswapV2Oracle;
    }
}
