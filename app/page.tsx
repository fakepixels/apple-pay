'use client';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import Fund from './components/Fund';
import type { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h1 className="text-2xl mb-2">
            Apple Pay is now supported by OnchainKit.
          </h1>
          <p className="text-md">
            Check out the{' '}
            <a 
              href="https://github.com/fakepixels/apple-pay"
              className="underline hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              demo
            </a>
            {' '}on GitHub.
          </p>
        </div>
        
        <Fund />
      </main>
    </div>
  );
};

export default Page;
