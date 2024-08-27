import React, { useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Web3Auth } from '@web3auth/web3auth';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const WalletConnect = () => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "YOUR_INFURA_PROJECT_ID", // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // required
      options: {
        appName: "YOUR_APP_NAME", // required
        infuraId: "YOUR_INFURA_PROJECT_ID", // required
        chainId: 1,
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const connectWallet = async () => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const account = await signer.getAddress();

    setProvider(provider);
    setAccount(account);
  };

  return (
    <div>
      <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded">
        Connect Wallet
      </button>
      {account && <p>Connected Account: {account}</p>}
    </div>
  );
};

export default WalletConnect;
