import React from 'react';

const HotEvents: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hot Events</h3>
      <div className="space-y-4">
        <div>
          <span className="text-lg font-bold text-gray-900 block">RLUSD</span>
          <span className="text-sm text-gray-700 block">Stablecoin</span>
          <span className="text-2xl font-extrabold text-gray-900 block">$18.50M</span>
        </div>
        <div>
          <span className="text-lg font-bold text-gray-900 block">Ondo Finance</span>
          <span className="text-sm text-gray-700 block">Liquidity</span>
          <span className="text-2xl font-extrabold text-gray-900 block">$7.00M</span>
        </div>
      </div>
    </div>
  );
};

export default HotEvents;
