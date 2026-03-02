import React from 'react';
import { AIInsight } from '../data/mockData';
import { cn } from '../utils/cn';

interface AIInsightsProps {
  insights: AIInsight[];
}

export const AIInsights: React.FC<AIInsightsProps> = ({ insights }) => {
  const getTypeColor = (type: AIInsight['type']) => {
    switch (type) {
      case 'pattern':
        return 'bg-blue-900 text-blue-300 border-blue-700';
      case 'anomaly':
        return 'bg-orange-900 text-orange-300 border-orange-700';
      case 'opportunity':
        return 'bg-green-900 text-green-300 border-green-700';
      case 'risk':
        return 'bg-red-900 text-red-300 border-red-700';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-green-500';
    if (confidence >= 0.6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700">
      <div className="px-6 py-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">AI Insights</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400">Live Analysis</span>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={cn(
              'p-4 rounded-lg border transition-all duration-200 hover:shadow-lg',
              getTypeColor(insight.type)
            )}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{insight.title}</h3>
                <p className="text-sm opacity-90">{insight.description}</p>
              </div>
              <div className="ml-4 flex flex-col items-center">
                <div className="text-xs text-slate-300 mb-1">{Math.round(insight.confidence * 100)}%</div>
                <div className="w-8 h-1 bg-slate-600 rounded-full overflow-hidden">
                  <div
                    className={cn('h-full transition-all duration-500', getConfidenceColor(insight.confidence))}
                    style={{ width: `${insight.confidence * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {insight.affectedSymbols.map((symbol) => (
                <span
                  key={symbol}
                  className="px-2 py-1 text-xs font-mono bg-white bg-opacity-20 rounded"
                >
                  {symbol}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};