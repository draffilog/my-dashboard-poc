import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const stablecoinsData = [
  {
    name: 'Tether USDt',
    ticker: '$USDT',
    network: ['Ethereum', 'Tron', 'Binance Smart Chain', 'Solana'],
    marketCap: '$114,755,920,197',
    price: '$0.9984',
    website: 'https://tether.to',
    monthlyActiveAddresses: '15M',
    monthlyVolumeTransfers: '$1.5T',
    holders: '3.5M',
    contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    logo: '/path/to/tether-logo.png',
  },
  {
    name: 'USDC',
    ticker: '$USDC',
    network: ['Ethereum', 'Tron', 'Binance Smart Chain', 'Solana'],
    marketCap: '$35,373,242,273',
    price: '$0.9975',
    website: 'https://www.centre.io/usdc',
    monthlyActiveAddresses: '10M',
    monthlyVolumeTransfers: '$900B',
    holders: '2.7M',
    contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eb48',
    logo: '/path/to/usdc-logo.png',
  },
  // Add more stablecoin data here...
];

const StablecoinTable: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900">Stablecoins</h1>
        <p className="text-lg text-gray-600 mt-2 leading-relaxed">
          Expand rows to view different networks supported by each stablecoin product.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Ticker</th>
              <th className="py-3 px-6 text-left">Network</th>
              <th className="py-3 px-6 text-right">Market Cap</th>
              <th className="py-3 px-6 text-right">Price</th>
              <th className="py-3 px-6 text-left">Website</th>
              <th className="py-3 px-6 text-right">Monthly Active Addresses</th>
              <th className="py-3 px-6 text-right">Monthly Volume Transfers</th>
              <th className="py-3 px-6 text-right">Holders</th>
              <th className="py-3 px-6 text-left">Contract Address</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {stablecoinsData.map((coin, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left flex items-center">
                  <img src={coin.logo} alt={coin.name} className="w-6 h-6 mr-2" />
                  <span className="font-medium">{coin.name}</span>
                </td>
                <td className="py-3 px-6 text-left">{coin.ticker}</td>
                <td className="py-3 px-6 text-left">
                  {coin.network.map((net, idx) => (
                    <span key={idx} className="inline-block mr-2 text-xs font-medium bg-gray-100 p-1 rounded">
                      {net}
                    </span>
                  ))}
                </td>
                <td className="py-3 px-6 text-right">{coin.marketCap}</td>
                <td className="py-3 px-6 text-right">{coin.price}</td>
                <td className="py-3 px-6 text-left">
                  <a href={coin.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <FaExternalLinkAlt className="inline-block mr-1" /> Website
                  </a>
                </td>
                <td className="py-3 px-6 text-right">{coin.monthlyActiveAddresses}</td>
                <td className="py-3 px-6 text-right">{coin.monthlyVolumeTransfers}</td>
                <td className="py-3 px-6 text-right">{coin.holders}</td>
                <td className="py-3 px-6 text-left">
                  <span className="font-mono text-xs">{coin.contractAddress}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StablecoinTable;
