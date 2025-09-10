"use client";

import { config } from "../config";
import { ChainProvider, ReactiveDotProvider } from "@reactive-dot/react";
import { Suspense } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactiveDotProvider config={config}>
      <ChainProvider chainId="polkadot">
        <Suspense fallback={<span>Connecting to Polkadot…</span>}>
          {children}
        </Suspense>
      </ChainProvider>
    </ReactiveDotProvider>
  );
}
