# Sample app with OnchainKit Apple Pay

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-onchain`]().

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implementing the Coinbase Onramp Button

### 1. Install Required Dependencies

```bash
npm install @coinbase/onchainkit@latest
# or
yarn add @coinbase/onchainkit@latest
```

### 2. Environment Setup

Create a `.env` file in your project root and add your Coinbase project ID:

```env
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
```

### 3. Create the Fund Component

Create a new file `app/components/Fund.tsx`:

```tsx
"use client";

import { useAccount } from 'wagmi';
import {
  FundButton,
  getOnrampBuyUrl
} from '@coinbase/onchainkit/fund';
import { WalletDefault } from '@coinbase/onchainkit/wallet';

export default function Fund() {
  const projectId = process.env.NEXT_PUBLIC_CDP_PROJECT_ID;
  const { address } = useAccount();

  const onrampBuyUrl = address && projectId ? getOnrampBuyUrl({
    projectId,
    addresses: { [address.toString()]: ['base'] }, // Specify chains here
    assets: ['ETH'],                               // Specify supported assets
    presetFiatAmount: 5,                          // Default fiat amount
    fiatCurrency: 'USD'                           // Default fiat currency
  }) : '';

  return (
    <>
      {address && projectId ? (
        <FundButton fundingUrl={onrampBuyUrl} />
      ) : (
        <WalletDefault />
      )}
    </>
  )
}
```

### 4. Usage

Import and use the Fund component in your page:

```tsx
import Fund from './components/Fund';

export default function Page() {
  return (
    <div>
      <h1>Buy Crypto</h1>
      <Fund />
    </div>
  );
}
```

### Key Features

- **Automatic Wallet Detection**: Shows a wallet connect button if no wallet is connected
- **Dynamic URL Generation**: Creates a unique onramp URL based on:
  - Connected wallet address
  - Supported chains (e.g., 'base' for Base network)
  - Supported assets (e.g., 'ETH')
  - Preset fiat amount and currency

### Customization Options

You can customize the onramp experience by modifying the `getOnrampBuyUrl` parameters:

```tsx
getOnrampBuyUrl({
  projectId,
  addresses: { [address.toString()]: ['base', 'ethereum'] }, // Support multiple chains
  assets: ['ETH', 'USDC'],                                   // Support multiple assets
  presetFiatAmount: 10,                                      // Change default amount
  fiatCurrency: 'EUR'                                        // Change default currency
})
```

## Learn More

To learn more about OnchainKit, see our [documentation](https://onchainkit.xyz).