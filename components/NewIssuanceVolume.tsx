import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'New Issuance Volume',
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

const data = {
  labels: ['9/1/23', '11/1/23', '1/1/24', '3/1/24', '5/1/24', '7/1/24'],
  datasets: [
    {
      label: 'Stablecoins',
      data: [1000, 1200, 1500, 1800, 1600, 2000],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Private Credit',
      data: [800, 700, 1200, 1000, 900, 1100],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
    {
      label: 'US Treasury',
      data: [600, 800, 700, 900, 800, 1000],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // Add more datasets as needed
  ],
};

const NewIssuanceVolume: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <Bar options={options} data={data} />
    </div>
  );
};

export default NewIssuanceVolume;
