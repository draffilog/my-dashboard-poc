import React from 'react';
import Layout from '../components/Layout'; 
import QuestsTable from '../components/QuestsTable';
import CurrentActivityOverview from '../components/CurrentActivityOverview';
import NextReward from '../components/NextReward';
import HotEvents from '../components/HotEvents';

const Quests: React.FC = () => {
  return (
    <Layout hideSidebar hideHeaderElements>
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Quests Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2 leading-relaxed">
          Explore the world of RWA activity. Your ultimate dashboard for tracking incentivized events in RWA and web3!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <CurrentActivityOverview />
        <NextReward />
        <HotEvents />
      </div>

      <QuestsTable />
    </Layout>
  );
};

export default Quests;
