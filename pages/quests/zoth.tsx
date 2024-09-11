import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ZothQuest: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleInfoClick = (content: string) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleTaskClick = (task: string, link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      setModalContent(task);
      setShowModal(true);
    }
  };

  const infoCards = [
    { title: 'What is Zoth?', content: 'Zoth is an innovative decentralized finance (DeFi) protocol designed to revolutionize the way users interact with digital assets. Built on cutting-edge blockchain technology, Zoth aims to provide a seamless, secure, and efficient platform for trading, lending, and yield farming.' },
    { title: 'Incentivized Testnet', content: 'The ZOTH Incentivized Testnet is a crucial phase in the project\'s development, allowing users to experience the platform\'s features firsthand while contributing to its improvement.' },
    { title: 'Rewards', content: 'By participating in this testnet, you\'ll have the opportunity to shape the future of Zoth and potentially earn rewards from the allocated 12.5% of ZOTH tokens set aside for user incentives.' },
    { title: 'How to Participate', content: 'Complete the tasks listed below to qualify for potential airdrops and rewards. Each task is designed to test different aspects of the Zoth platform and provide valuable feedback for its development.' },
  ];

  const tasks = [
    { name: 'Connect Wallet', action: () => handleTaskClick('Connect your Web3 wallet to the Zoth testnet platform.', 'https://rewards.zoth.io/') },
    { name: 'Claim Testnet Tokens', action: () => handleTaskClick('Use the Zoth faucet to claim BERA tokens, then swap some BERA for HONEY tokens on the testnet DEX.', 'https://bartio.faucet.berachain.com/#dapps') },
    { name: 'Liquidity Provision', action: () => handleTaskClick('Add liquidity to the BERA-HONEY pool on the Zoth testnet DEX.', 'https://bartio.bex.berachain.com/swap') },
    { name: 'Perform Swaps', action: () => handleTaskClick('Execute at least 5 token swaps on the Zoth DEX, using various token pairs.', 'https://bartio.bex.berachain.com/swap') },
    { name: 'Stake Tokens', action: () => handleTaskClick('Stake a minimum of 100 HONEY tokens in the Zoth staking contract.', 'https://bartio.bex.berachain.com/swap') },
    { name: 'Participate in Governance', action: () => handleTaskClick('Cast votes on at least 2 test governance proposals using your staked HONEY tokens.', 'https://bartio.bex.berachain.com/swap') },
    { name: 'Bug Reporting', action: () => handleTaskClick('Report any bugs or issues you encounter while using the Zoth testnet platform.', 'https://docs.zoth.io/bug-report') },
    { name: 'Community Engagement', action: () => handleTaskClick('Join the Zoth Discord server and participate in at least 3 discussions or Q&A sessions.', 'https://discord.gg/zothprotocol') },
    { name: 'Social Media Task', action: () => handleTaskClick('Follow Zoth on Twitter and retweet an announcement about the incentivized testnet.', 'https://twitter.com/zothprotocol') },
    { name: 'Feedback Submission', action: () => handleTaskClick('Complete a feedback form about your experience with the Zoth testnet and suggest improvements.', 'https://forms.gle/zothFeedbackForm') },
  ];

  return (
    <>
      <Head>
        <title>Zoth Quest - Incentivized Testnet</title>
        <meta name="description" content="Participate in the Zoth Incentivized Testnet and earn rewards" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between py-4">
              <Link href="/quests">
                <span className="text-blue-500 hover:text-blue-600 cursor-pointer">← Back to Quests</span>
              </Link>
              <div className="flex space-x-4">
                <Link href="#about">
                  <span className="text-gray-600 hover:text-gray-800 cursor-pointer">About</span>
                </Link>
                <Link href="#tasks">
                  <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Tasks</span>
                </Link>
                <Link href="#rewards">
                  <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Rewards</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div id="about" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Zoth</h1>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Confirmed
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <h2 className="text-sm text-gray-500">Reward Type</h2>
                <p className="font-semibold text-gray-700">Airdrop</p>
              </div>
              <div>
                <h2 className="text-sm text-gray-500">Status</h2>
                <p className="font-semibold text-gray-700">Confirmed</p>
              </div>
              <div>
                <h2 className="text-sm text-gray-500">Reward Date</h2>
                <p className="font-semibold text-gray-700">TBA</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About Zoth</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {infoCards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => handleInfoClick(card.content)}
                  className="bg-gray-100 p-4 rounded-lg text-left hover:bg-gray-200 transition-colors"
                >
                  <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 truncate">{card.content}</p>
                </button>
              ))}
            </div>
          </div>

          <div id="tasks" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">ZOTH Incentivized Testnet Tasks</h2>
            <p className="text-gray-600 mb-6">
              Complete the following tasks to qualify for potential airdrops and rewards. Click on each task for more information or to be directed to the relevant page.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tasks.map((task, index) => (
                <button
                  key={index}
                  onClick={task.action}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-between"
                >
                  <span className="text-lg font-semibold">{task.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div id="rewards" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Rewards</h2>
            <p className="text-gray-600 mb-4">
              Information about rewards will be updated here. Stay tuned for more details on potential airdrops and other incentives for participating in the Zoth testnet.
            </p>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md">
              <h3 className="text-xl font-bold mb-4">Information</h3>
              <p className="text-gray-600">{modalContent}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ZothQuest;