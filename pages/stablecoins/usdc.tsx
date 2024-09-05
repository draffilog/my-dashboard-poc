import React, { useEffect } from 'react';

const USDCPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new TradingView.widget({
        width: '100%',
        height: 610,
        symbol: 'BINANCE:USDCUSDT',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: 'tradingview_usdc',
      });
    };
    document.getElementById('tradingview-widget-container-usdc')?.appendChild(script) ?? document.body.appendChild(script);
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <img src="https://cdn.rwa.xyz/images/issuer-icons/128/color/circle.png" alt="Circle Logo" className="w-16 h-16 mr-4" />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Circle USD <span className="text-gray-700">USDC</span></h1>
            <p className="text-gray-600 text-sm">Rank: 2 · 5000 Watchlists · Stablecoin</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-lg text-sm">Add Alert</button>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm">Swap / Bridge</button>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex justify-between items-center mt-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">$1.00</h2>
          <p className="text-green-500 text-sm">↑ 0.001% ($0.0000111)</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 text-sm">Price Range</p>
          <div className="flex items-center text-sm">
            <span className="text-gray-600">$1.00</span>
            <span className="mx-2 text-gray-800">24H</span>
            <span className="text-gray-600">$1.00</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-8 mt-8 border-b">
        <button className="text-blue-600 font-semibold pb-2 border-b-4 border-blue-600 text-sm">Overview</button>
        <button className="text-gray-600 pb-2 text-sm">Markets</button>
        <button className="text-gray-600 pb-2 text-sm">Arbitrage</button>
        <button className="text-gray-600 pb-2 text-sm">Analytics</button>
        <button className="text-gray-600 pb-2 text-sm">Historical data</button>
        <button className="text-gray-600 pb-2 text-sm">News</button>
        <button className="text-gray-600 pb-2 text-sm">Team</button>
      </div>

      {/* General Info Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-900">General Info</h3>
        <div className="flex justify-between items-start mt-4">
          <div>
            <p className="text-gray-600 text-sm">Contracts/Explorers:</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="bg-gray-100 p-2 rounded-lg text-sm text-gray-800">Ethereum</span>
              <span className="text-blue-500 font-mono text-sm">0xA0b...6eb48</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-sm">Description</p>
            <p className="mt-2 text-gray-700 text-sm">USDC is a fiat-collateralized stablecoin pegged to the US Dollar issued by Circle.</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-900">Circle USD (USDC) Chart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          {/* Insert TradingView chart widget */}
          <div id="tradingview-widget-container-usdc">
            <div id="tradingview_usdc"></div>
          </div>
        </div>
      </div>

      {/* Price Statistics Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-900">USDC Price Statistics</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Market Cap</p>
              <p className="text-xl font-semibold text-gray-900">$35.37B</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">FDV</p>
              <p className="text-xl font-semibold text-gray-900">$35.37B</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">ATH Market Cap</p>
              <p className="text-xl font-semibold text-gray-900">$42.12B</p>
            </div>
            {/* Add more statistics as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDCPage;
