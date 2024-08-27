import React from 'react';
import Link from 'next/link';
import { FaCoins, FaLandmark, FaDollarSign, FaChartBar, FaOilCan, FaChartPie, FaLeaf, FaBuilding, FaHome, FaTasks } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white text-gray-700 flex flex-col shadow-lg p-4 rounded-lg">
      <div className="mb-6">
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Asset Classes</h2>
        <nav className="mt-4">
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCoins className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="/stablecoins" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Stablecoins</a>
              </Link>
              <span className="ml-2 bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">NEW</span>
            </li>
            <li className="flex items-center">
              <FaLandmark className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">U.S. Treasuries</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
            <li className="flex items-center">
              <FaDollarSign className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Global Bonds</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
            <li className="flex items-center">
              <FaChartBar className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Private Credit</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
            <li className="flex items-center">
              <FaOilCan className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Commodities</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
            <li className="flex items-center">
              <FaChartPie className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Stocks</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
            <li className="flex items-center">
              <FaLeaf className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Carbon Credits</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
            <li className="flex items-center">
              <FaBuilding className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Private Equity</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
            <li className="flex items-center">
              <FaHome className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="#" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Real Estate</a>
              </Link>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Coming Soon!</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8">
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Tools</h2>
        <nav className="mt-4">
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaTasks className="text-blue-500 w-5 h-5 mr-3" />
              <Link href="/quests" legacyBehavior>
                <a className="text-sm font-medium text-gray-900">Quests</a>
              </Link>
              <span className="ml-2 bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">NEW</span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
