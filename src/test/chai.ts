import chai from "chai";
import { solidity } from "ethereum-waffle";
import { smock } from "@defi-wonderland/smock";
import chaiAsPromised from "chai-as-promised";
import { BigNumber } from "ethers";
// eslint-disable-next-line @typescript-eslint/no-var-requires
chai.use(require("chai-bn")(BigNumber));
chai.use(solidity);
chai.use(smock.matchers);
chai.config.includeStack = true;
chai.use(chaiAsPromised);

export const expect = chai.expect;
