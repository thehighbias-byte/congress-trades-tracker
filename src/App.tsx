import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchFilters } from './components/SearchFilters';
import { RecentTrades } from './components/RecentTrades';
import { AIInsights } from './components/AIInsights';
import { AutopilotPortfolio } from './components/AutopilotPortfolio';
import { TopPoliticians } from './components/TopPoliticians';
import { AIChatAssistant } from './components/AIChatAssistant';
import { mockTrades, mockAIInsights, mockPoliticians } from './data/mockData';

export function App() {
  const [filteredTrades, setFilteredTrades] = useState(mockTrades);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    party: 'all',
    sector: 'all',
    dateRange: '7days',
    tradeType: 'all'
  });

  useEffect(() => {
    let filtered = [...mockTrades];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(trade => 
        trade.politicianName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trade.stockSymbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trade.stockName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply party filter
    if (filters.party !== 'all') {
      filtered = filtered.filter(trade => trade.party === filters.party);
    }

    // Apply sector filter
    if (filters.sector !== 'all') {
      filtered = filtered.filter(trade => trade.sector === filters.sector);
    }

    // Apply trade type filter
    if (filters.tradeType !== 'all') {
      filtered = filtered.filter(trade => trade.tradeType === filters.tradeType);
    }

    // Apply date filter (simplified - in real app would parse dates)
    if (filters.dateRange === '1day') {
      filtered = filtered.slice(0, 2);
    }

    setFilteredTrades(filtered);
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <SearchFilters onSearch={handleSearch} onFilterChange={handleFilterChange} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Trades */}
            <RecentTrades trades={filteredTrades} />
            
            {/* Top Politicians */}
            <TopPoliticians politicians={mockPoliticians} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* AI Insights */}
            <AIInsights insights={mockAIInsights} />
            
            {/* Autopilot Portfolio */}
            <AutopilotPortfolio />
          </div>
        </div>
      </main>

      {/* AI Chat Assistant */}
      <AIChatAssistant />
    </div>
  );
}
