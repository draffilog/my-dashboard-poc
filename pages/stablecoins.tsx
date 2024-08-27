import React from 'react';
import Link from 'next/link';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const stablecoinsData = [
  {
    name: 'Tether USD',
    ticker: '$USDT',
    network: ['Ethereum', 'Tron', 'Binance Smart Chain', 'Solana'],
    marketCap: '$114,755,920,197',
    price: '$0.9984',
    website: 'https://tether.to',
    monthlyActiveAddresses: '15M',
    monthlyVolumeTransfers: '$1.5T',
    holders: '3.5M',
    contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    logo: 'https://cdn.rwa.xyz/images/issuer-icons/128/color/tether.png',
  },
  {
    name: 'Circle USD',
    ticker: '$USDC',
    network: ['Ethereum', 'Tron', 'Binance Smart Chain', 'Solana'],
    marketCap: '$35,373,242,273',
    price: '$0.9975',
    website: 'https://www.centre.io/usdc',
    monthlyActiveAddresses: '10M',
    monthlyVolumeTransfers: '$900B',
    holders: '2.7M',
    contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eb48',
    logo: 'https://cdn.rwa.xyz/images/issuer-icons/128/color/circle.png',
  },
  {
    name: 'Ripple USD',
    ticker: '$RLUSD',
    network: ['XRP Ledger', 'Ethereum'],
    marketCap: 'To be determined', // Replace with actual data when available
    price: '$1.00',
    website: 'https://ripple.com', // Replace with actual URL if needed
    monthlyActiveAddresses: 'To be determined', // Replace with actual data when available
    monthlyVolumeTransfers: 'To be determined', // Replace with actual data when available
    holders: 'To be determined', // Replace with actual data when available
    contractAddress: 'To be determined', // Replace with actual data when available
    logo: 'https://seeklogo.com/images/R/ripple-xrp-logo-E97D62205B-seeklogo.com.png', // Replace with the actual path to the RLUSD logo
  }  
  // Add more stablecoin data here...
];

const Stablecoins: React.FC = () => {
  const marketCapData = {
    labels: ['1/1/18', '1/1/20', '1/1/22', '1/1/24'],
    datasets: [
      {
        label: 'USDT',
        data: [0, 50, 100, 150],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'USDC',
        data: [0, 40, 80, 120],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'BSC-USD',
        data: [0, 20, 60, 100],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
      {
        label: 'RLUSD',
        data: [0, 0, 85, 350],
        borderColor: 'rgba(0, 206, 86, 1)',
        backgroundColor: 'rgba(10, 206, 86, 0.2)',
        fill: true,
      },
      // Add more datasets here to match the exact data
    ],
  };

  const marketCapOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Market Caps',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number) {
            return '$' + value.toLocaleString() + 'B';
          },
        },
      },
    },
  };

  const pieData = {
    labels: ['XRP Ledger', 'Ethereum', 'TRON', 'Binance Smart Chain', 'Solana', ,],
    datasets: [
      {
        data: [31.3,86.3, 61.7, 5, 4.2],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(31, 31, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(31, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Market Caps by Network',
      },
    },
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Stablecoins</h1>
        <p className="text-lg text-gray-600 mt-2 leading-relaxed">
          Explore the activity and risks behind crypto and asset-backed stablecoins. View encumbrance and new issuer on-chain traction, regulatory information, and structural data.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-8 mb-12">
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-900">$164.59B</div>
          <div className="text-sm text-gray-500">Market Cap</div>
          <div className="text-green-500 text-sm">▲ +1.93% from 30d ago</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-900">0.79%</div>
          <div className="text-sm text-gray-500">% of M2 Money Supply</div>
          <div className="text-green-500 text-sm">▲ +1.93% from 30d ago</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-900">$1.67T</div>
          <div className="text-sm text-gray-500">Monthly Transfer Volume</div>
          <div className="text-green-500 text-sm">▲ +5.17% from 30d ago</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-900">17.19M</div>
          <div className="text-sm text-gray-500">Monthly Active Addresses</div>
          <div className="text-red-500 text-sm">▼ -5.74% from 30d ago</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-900">112.39M</div>
          <div className="text-sm text-gray-500">Holders</div>
          <div className="text-green-500 text-sm">▲ +7.2% from 30d ago</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Stablecoin Metrics</h2>
          <div className="flex space-x-4 mb-4">
            <button className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded">Market Caps</button>
            <button className="text-gray-600 font-semibold px-3 py-1 rounded">Mint / Burn Volumes</button>
            <button className="text-gray-600 font-semibold px-3 py-1 rounded">Active Addresses</button>
            <button className="text-gray-600 font-semibold px-3 py-1 rounded">Transfer Volume</button>
            <button className="text-gray-600 font-semibold px-3 py-1 rounded">Transfer Count</button>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Market Caps shows the scale and power law distribution between all stablecoin issuers.</p>
          </div>
          <Line data={marketCapData} options={marketCapOptions} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Market Caps</h2>
          <div className="flex justify-end">
            <select className="border-gray-300 rounded">
              <option>Network</option>
              <option>Asset</option>
            </select>
          </div>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto"> {/* Limit the table container width */}
      <div className="overflow-y-auto max-h-64"> {/* Set a max height for the scrollable area */}
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
                  <Link href={`/stablecoins/${coin.ticker.toLowerCase().replace('$', '')}`}>
                    <span className="font-medium text-blue-500 hover:underline">{coin.name}</span>
                  </Link>
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
                    Website
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
    </div>
  );
};

export default Stablecoins;