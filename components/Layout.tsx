import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC<{ hideSidebar?: boolean, hideHeaderElements?: boolean }> = ({ children, hideSidebar, hideHeaderElements }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {!hideSidebar && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {!hideHeaderElements && <Header />} {/* Render Header only if hideHeaderElements is false */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
