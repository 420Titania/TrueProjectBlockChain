import React, {useEffect, useState} from 'react';
import content from '../components/styles/content.css';
import abi from "./insurance.json";
import { ethers } from "ethers";



const PackCard = () => {
    const contractAddress = "0x31F8A1ec54B847EeD5BCdbB639bddDb88DF7494a";
    const contractABI = abi.abi;

    const purchasePolicy = async () => {
        try {
          const { ethereum } = window;
      
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const insuranceContract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
      
            const premium = ethers.utils.parseEther("0.001"); // Convert 0.08 Ether to BigNumber
      
            console.log("Purchasing insurance policy...");
      
            const balance = await provider.getBalance(provider.provider.selectedAddress);
            const balanceInEth = ethers.utils.formatEther(balance);
      
            if (Number(balanceInEth) < 0.08) {
              // Display warning to the user
              alert("Not enough Ethereum balance to purchase the insurance policy.");
              return;
            }
      
            const policyTxn = await insuranceContract.purchasePolicy(premium, {
              value: premium,
            });
      
            await policyTxn.wait();
      
            console.log("Transaction mined:", policyTxn.hash);
            console.log("Insurance policy purchased!");
      
            // Additional logic if needed
      
            // Clear the form fields or update UI as needed
          }
        } catch (error) {
          console.log(error);
        }
      };
      
      const fileClaim = async () => {
        try {
          const { ethereum } = window;
      
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const insuranceContract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
      
            const amount = ethers.utils.parseEther("0.001"); // Set amount to 0.001 Ether
      
            console.log("Filing claim...");
            const claimTxn = await insuranceContract.fileClaim(amount);
      
            await claimTxn.wait();
      
            console.log("Transaction mined:", claimTxn.hash);
            console.log("Claim filed!");
      
            // Additional logic if needed
          }
        } catch (error) {
          console.log(error);
        }
      };      

      const getPolicy = async (address) => {
        try {
          const { ethereum } = window;
      
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const insuranceContract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
      
            const policy = await insuranceContract.getPolicy(address);
            console.log("Policy for address", address, ":", policy.toString());
      
            // Additional logic if needed
          }
        } catch (error) {
          console.log(error);
        }
      };          
      
      
    return (
        <div className="pack_card">
            <div className="banner">
                <span className="banner_tag">most popular</span>
            </div>
            <div className="pack_name">PLATINUM</div>

            <p className="description">Infectious Diseases</p>

            <div className="lists">
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Masa Perlindungan: Seumur Hidup</span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Santunan Meninggal Dunia <b> 0,69 ETH</b></span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Dapat NFT Platinum</span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full support</span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Validasi: All Region</span>
                </div>
            </div>

            <div className="bottom">
                <div className="price_container">
                    <span className="devise"></span>
                    <span className="price">0.001 ETH</span>
                    <span className="date">/month</span>
                </div>
                <button type="button" className="btn" onClick={purchasePolicy}>Buy Insurance</button>                
            </div>
        </div>
    );
};

export default PackCard;