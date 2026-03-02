export interface Trade {
  id: string;
  politicianId: string;
  politicianName: string;
  party: string;
  stockSymbol: string;
  stockName: string;
  tradeType: 'buy' | 'sell';
  amount: number;
  date: string;
  disclosedDate: string;
  sector: string;
}

export interface Politician {
  id: string;
  name: string;
  party: string;
  electorate: string;
  totalTrades: number;
  totalValue: number;
  lastActive: string;
}

export interface AIInsight {
  id: string;
  type: 'pattern' | 'anomaly' | 'opportunity' | 'risk';
  title: string;
  description: string;
  confidence: number;
  affectedSymbols: string[];
  timestamp: string;
}

export const mockTrades: Trade[] = [
  {
    id: '1',
    politicianId: 'p1',
    politicianName: 'Chris Bishop',
    party: 'National',
    stockSymbol: 'FPH',
    stockName: 'Fisher & Paykel Healthcare',
    tradeType: 'buy',
    amount: 50000,
    date: '2025-11-01',
    disclosedDate: '2025-11-05',
    sector: 'Healthcare'
  },
  {
    id: '2',
    politicianId: 'p2',
    politicianName: 'Grant Robertson',
    party: 'Labour',
    stockSymbol: 'XRO',
    stockName: 'Xero Limited',
    tradeType: 'sell',
    amount: 75000,
    date: '2025-10-28',
    disclosedDate: '2025-11-05',
    sector: 'Technology'
  },
  {
    id: '3',
    politicianId: 'p3',
    politicianName: 'Chlöe Swarbrick',
    party: 'Green',
    stockSymbol: 'CEN',
    stockName: 'Contact Energy',
    tradeType: 'buy',
    amount: 25000,
    date: '2025-11-02',
    disclosedDate: '2025-11-04',
    sector: 'Energy'
  },
  {
    id: '4',
    politicianId: 'p4',
    politicianName: 'David Seymour',
    party: 'ACT',
    stockSymbol: 'AIA',
    stockName: 'Auckland International Airport',
    tradeType: 'buy',
    amount: 100000,
    date: '2025-10-30',
    disclosedDate: '2025-11-03',
    sector: 'Infrastructure'
  },
  {
    id: '5',
    politicianId: 'p5',
    politicianName: 'Willie Jackson',
    party: 'Labour',
    stockSymbol: 'MFT',
    stockName: 'Mainfreight Limited',
    tradeType: 'sell',
    amount: 45000,
    date: '2025-10-29',
    disclosedDate: '2025-11-03',
    sector: 'Logistics'
  },
  {
    id: '6',
    politicianId: 'p1',
    politicianName: 'Chris Bishop',
    party: 'National',
    stockSymbol: 'SPK',
    stockName: 'Spark New Zealand',
    tradeType: 'buy',
    amount: 35000,
    date: '2025-10-25',
    disclosedDate: '2025-11-02',
    sector: 'Telecommunications'
  }
];

export const mockPoliticians: Politician[] = [
  {
    id: 'p1',
    name: 'Chris Bishop',
    party: 'National',
    electorate: 'Hutt South',
    totalTrades: 12,
    totalValue: 285000,
    lastActive: '2025-11-01'
  },
  {
    id: 'p2',
    name: 'Grant Robertson',
    party: 'Labour',
    electorate: 'Wellington Central',
    totalTrades: 8,
    totalValue: 320000,
    lastActive: '2025-10-28'
  },
  {
    id: 'p3',
    name: 'Chlöe Swarbrick',
    party: 'Green',
    electorate: 'Auckland Central',
    totalTrades: 5,
    totalValue: 95000,
    lastActive: '2025-11-02'
  },
  {
    id: 'p4',
    name: 'David Seymour',
    party: 'ACT',
    electorate: 'Epsom',
    totalTrades: 15,
    totalValue: 580000,
    lastActive: '2025-10-30'
  },
  {
    id: 'p5',
    name: 'Willie Jackson',
    party: 'Labour',
    electorate: 'List MP',
    totalTrades: 7,
    totalValue: 180000,
    lastActive: '2025-10-29'
  }
];

export const mockAIInsights: AIInsight[] = [
  {
    id: 'ai1',
    type: 'pattern',
    title: 'Cluster Buying in Healthcare Sector',
    description: 'Multiple MPs have increased positions in healthcare stocks ahead of the upcoming health policy announcement. Historical data shows 78% correlation with positive sector performance.',
    confidence: 0.78,
    affectedSymbols: ['FPH', 'EBO', 'RMD'],
    timestamp: '2025-11-05T10:30:00Z'
  },
  {
    id: 'ai2',
    type: 'anomaly',
    title: 'Unusual Selling Pattern Detected',
    description: 'Grant Robertson\'s Xero position liquidation represents his largest single trade this year. AI analysis flags this as deviation from typical portfolio rebalancing behavior.',
    confidence: 0.85,
    affectedSymbols: ['XRO'],
    timestamp: '2025-11-05T09:15:00Z'
  },
  {
    id: 'ai3',
    type: 'opportunity',
    title: 'Energy Sector Momentum Building',
    description: 'Green Party MPs are accumulating renewable energy positions. Combined with recent policy signals, this suggests potential upside for clean energy stocks.',
    confidence: 0.72,
    affectedSymbols: ['CEN', 'MCY', 'NZX'],
    timestamp: '2025-11-05T08:45:00Z'
  },
  {
    id: 'ai4',
    type: 'risk',
    title: 'Infrastructure Overexposure Alert',
    description: 'Concentrated buying in infrastructure stocks by multiple MPs may indicate sector overheating. Consider portfolio rebalancing.',
    confidence: 0.68,
    affectedSymbols: ['AIA', 'CNU', 'AUT'],
    timestamp: '2025-11-05T07:30:00Z'
  }
];

export const portfolioPerformance = {
  totalReturn: 12.4,
  benchmarkReturn: 8.2,
  alpha: 4.2,
  sharpeRatio: 1.8,
  maxDrawdown: -3.1,
  winningTrades: 68,
  totalTrades: 100
};

export const sectorData = [
  { sector: 'Technology', value: 25, change: 3.2 },
  { sector: 'Healthcare', value: 20, change: 1.8 },
  { sector: 'Energy', value: 18, change: -0.5 },
  { sector: 'Infrastructure', value: 15, change: 2.1 },
  { sector: 'Finance', value: 12, change: 0.8 },
  { sector: 'Other', value: 10, change: -1.2 }
];