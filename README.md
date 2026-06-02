# OpenAid Africa

OpenAid Africa is a transparent donation and grant management MVP for milestone-based giving, public receipts, and on-chain accountability.

## What is included

- Next.js App Router structure with TypeScript and Tailwind CSS.
- Premium social-impact UI for landing, campaigns, campaign detail, create, dashboard, transparency, and profile pages.
- RainbowKit, wagmi, viem, and TanStack Query provider shell for wallet-ready flows.
- Mock campaign data for fast development.
- Solidity `CampaignFactory` and `Campaign` contracts with donation, milestone approval/release, expense logging, and events.
- Hardhat deployment script and environment template.

## Getting started

Install dependencies:

```bash
npm install
```

Start the web app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` for frontend values and `.env` for contract deployment values.

Required for wallet connection:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
NEXT_PUBLIC_FACTORY_ADDRESS=
```

Required for contract deployment:

```bash
SEPOLIA_RPC_URL=
BASE_SEPOLIA_RPC_URL=
POLYGON_AMOY_RPC_URL=
PRIVATE_KEY=
```

## Smart contracts

Compile:

```bash
npm run compile:contracts
```

Deploy to Sepolia:

```bash
npm run deploy:sepolia
```

After deployment, set `NEXT_PUBLIC_FACTORY_ADDRESS` to the printed factory address.

## MVP build path

1. Replace mock data in `lib/campaigns.ts` with indexed campaign data from Supabase or PostgreSQL.
2. Connect the create form to `useCampaignFactory` and deploy campaign contracts from the UI.
3. Add IPFS upload adapters for verification documents and receipts.
4. Read contract events with wagmi hooks and populate the transparency ledger.
5. Add protected dashboard routes once authentication is selected.
