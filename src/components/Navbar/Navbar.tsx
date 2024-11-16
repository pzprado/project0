'use client';

import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';

export function Navbar() {
  const { primaryWallet } = useDynamicContext();
  const { address } = useAccount();
  const { data: balanceData } = useBalance({
    address: address,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="navbar-blur border-b border-[var(--tg-theme-hint-color)] bg-[var(--tg-theme-bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-lg font-semibold bg-gradient-to-r from-[var(--tg-theme-button-color)] to-[var(--tg-theme-secondary-bg-color)] bg-clip-text text-transparent">
                DEFAI
              </h1>
            </div>

            {/* Center Section */}
            <div className="hidden md:flex items-center justify-center flex-1 px-4">
              <LocaleSwitcher />
            </div>

            {/* Right Section - Wallet */}
            <div className="flex items-center gap-4">
              {primaryWallet && (
                <div className="hidden sm:block">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium">
                      {balanceData && 
                        `${parseFloat(formatEther(balanceData?.value)).toFixed(4)} ${balanceData?.symbol}`
                      }
                    </span>
                    <span className="text-xs text-secondary">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </span>
                  </div>
                </div>
              )}
              <div className="w-[140px]">
                <DynamicWidget
                  variant="modal"
                  buttonClassName="dynamic-widget-button"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
} 