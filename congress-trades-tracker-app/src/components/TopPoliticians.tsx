import React from 'react';
import { Politician } from '../data/mockData';

interface TopPoliticiansProps {
  politicians: Politician[];
}

export const TopPoliticians: React.FC<TopPoliticiansProps> = ({ politicians }) => {
  const getPartyColor = (party: string) => {
    switch (party) {
      case 'National':
        return 'bg-blue-600';
      case 'Labour':
        return 'bg-red-600';
      case 'Green':
        return 'bg-green-600';
      case 'ACT':
        return 'bg-yellow-600 text-black';
      default:
        return 'bg-slate-600';
    }
  };

  const sortedPoliticians = [...politicians].sort((a, b) => b.totalValue - a.totalValue);

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700">
      <div className="px-6 py-4 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-white">Top Trading MPs</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {sortedPoliticians.map((politician, index) => (
            <div key={politician.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-shrink-0 h-12 w-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {politician.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{politician.name}</div>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className={getPartyColor(politician.party) + ' px-2 py-1 text-xs font-semibold rounded'}>
                      {politician.party}
                    </span>
                    <span className="text-xs text-slate-400">{politician.electorate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="text-sm text-slate-400">Total Value</div>
                  <div className="text-lg font-semibold text-white">${(politician.totalValue / 1000).toFixed(0)}K</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">Trades</div>
                  <div className="text-lg font-semibold text-white">{politician.totalTrades}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">Last Active</div>
                  <div className="text-sm font-semibold text-white">{politician.lastActive}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};