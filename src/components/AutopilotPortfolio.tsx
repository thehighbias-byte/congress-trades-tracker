import React, { useState } from 'react';
import { portfolioPerformance, sectorData } from '../data/mockData';

interface PortfolioPosition {
  symbol: string;
  name: string;
  weight: number;
  return: number;
  votes: number;
}

export const AutopilotPortfolio: React.FC = () => {
  const [isAutopilotOn, setIsAutopilotOn] = useState(true);
  const [positions] = useState<PortfolioPosition[]>([
    { symbol: 'FPH', name: 'Fisher & Paykel Healthcare', weight: 15, return: 8.2, votes: 3 },
    { symbol: 'CEN', name: 'Contact Energy', weight: 12, return: 5.1, votes: 2 },
    { symbol: 'AIA', name: 'Auckland Airport', weight: 10, return: 6.8, votes: 4 },
    { symbol: 'XRO', name: 'Xero Limited', weight: 8, return: -2.1, votes: 1 },
    { symbol: 'SPK', name: 'Spark NZ', weight: 7, return: 3.5, votes: 2 },
    { symbol: 'MFT', name: 'Mainfreight', weight: 6, return: 4.2, votes: 1 },
    { symbol: 'Cash', name: 'Cash Reserve', weight: 42, return: 0.0, votes: 0 }
  ]);

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700">
      <div className="px-6 py-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">AI Autopilot Portfolio</h2>
          <button
            onClick={() => setIsAutopilotOn(!isAutopilotOn)}
            className={`
              relative inline-flex h-6 w-11 items-center rounded-full transition-colors
              ${isAutopilotOn ? 'bg-green-600' : 'bg-slate-600'}
            `}
          >
            <span
              className={`
                inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                ${isAutopilotOn ? 'translate-x-6' : 'translate-x-1'}
              `}
            />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-1">Total Return</div>
            <div className="text-2xl font-bold text-green-400">+{portfolioPerformance.totalReturn}%</div>
            <div className="text-xs text-slate-400">vs {portfolioPerformance.benchmarkReturn}% benchmark</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-1">Alpha</div>
            <div className="text-2xl font-bold text-white">+{portfolioPerformance.alpha}%</div>
            <div className="text-xs text-slate-400">Outperformance</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-1">Sharpe Ratio</div>
            <div className="text-2xl font-bold text-white">{portfolioPerformance.sharpeRatio}</div>
            <div className="text-xs text-slate-400">Risk-adjusted return</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-1">Win Rate</div>
            <div className="text-2xl font-bold text-white">{portfolioPerformance.winningTrades}%</div>
            <div className="text-xs text-slate-400">{portfolioPerformance.winningTrades}/{portfolioPerformance.totalTrades} trades</div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-md font-semibold text-white mb-3">Portfolio Positions</h3>
          {positions.map((position) => (
            <div key={position.symbol} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="font-mono text-white font-semibold">{position.symbol}</div>
                  <div className="text-xs text-slate-400">{position.name}</div>
                </div>
                {position.votes > 0 && (
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      {[...Array(Math.min(position.votes, 3))].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-purple-600 rounded-full border-2 border-slate-700 flex items-center justify-center text-xs text-white"
                        >
                          {i === 2 && position.votes > 3 ? `+${position.votes - 2}` : 'MP'}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 ml-2">{position.votes} votes</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="text-sm text-slate-400">Weight</div>
                  <div className="font-semibold text-white">{position.weight}%</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">Return</div>
                  <div className={`font-semibold ${position.return >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {position.return >= 0 ? '+' : ''}{position.return}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-slate-700 rounded-lg">
          <h3 className="text-md font-semibold text-white mb-3">Sector Allocation</h3>
          <div className="grid grid-cols-3 gap-3">
            {sectorData.slice(0, 6).map((sector) => (
              <div key={sector.sector} className="flex items-center justify-between">
                <span className="text-sm text-slate-300">{sector.sector}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 transition-all duration-500"
                      style={{ width: `${sector.value}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-400">{sector.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isAutopilotOn && (
          <div className="mt-4 p-3 bg-green-900 bg-opacity-20 border border-green-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Autopilot Active</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              AI is monitoring parliamentary trades and will automatically adjust positions based on confidence scores
            </p>
          </div>
        )}
      </div>
    </div>
  );
};