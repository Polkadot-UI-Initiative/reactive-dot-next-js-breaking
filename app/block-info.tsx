"use client";

import { ChainId } from "@reactive-dot/core";
import { useBlock } from "@reactive-dot/react";
import { useEffect, useState } from "react";

export function BlockInfo({ chainId = "polkadot" }: { chainId?: ChainId }) {
  const block = useBlock("best", { chainId });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <div>
          BlockInfo {chainId} {block.number}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
