/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Multisender,
  MultisenderInterface,
  TokenStruct,
} from "../../../../src/contracts/test/Multisender";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct Token[]",
        name: "_tokens",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_kiss",
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
        name: "account",
        type: "address",
      },
    ],
    name: "Funded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct Token",
        name: "_token",
        type: "tuple",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "wethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "kissAmount",
        type: "uint256",
      },
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "drain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "drainERC20",
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
    name: "funded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "owners",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct Token[]",
        name: "_tokens",
        type: "tuple[]",
      },
    ],
    name: "setTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "toggleOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x604060808152346200010d5762001254803803806200001e8162000169565b9283398101906060818303126200010d57805167ffffffffffffffff91908281116200010d57810183601f820112156200010d57805192831162000112575b60209362000070858560051b0162000169565b93858086838152019160061b840101918083116200010d5786889493929301905b828210620000d05750505050620000bb90620000b3620000c2958401620001ae565b9201620001ae565b91620001d0565b51610e8b9081620003c98239f35b90919293828203126200010d5787878195620000eb62000139565b85518152620000fc838701620001ae565b818401528152019392019062000091565b600080fd5b6200011c62000122565b6200005d565b50634e487b7160e01b600052604160045260246000fd5b604080519190820167ffffffffffffffff8111838210176200015a57604052565b6200016462000122565b604052565b6040519190601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820167ffffffffffffffff8111838210176200015a57604052565b519073ffffffffffffffffffffffffffffffffffffffff821682036200010d57565b6000338152602081815260408220926001938460ff198254161790558383905b62000296575b5050600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9095169490941790935550620002949291506200024d9050565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b565b8151811015620003c257828160051b83010151600280549068010000000000000000821015620003b2575b87820180825582101562000385578652848620825191881b019081559084015190860180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146200035857840184620001f0565b7f4e487b710000000000000000000000000000000000000000000000000000000084526011600452602484fd5b7f4e487b710000000000000000000000000000000000000000000000000000000087526032600452602487fd5b620003bc62000122565b620002c1565b620001f656fe608080604052600436101561001a575b50361561001857005b005b6000803560e01c918263022914a7146100c557505080631857f346146100bc57806341bdc8a4146100b357806345f9fc78146100aa5780637a9f788d146100a15780639804cb4d146100985780639890220b1461008f5763f859430514610082575b3861000f565b61008a610af9565b61007c565b5061008a610a9f565b5061008a6109f5565b5061008a610830565b5061008a6107cf565b5061008a61066c565b5061008a610183565b3461012b576020367ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc011261012b5760ff60406020936004356101078161012f565b73ffffffffffffffffffffffffffffffffffffffff16815280855220541615158152f35b5080fd5b73ffffffffffffffffffffffffffffffffffffffff81160361014d57565b600080fd5b9181601f8401121561014d5782359167ffffffffffffffff831161014d576020808501948460051b01011161014d57565b503461014d576080367ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc011261014d5760043567ffffffffffffffff811161014d576101d3903690600401610152565b33600090815260208190526040902060243591906101fc906101f7905b5460ff1690565b610c06565b6000905b80821061020957005b6102496101f061022261021d858589610df6565b610e14565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902090565b6106575761028c61026161022261021d858589610df6565b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60005b6002548110156103a1576102e26102c96102c960016102ad85610c83565b50015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b906102f161021d858589610df6565b916102fb82610c83565b505492813b1561014d576040517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff919091166004820152602481019390935261037692906000908290604490829084905af18015610394575b61037b575b50610ccb565b61028f565b8061038861038e92610938565b80610661565b38610370565b61039c610e21565b61036b565b5060038054919290916103c99073ffffffffffffffffffffffffffffffffffffffff166102c9565b803b1561014d576000808061055f6102c96102c961021d888b8e6104b38f6020906105b29f6102c98c9f91610448928e604051809263b6b55f2560e01b825281838161041d8b600483019190602083019252565b03925af1801561064a575b610637575b505473ffffffffffffffffffffffffffffffffffffffff1690565b61045661021d888888610df6565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911660048201526024810192909252909283919082908d9082906044820190565b03925af1801561062a575b61060b575b508760206105496104e16102c96102c960045460018060a01b031690565b6104ef61021d888888610df6565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091166004820152606435602482015293849283919082906044820190565b03925af180156105fe575b6105cf575b50610df6565b8190604435156105c5575b60443591f1156105b8575b6105866102c961021d838689610df6565b7fb436c2bf863ccd7b8f63171201efd4792066b4ce8e543dde9c3e9e9ab98e216c6000604051a2610ccb565b90610200565b6105c0610e21565b610575565b6108fc915061056a565b6105f09060203d6020116105f7575b6105e88183610975565b810190610e2e565b5038610559565b503d6105de565b610606610e21565b610554565b6106239060203d6020116105f7576105e88183610975565b50386104c3565b610632610e21565b6104be565b8061038861064492610938565b3861042d565b610652610e21565b610428565b906105b290610ccb565b600091031261014d57565b503461014d576000806003193601126107cc5733600090815260208190526040902061069b906101f7906101f0565b6004546106bf906102c99073ffffffffffffffffffffffffffffffffffffffff1681565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260209183918391610751918381602481855afa9081156107bf575b8591610792575b506040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481019190915293849283919082906044820190565b03925af18015610785575b610767575b82604051f35b8161077d92903d106105f7576105e88183610975565b503880610761565b61078d610e21565b61075c565b6107b29150843d86116107b8575b6107aa8183610975565b810190610e46565b3861070d565b503d6107a0565b6107c7610e21565b610706565b80fd5b503461014d576020367ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc011261014d5760043561080b8161012f565b60018060a01b03166000526001602052602060ff604060002054166040519015158152f35b503461014d5760208060031936011261014d5760043567ffffffffffffffff811161014d57610863903690600401610152565b909160009233845283825260409261088060ff8587205416610c06565b845b81811061088e57858551f35b8061089d61091c928486610df6565b356108a78161012f565b73ffffffffffffffffffffffffffffffffffffffff168752868552858720546109179060ff16156109066108df61021d85888a610df6565b73ffffffffffffffffffffffffffffffffffffffff16600090815260208190526040902090565b9060ff801983541691151516179055565b610ccb565b610882565b50634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161094c57604052565b610954610921565b604052565b6040810190811067ffffffffffffffff82111761094c57604052565b90601f8019910116810190811067ffffffffffffffff82111761094c57604052565b604090600319011261014d57604051906109b082610959565b60043582526024356020836109c48361012f565b0152565b919082604091031261014d576040516109e081610959565b6020808294803584520135916109c48361012f565b503461014d5760208060031936011261014d5767ffffffffffffffff60043581811161014d573660238201121561014d578060040135918211610a92575b604092835192610a48828260051b0185610975565b80845260248285019160061b8401019236841161014d57602401905b838210610a7a57600086610a7787610d30565b51f35b828691610a8736856109c8565b815201910190610a64565b610a9a610921565b610a33565b503461014d576000806003193601126107cc5733815280602052610ac960ff604083205416610c06565b8080808047818115610af0575b3390f115610ae357604051f35b610aeb610e21565b604051f35b506108fc610ad6565b503461014d576040367ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc011261014d57610b3236610997565b60009033825281602052610b4c60ff604084205416610c06565b610b7060025468010000000000000000811015610bf9575b60018101600255610c83565b919091610bcc578051825560200151600190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055604051f35b7f4e487b710000000000000000000000000000000000000000000000000000000083526004839052602483fd5b610c01610921565b610b64565b15610c0d57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f216f0000000000000000000000000000000000000000000000000000000000006044820152606490fd5b50634e487b7160e01b600052603260045260246000fd5b600254811015610cbe575b600260005260011b7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190600090565b610cc6610c6c565b610c8e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610cf85760010190565b634e487b7160e01b600052601160045260246000fd5b6020918151811015610d23575b60051b010190565b610d2b610c6c565b610d1b565b9033600052602060008152610d4c60ff60406000205416610c06565b60005b8351811015610df05780610d66610deb9286610d0e565b5151610d7182610c83565b505561091773ffffffffffffffffffffffffffffffffffffffff84610d968489610d0e565b510151166001610da584610c83565b500180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b610d4f565b50509050565b9190811015610e07575b60051b0190565b610e0f610c6c565b610e00565b35610e1e8161012f565b90565b506040513d6000823e3d90fd5b9081602091031261014d5751801515810361014d5790565b9081602091031261014d57519056fea26469706673582212205268d1199cf00c4de8964bf1ca3eb15e86f21373388d2b761537fc0daa630c6364736f6c634300080e0033";

type MultisenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultisenderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multisender__factory extends ContractFactory {
  constructor(...args: MultisenderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokens: TokenStruct[],
    _weth: PromiseOrValue<string>,
    _kiss: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multisender> {
    return super.deploy(
      _tokens,
      _weth,
      _kiss,
      overrides || {}
    ) as Promise<Multisender>;
  }
  override getDeployTransaction(
    _tokens: TokenStruct[],
    _weth: PromiseOrValue<string>,
    _kiss: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokens, _weth, _kiss, overrides || {});
  }
  override attach(address: string): Multisender {
    return super.attach(address) as Multisender;
  }
  override connect(signer: Signer): Multisender__factory {
    return super.connect(signer) as Multisender__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultisenderInterface {
    return new utils.Interface(_abi) as MultisenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multisender {
    return new Contract(address, _abi, signerOrProvider) as Multisender;
  }
}
