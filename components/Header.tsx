import React from 'react';

const Header: React.FC<{ hideHeaderElements?: boolean }> = ({ hideHeaderElements }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {!hideHeaderElements && (
        <div className="flex items-center">
          <div className="text-blue-500 text-xl font-bold">Dashboard</div>
        </div>
      )}
      <div className="flex items-center">
        {!hideHeaderElements && (
          <>
            <div className="text-gray-700 mr-4">User Name</div>
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
