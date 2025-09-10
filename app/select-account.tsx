"use client";

import { useAccounts } from "@reactive-dot/react";

export function SelectAccount() {
  const accounts = useAccounts();

  return (
    <select>
      {accounts.length > 0 ? (
        accounts.map((account) => (
          <option key={account.address} value={account.address}>
            {account.name}
          </option>
        ))
      ) : (
        <option value="">No Accounts</option>
      )}
    </select>
  );
}
