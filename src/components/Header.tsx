import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">NZ Parliament Trades Tracker</h1>
            <span className="ml-3 px-2 py-1 text-xs font-semibold rounded-full bg-purple-600 text-white">
              AI Enhanced
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-400">Real-time Insights</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};