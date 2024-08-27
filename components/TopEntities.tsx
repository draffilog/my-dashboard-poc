import React from 'react';

const data = [
  { network: 'Ethereum', value: '$88,566.54M', change: '1.49%', isUp: true },
  { network: 'TRON', value: '$61,700.50M', change: '1.75%', isUp: true },
  { network: 'Binance Smart Chain', value: '$4,958.37M', change: '0.88%', isUp: false },
  // Add other rows here...
];

const TopEntities: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-bold mb-4">Top Entities</h2>
      <div className="flex border-b mb-2">
        <button className="flex-1 text-blue-600 border-b-2 border-blue-600 pb-2">Networks</button>
        <button className="flex-1 text-gray-400 pb-2">Issuers</button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">Network</th>
            <th className="text-left p-2">Total Value</th>
            <th className="text-left p-2">30D%</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{row.network}</td>
              <td className="p-2">{row.value}</td>
              <td className={`p-2 ${row.isUp ? 'text-green-500' : 'text-red-500'}`}>
                {row.isUp ? '▲' : '▼'} {row.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopEntities;
