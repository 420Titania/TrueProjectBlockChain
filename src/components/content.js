import React, {useEffect, useState} from 'react';
import content from '../components/styles/content.css';
import abi from "./insurance.json";
import { ethers } from "ethers";



const PackCard = () => {
    const contractAddress = "0x510A514Ee629f6D35824471e26a6F4FDAE18550A";
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
      
            const premium = ethers.utils.parseEther("0.08"); // Convert 0.08 Ether to BigNumber
      
            console.log("Purchasing insurance policy...");
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
                    <span className="price">0.08 ETH</span>
                    <span className="date">/month</span>
                </div>
                <button type="button" className="btn" onClick={purchasePolicy}>Buy Insurance</button>
            </div>
        </div>
    );
};

export default PackCard;