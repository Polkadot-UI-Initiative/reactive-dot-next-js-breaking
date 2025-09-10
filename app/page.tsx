import Image from "next/image";
import { TxButton } from "./tx-button";
import { SelectAccount } from "./select-account";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Suspense
          fallback={
            <select>
              <option>Loading...</option>
            </select>
          }
        >
          <SelectAccount />
        </Suspense>
        <Suspense fallback={<button disabled>Loading Tx Button...</button>}>
          <TxButton />
        </Suspense>
      </main>
    </div>
  );
}
