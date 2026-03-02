import React, { useState } from 'react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: any) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedParty, setSelectedParty] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [dateRange, setDateRange] = useState('7days');
  const [tradeType, setTradeType] = useState('all');

  const parties = ['all', 'National', 'Labour', 'Green', 'ACT'];
  const sectors = ['all', 'Healthcare', 'Technology', 'Energy', 'Infrastructure', 'Logistics', 'Telecommunications'];
  const dateRanges = [
    { value: '1day', label: 'Last 24 Hours' },
    { value: '7days', label: 'Last 7 Days' },
    { value: '30days', label: 'Last 30 Days' },
    { value: '90days', label: 'Last 90 Days' }
  ];
  const tradeTypes = ['all', 'buy', 'sell'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    let newFilters = {};
    
    switch (filterType) {
      case 'party':
        setSelectedParty(value);
        newFilters = { party: value, sector: selectedSector, dateRange, tradeType };
        break;
      case 'sector':
        setSelectedSector(value);
        newFilters = { party: selectedParty, sector: value, dateRange, tradeType };
        break;
      case 'dateRange':
        setDateRange(value);
        newFilters = { party: selectedParty, sector: selectedSector, dateRange: value, tradeType };
        break;
      case 'tradeType':
        setTradeType(value);
        newFilters = { party: selectedParty, sector: selectedSector, dateRange, tradeType: value };
        break;
    }
    
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Search Trades
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by MP name, stock symbol, or company..."
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Party
            </label>
            <select
              value={selectedParty}
              onChange={(e) => handleFilterChange('party', e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {parties.map((party) => (
                <option key={party} value={party}>
                  {party === 'all' ? 'All Parties' : party}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Sector
            </label>
            <select
              value={selectedSector}
              onChange={(e) => handleFilterChange('sector', e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector === 'all' ? 'All Sectors' : sector}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Trade Type
            </label>
            <select
              value={tradeType}
              onChange={(e) => handleFilterChange('tradeType', e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {tradeTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Trades' : type.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Time Period
          </label>
          <div className="flex flex-wrap gap-2">
            {dateRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => handleFilterChange('dateRange', range.value)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${dateRange === range.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }
                `}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 p-3 bg-purple-900 bg-opacity-20 border border-purple-700 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-purple-400">AI Filters Active</span>
            </div>
            <div className="text-xs text-slate-400">
              Showing trades matching your criteria
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};