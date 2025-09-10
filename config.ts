import { dot } from "@polkadot-api/descriptors";
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { defineConfig } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import { createLightClientProvider } from "@reactive-dot/core/providers/light-client.js";

const lightClientProvider = createLightClientProvider();

export const config = defineConfig({
  ssr: true,
  chains: {
    polkadot: {
      descriptor: dot,
      provider: getWsProvider("wss://polkadot-rpc.publicnode.com"),
      // provider: lightClientProvider.addRelayChain({ id: "polkadot" }),
    },
  },
  wallets: [new InjectedWalletProvider()],
});
