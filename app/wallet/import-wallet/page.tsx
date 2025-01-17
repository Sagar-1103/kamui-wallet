"use client";
import { Separator } from "@/components/ui/separator";
import WalletDiv from "@/components/wallet";
import { MoveLeft,NotebookText,AtSign } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ElementType } from "react";

export default function Page() {
  const router = useRouter();
  interface walletProps {
    title: string;
    description: string;
    icon: ElementType;
    execFunc():void;
  }
  const wallets: walletProps[] = [
    { title: "Import Secret Recovery Phrase", description: "Import accounts from another wallet", icon: NotebookText,execFunc(){router.push("/wallet/email-auth")} },
    { title: "Add Seedless Wallet", description: "Use your email", icon: AtSign,execFunc(){router.push("/wallet/import-secret-phrase")},},
  ];

  return (
    <div className="bg-[#252525] w-[20rem]  sm:w-[24rem] h-fit my-auto p-5 rounded-2xl shadow-slate-900/50 shadow-2xl">
      <div onClick={() => router.back()} className="z-10 relative">
        <MoveLeft
          size={30}
          className=" text-gray-400 absolute -bottom-1.5 group-hover:text-gray-200"
        />
        <div className="mb-3 flex justify-center space-x-2">
          <p className="h-3 w-3 bg-red-500 rounded-full"></p>
          <p className="h-3 w-3 bg-gray-600 rounded-full"></p>
          <p className="h-3 w-3 bg-gray-600 rounded-full"></p>
        </div>
      </div>
      <Separator className="bg-gray-500/50 h-[2px] w-full" />
      <div className="flex align-middle text-center justify-center mx-auto w-full">
        <p className="my-auto text-3xl text-gray-200 font-bold pt-6 mx-2">
          Import a wallet
        </p>
      </div>
      <div>
        <p className=" pt-2 text-wrap text-center text-md font-medium text-[#BDBDD7]">
          Import an existing wallet with your secret phrase or private key.
        </p>
      </div>
      <div className="flex flex-col space-y-4 pt-10 pb-8">
        {wallets.map((wallet, index) => (
          <WalletDiv key={index} {...wallet} />
        ))}
      </div>
    </div>
  );
}
