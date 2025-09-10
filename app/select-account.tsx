"use client";

import { useAccounts } from "@reactive-dot/react";

export function SelectAccount() {
  const accounts = useAccounts();
  console.log(accounts);

  return (
    <select>
      {accounts.map((account) => (
        <option key={account.address} value={account.address}>
          {account.name}
        </option>
      ))}
    </select>
  );
}
