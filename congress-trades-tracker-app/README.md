# NZ Parliament Trades Tracker - AI Enhanced

A comprehensive web application for tracking and analyzing trades made by New Zealand Members of Parliament, featuring AI-powered insights and an autopilot portfolio simulator.

## Features

### 🏛️ Real-Time Trade Tracking
- Monitor recent trades by NZ MPs across all parties
- Detailed trade information including stock symbols, amounts, and sectors
- Filter by party, sector, trade type, and date range
- Search functionality for MPs, stocks, and companies

### 🤖 AI-Powered Insights
- **Pattern Recognition**: Identifies cluster buying/selling behaviors
- **Anomaly Detection**: Flags unusual trading activities
- **Opportunity Alerts**: Highlights potential investment opportunities
- **Risk Warnings**: Alerts on sector overexposure and risks
- Confidence scoring for each insight (0-100%)

### 🚀 Autopilot Portfolio
- AI-driven portfolio simulation based on MP trading patterns
- Automatic position adjustments based on confidence scores
- Performance metrics: Total Return, Alpha, Sharpe Ratio, Win Rate
- Sector allocation visualization
- Real-time monitoring of parliamentary trades

### 💬 AI Chat Assistant
- Interactive chatbot for trading analysis
- Quick questions for common queries
- Natural language processing for custom questions
- Real-time responses with AI-generated insights

### 📊 Data Visualization
- Recent trades table with detailed information
- Top trading MPs leaderboard
- Party affiliation indicators (National, Labour, Green, ACT)
- Sector performance tracking

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Custom components with Tailwind
- **State Management**: React Hooks (useState, useEffect)

## Mock Data Included

The app includes realistic mock data for:
- **MPs**: Chris Bishop, Grant Robertson, Chlöe Swarbrick, David Seymour, Willie Jackson
- **Stocks**: FPH, XRO, CEN, AIA, MFT, SPK (major NZX companies)
- **Sectors**: Healthcare, Technology, Energy, Infrastructure, Logistics
- **AI Insights**: Pattern detection, anomaly alerts, opportunities, and risks

## Key Components

1. **Header**: Navigation with AI Enhanced badge
2. **SearchFilters**: Advanced filtering and search capabilities
3. **RecentTrades**: Table displaying recent MP trades
4. **AIInsights**: Panel showing AI-generated insights
5. **AutopilotPortfolio**: Portfolio simulator with performance metrics
6. **TopPoliticians**: Leaderboard of top trading MPs
7. **AIChatAssistant**: Interactive chatbot for trading analysis

## Usage

1. **Search & Filter**: Use the search bar and filters to find specific trades, MPs, or sectors
2. **View Insights**: Check the AI Insights panel for pattern recognition and opportunities
3. **Monitor Portfolio**: Track the autopilot portfolio performance and sector allocation
4. **Chat with AI**: Use the chat assistant to ask questions about trades and patterns
5. **Analyze Data**: Review the top politicians and recent trades tables for trends

## AI Features

- **Machine Learning**: Pattern recognition across MP trading behaviors
- **Natural Language Processing**: Chat assistant understands trading-related queries
- **Predictive Analytics**: Confidence scores for insights and opportunities
- **Risk Assessment**: Automated risk detection and warnings
- **Portfolio Optimization**: AI-driven position sizing and rebalancing

## Deployment

The app is configured for single-file deployment using Vite's singlefile plugin. The entire application is bundled into a single HTML file for easy deployment.

## Future Enhancements

- Real data integration from NZ Parliament disclosures
- Advanced charting and technical analysis
- Email alerts for significant trades
- Mobile app version
- Social features for sharing insights
- Historical performance backtesting