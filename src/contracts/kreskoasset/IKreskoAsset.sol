// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14;
import "@openzeppelin/contracts-upgradeable/access/IAccessControlEnumerableUpgradeable.sol";
import {IERC20Upgradeable} from "../shared/IERC20Upgradeable.sol";
import {Rebase} from "../shared/Rebase.sol";
import {IERC165} from "../shared/IERC165.sol";

interface IKreskoAsset is IERC20Upgradeable, IAccessControlEnumerableUpgradeable, IERC165 {
    function initialize(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        address _owner,
        address _kresko
    ) external;

    function kresko() external view returns (address);

    function mint(address _to, uint256 _amount) external;

    function burn(address _from, uint256 _amount) external;

    function rebaseInfo() external view returns (Rebase memory);

    function isRebased() external view returns (bool);

    function rebase(uint256 _denominator, bool _positive) external;

    function reinitializeERC20(
        string memory _name,
        string memory _symbol,
        uint8 _version
    ) external;
}
