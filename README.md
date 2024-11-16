# CryptoCompanion - AI Financial Assistant

## Overview
CryptoCompanion is a Telegram mini-app that provides personalized crypto asset management and financial advice through an AI-powered chat interface. The app helps users track their portfolio, get market insights, and execute basic transactions across multiple chains.

## Core Features

### 1. Wallet Integration & Authentication
- Web3Auth integration for seamless wallet creation/connection
- Support for viewing balances across multiple chains
- Quick connect via Telegram account

### 2. Portfolio Management
- Real-time portfolio tracking
- Token price alerts
- Basic transaction capabilities (send/receive)
- Portfolio analytics and performance metrics

### 3. AI Chat Assistant
- Natural language interaction using XMTP's MessageKit
- Capabilities:
  - Portfolio insights and recommendations
  - Market analysis
  - Transaction assistance
  - Educational content
  - Price alerts setup

### 4. Cross-chain Functionality
- View balances across multiple chains
- Execute cross-chain swaps
- Track cross-chain transaction history

## Technical Stack

### Frontend
- Next.js for the web application
- Telegram Mini App SDK
- TailwindCSS for styling

### Backend & Blockchain
- Web3Auth for authentication
- XMTP for messaging infrastructure
- Base (L2) for main smart contract deployment
- Dynamic SDK for wallet interactions
- World ID integration for human verification

### AI/Data
- MessageKit for AI agent implementation
- Hyperbolic for AI inference
- CoinGecko/similar API for market data

## Smart Contract Requirements
- Portfolio tracking contract
- User preferences storage
- Transaction history tracking
- Cross-chain messaging (optional)

## User Flow
1. User opens Telegram mini-app
2. Connects wallet or creates new one via Web3Auth
3. Gets immediate access to portfolio overview
4. Can interact with AI assistant for:
   - Portfolio analysis
   - Market insights
   - Transaction help
   - Educational content

## Bounty Alignment
- World: Mini App implementation ($17.5K pool)
- Dynamic: Consumer project ($2K)
- Web3Auth: Telegram integration ($2K)
- XMTP: MessageKit implementation ($2.5K)
- Base: Consumer app ($3K)

## Development Phases

### Phase 1 (4 hours)
- Basic Telegram mini-app setup
- Web3Auth integration
- Simple portfolio viewing

### Phase 2 (8 hours)
- AI assistant implementation
- XMTP integration
- Basic chat functionality

### Phase 3 (8 hours)
- Cross-chain functionality
- Enhanced AI features
- UI/UX improvements

### Phase 4 (4 hours)
- Testing and debugging
- Documentation
- Demo video creation

## Success Metrics
- Functional wallet integration
- Working AI chat assistant
- At least one successful cross-chain transaction
- Clean, intuitive user interface
- Comprehensive demo video

## Nice-to-Have Features
- Price alerts
- DeFi integration
- Social features
- Advanced portfolio analytics 