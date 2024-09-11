import React from 'react';
import Link from 'next/link';

const questsData = [
  {
    name: 'RWA Protocol Staking',
    taskType: 'Staking',
    updatedStatus: (
      <span className="text-2xl">🤔</span>
    ),
    statusText: 'Potential - 9 Aug 2024',
    rewardType: 'RWA Tokens',
    raiseFunds: '$5M',
    twitterScore: '15K',
  },
  {
    name: 'Zoth',
    taskType: 'Testnet',
    updatedStatus: (
      <span className="text-2xl">👌</span>
    ),
    statusText: 'Confirmed - TBA',
    rewardType: 'Airdrop',
    raiseFunds: '',
    twitterScore: '25K',
  },
  {
    name: 'RWA Governance Participation',
    taskType: 'Governance',
    updatedStatus: (
      <span className="text-2xl">👌</span>
    ),
    statusText: 'Confirmed - 9 Aug 2024',
    rewardType: 'Governance Power',
    raiseFunds: '$10M',
    twitterScore: '12K',
  },
  {
    name: 'RWA Liquidity Provision',
    taskType: 'Liquidity',
    updatedStatus: (
      <span className="text-2xl">👌</span>
    ),
    statusText: 'Confirmed - 8 Aug 2024',
    rewardType: 'Liquidity Rewards',
    raiseFunds: '$3M',
    twitterScore: '8K',
  },
  {
    name: 'RWA Ambassador Program',
    taskType: 'Social',
    updatedStatus: (
      <span className="text-2xl">🤔</span>
    ),
    statusText: 'Potential - 8 Aug 2024',
    rewardType: 'Ambassador Role',
    raiseFunds: '',
    twitterScore: '20K',
  },
  {
    name: 'RWA Testnet Participation',
    taskType: 'Testnet',
    updatedStatus: (
      <span className="text-2xl">👌</span>
    ),
    statusText: 'Confirmed - 8 Aug 2024',
    rewardType: 'Testnet Tokens',
    raiseFunds: '',
    twitterScore: '30K',
  },
  // Add more RWA-related activities...
];

const QuestsTable: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Task Type</th>
              <th className="py-3 px-6 text-left">Updated Status</th>
              <th className="py-3 px-6 text-left">Reward Type</th>
              <th className="py-3 px-6 text-left">Raise/Funds</th>
              <th className="py-3 px-6 text-left">Twitter Score</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {questsData.map((quest, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <Link href={`/quests/${quest.name.toLowerCase()}`}>
                    <span className="font-medium text-blue-500 hover:underline cursor-pointer">{quest.name}</span>
                  </Link>
                </td>
                <td className="py-3 px-6 text-left">{quest.taskType}</td>
                <td className="py-3 px-6 text-left">
                  {quest.updatedStatus} <span className="ml-2">{quest.statusText}</span>
                </td>
                <td className="py-3 px-6 text-left">{quest.rewardType}</td>
                <td className="py-3 px-6 text-left">{quest.raiseFunds}</td>
                <td className="py-3 px-6 text-left">{quest.twitterScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestsTable;
