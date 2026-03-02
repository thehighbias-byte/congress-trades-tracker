import React from 'react';
import { Trade } from '../data/mockData';
import { cn } from '../utils/cn';

interface RecentTradesProps {
  trades: Trade[];
}

export const RecentTrades: React.FC<RecentTradesProps> = ({ trades }) => {
  const getTradeTypeColor = (type: 'buy' | 'sell') => {
    return type === 'buy' 
      ? 'bg-green-900 text-green-300 border-green-700' 
      : 'bg-red-900 text-red-300 border-red-700';
  };

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

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700">
      <div className="px-6 py-4 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-white">Recent Trades</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                Politician
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                Sector
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-800 divide-y divide-slate-700">
            {trades.map((trade) => (
              <tr key={trade.id} className="hover:bg-slate-700 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {trade.politicianName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">{trade.politicianName}</div>
                      <div className="flex items-center mt-1">
                        <span className={cn('px-2 py-1 text-xs font-semibold rounded', getPartyColor(trade.party))}>
                          {trade.party}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-mono text-white">{trade.stockSymbol}</div>
                  <div className="text-sm text-slate-400">{trade.stockName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={cn(
                    'px-3 py-1 text-xs font-semibold rounded-full border',
                    getTradeTypeColor(trade.tradeType)
                  )}>
                    {trade.tradeType.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">${trade.amount.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">{trade.date}</div>
                  <div className="text-xs text-slate-400">Disclosed: {trade.disclosedDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">
                    {trade.sector}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};