import React from 'react';
import TopEntities from '../components/TopEntities';
import NewIssuanceVolume from '../components/NewIssuanceVolume';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      <TopEntities />
      <NewIssuanceVolume />
    </div>
  );
};

export default Dashboard;
