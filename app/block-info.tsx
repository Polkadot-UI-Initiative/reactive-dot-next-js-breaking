"use client";

import { ChainId } from "@reactive-dot/core";
import { useBlock } from "@reactive-dot/react";

export function BlockInfo({ chainId = "polkadot" }: { chainId?: ChainId }) {
  const block = useBlock("best", { chainId });
  return (
    <div>
      BlockInfo {chainId} {block.number}
    </div>
  );
}
