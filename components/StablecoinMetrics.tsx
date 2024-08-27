import React from 'react';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
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

const StablecoinMetrics: React.FC = () => {
  const areaData = {
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
      // Add more datasets here to match the exact data
    ],
  };

  const pieData = {
    labels: ['Ethereum', 'TRON', 'Binance Smart Chain', 'Solana'],
    datasets: [
      {
        data: [86.3, 61.7, 5, 4.2],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const areaOptions = {
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
    <div className="grid grid-cols-2 gap-4">
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
        <Line data={areaData} options={areaOptions} />
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
  );
};

export default StablecoinMetrics;
