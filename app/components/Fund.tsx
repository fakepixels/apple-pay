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
      addresses: { [address.toString()]: ['base'] },
      assets: ['ETH'],
      presetFiatAmount: 20,
      fiatCurrency: 'USD'
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
  