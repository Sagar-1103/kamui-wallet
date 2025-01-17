"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PhraseWord from "@/components/word";

export default function Page() {
  const router = useRouter();
  const [wordsLength, setwordsLength] = useState<12|24>(12);
//   const str = `Carpet cat flower chair foot river make image amazing three say shoe`;

  return (
    <div className="bg-[#252525] w-[20rem] sm:w-[24rem] h-fit my-auto p-5 rounded-2xl shadow-slate-900/50 shadow-2xl">
      <div onClick={() => router.back()} className="z-10 relative">
        <MoveLeft
          size={30}
          className=" text-gray-400 absolute -bottom-1.5 group-hover:text-gray-200"
        />
        <div className="mb-3 flex justify-center space-x-2">
          <p className="h-3 w-3 bg-red-500 rounded-full"></p>
          <p className="h-3 w-3 bg-red-500 rounded-full"></p>
          <p className="h-3 w-3 bg-gray-600 rounded-full"></p>

        </div>
      </div>
      <Separator className="bg-gray-500/50 h-[2px] w-full" />
      <div className="flex align-middle text-center justify-center mx-auto w-full">
        <p className="my-auto text-2xl text-gray-200 font-bold pt-9 mx-2">
          Secret Recovery Phrase
        </p>
      </div>
      <div>
        <p className=" p-3 text-wrap text-center text-md font-medium text-[#BDBDD7]">
          Import an existing wallet with your 12 or 24 word secret recovery phrase.
        </p>
      </div>
      <div className="text-gray-300 group relative">
        <div className="absolute group-hover:hidden z-10 w-full h-full flex">
        </div>
        <div className="flex flex-wrap justify-center">
          {Array.from({length:wordsLength}).map((_, index) => (
            <PhraseWord key={index} index={index + 1} readonly={false} word={""} />
          ))}
        </div>
      </div>
      <p onClick={()=>setwordsLength((prev)=>prev===12?24:12)} className=" p-3 hover:text-[#8d8dc1] text-wrap text-center text-md cursor-pointer font-medium text-[#BDBDD7]">
          I have 24 word recovery phrase
        </p>
      <div className="my-4 font-semibold">
        <Button
        onClick={()=>router.push("/wallet/done")}
          className={`w-full rounded-xl tracking-wider ${"bg-[#BDBDD7]/20 hover:bg-[#BDBDD7]/30"}  font-semibold py-[1.5rem]`}
        >
          Import Wallet
        </Button>
      </div>
    </div>
  );
}
