import React from 'react';

const CurrentActivityOverview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Activity Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-lg font-bold text-gray-700 block">🤔 New activity</span>
          <span className="text-2xl font-extrabold text-gray-900 block">17</span>
        </div>
        <div>
          <span className="text-lg font-bold text-gray-700 block">👌 Award confirmed</span>
          <span className="text-2xl font-extrabold text-gray-900 block">189</span>
        </div>
        <div>
          <span className="text-lg font-bold text-gray-700 block">👀 Rewards to check</span>
          <span className="text-2xl font-extrabold text-gray-900 block">6</span>
        </div>
        <div>
          <span className="text-lg font-bold text-gray-700 block">💰 Recently distributed</span>
          <span className="text-2xl font-extrabold text-gray-900 block">Avg. Reward $270</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentActivityOverview;
