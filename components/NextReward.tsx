import React from 'react';

const NextReward: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Next Reward</h3>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-gray-900 mb-2">OpenEden</span>
        <span className="text-sm text-gray-700">Until 17 Aug 2025</span>
        <a href="#" className="text-blue-600 font-semibold mt-4">Claim Reward</a>
      </div>
    </div>
  );
};

export default NextReward;
