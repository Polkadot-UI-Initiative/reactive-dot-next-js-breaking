import { dot, paseo } from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import { JsonRpcProvider } from "polkadot-api/ws-provider/web";
import { createLightClientProvider } from "@reactive-dot/core/providers/light-client.js";

const isServer = typeof window === "undefined";

// Select WS provider implementation based on environment
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getWsProvider = (
  isServer
    ? require("polkadot-api/ws-provider/node")
    : require("polkadot-api/ws-provider/web")
).getWsProvider as (url: string) => Promise<JsonRpcProvider>;

// Build wallets array lazily to avoid touching browser APIs on the server
const wallets = (() => {
  if (isServer) return [] as unknown[];
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { InjectedWalletProvider } = require("@reactive-dot/core/wallets.js");
  return [new InjectedWalletProvider()];
})();

export const config = defineConfig({
  ssr: false,
  chains: {
    polkadot: {
      descriptor: dot,
      provider: getWsProvider("wss://polkadot-rpc.publicnode.com"),
    },
    paseo: {
      name: "Paseo",
      descriptor: paseo,
      provider: getWsProvider("wss://sys.ibp.network/paseo"),
      explorerUrl: "https://paseo.subscan.io",
      symbol: "PAS",
      decimals: 10,
    },
  },
  wallets: wallets,
});
