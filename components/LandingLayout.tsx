import React from 'react';

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header or Navigation can be added here if needed */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      {/* Footer can be added here if needed */}
    </div>
  );
};

export default LandingLayout;
