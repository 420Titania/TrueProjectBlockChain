// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract insurance {
    address[] policyholders;
    mapping (address => uint256) public policies;
    mapping (address => uint256) public claims;
    address payable owner;
    uint256 public totalPremium;

    constructor() {
        owner = payable(msg.sender);
    }

    function purchasePolicy(uint256 premium) public payable{
        require(msg.value == premium, "Incorrect premium amount.");
        require(premium > 0, "Premium amount must be greater than 0");
        policyholders.push(msg.sender);
        policies[msg.sender] = premium;
        totalPremium += premium;
    }

    function fileClaim(uint256 amount) public {
        require(policies[msg.sender] > 0, "Must have a valid policy to file a claim.");
        require(amount > 0, "Claim must be greater than 0.");
        require(amount <= policies[msg.sender], "Claim amount cannot exceed policy limit.");
        claims[msg.sender] += amount;
    }

    function approveClaim(address policyholder) public {
        require(msg.sender == owner, "Only the owner can approve claims.");
        require(claims[policyholder] > 0, "Policy Holder has no outstanding claims.");
        payable(policyholder).transfer(claims[policyholder]);
        claims [policyholder] = 0;
    }

    function getPolicy (address policyholder) public view returns (uint256){
        return policies[policyholder];
    }

    function getClaim (address policyholder) public view returns (uint256){
        return claims[policyholder];
    }

    function getTotalPremium() public view returns (uint256){
        return totalPremium;
    }
}