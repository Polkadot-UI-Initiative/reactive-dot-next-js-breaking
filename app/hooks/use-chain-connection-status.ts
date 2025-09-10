"use client";

import { ChainId } from "@reactive-dot/core";
import { useBlock, useChainSpecData } from "@reactive-dot/react";

export function useChainConnectionStatus({
  chainId,
}: { chainId?: ChainId } = {}) {
  // If the client/chain isn't ready, these hooks will suspend.
  // When they resolve, we consider the chain connected.
  // We read finalized block and chain spec as readiness signals.
  // Keep reads minimal to avoid unnecessary work.

  // Attempt to read a lightweight finalized block header
  // If this suspends or throws, we treat status as connecting via Suspense boundary.
  const _block = useBlock("best", { chainId });

  // Chain spec data is cached and cheap, also signals the client is usable
  const _spec = useChainSpecData({ chainId });

  return {
    isConnected: true as const,
    // Expose minimal diagnostic info if caller wants it later
    blockNumber: _block.number,
    chainName: _spec.name,
  };
}

export interface ChainConnectionStatusResult {
  isConnected: true;
  blockNumber: number;
  chainName: string;
}
