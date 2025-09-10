"use client";

import { useAccounts, useTypedApi } from "@reactive-dot/react";
import { Binary } from "polkadot-api";

export function TxButton() {
  const accounts = useAccounts();
  const signer = accounts?.[0]?.polkadotSigner;
  const api = useTypedApi();
  const transaction = api.tx.System.remark({
    remark: Binary.fromText("Hello, world!"),
  });
  const handleClick = () => {
    console.log("remarking with signer", signer, "on", accounts?.[0]?.name);
    transaction
      .signSubmitAndWatch(signer, {
        at: "best",
      })
      .subscribe((result) => {
        console.log(result);
      });
  };

  return <button onClick={handleClick}>Send Transaction</button>;
}
