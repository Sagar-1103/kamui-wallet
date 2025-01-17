"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import PhraseWord from "@/components/word";
import EyeOff from "@/public/eye-off.svg";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [copied, setCopied] = useState(false);
  const str = `Carpet cat flower chair foot river make image amazing three say shoe`;

  const handleCopy = (str:string)=>{
    navigator.clipboard.writeText(str).then(()=>{
      console.log(copied);
      setCopied(true);
      setTimeout(()=>setCopied(false),2000)
    }).catch((err)=>{
      console.error(`Failed to copy : ${err}`);
    })
  }

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
          <p className="h-3 w-3 bg-red-500 rounded-full"></p>
        </div>
      </div>
      <Separator className="bg-gray-500/50 h-[2px] w-full" />
      <div className="flex align-middle text-center justify-center mx-auto w-full">
        <p className="my-auto text-3xl text-gray-200 font-bold pt-14 mx-2">
          Secret Phrase
        </p>
      </div>
      <div>
        <p className=" p-3 text-wrap text-center text-md font-medium text-[#c0ac3c]">
          This phrase is the only way to recover your Wallet. Do not share it
          with anyone!
        </p>
      </div>
      <div className="text-gray-300 group relative">
        <div className="absolute group-hover:hidden z-10 w-full h-full flex">
        <Image src={EyeOff} height={100} alt="EyeOff" className="mx-auto" />
        {/* <EyeOff width={100} height={100} color="gray" /> */}
        </div>
        <div onClick={() => handleCopy(str)} className="flex flex-wrap blur-sm hover:blur-none justify-center">
          {str.split(" ").map((word, index) => (
            <PhraseWord readonly={true} key={index} index={index + 1} word={word} />
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-2 mx-2 my-4 select-none">
        <Checkbox
          id="terms"
          className="border-white bg-[#2f2e2e] "
          onCheckedChange={(value: boolean) => setIsChecked(value)}
        />
        <label
          htmlFor="terms"
          className="text-sm text-[#BDBDD7] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I saved my Secret Recovery Phase
        </label>
      </div>
      <div className="my-4 font-semibold">
        <Button
        onClick={()=>router.push("/wallet/done")}
          className={`w-full rounded-xl tracking-wider ${
            isChecked
              ? "bg-[#f3263dd4] hover:bg-[#f3263eac]"
              : "bg-[#BDBDD7]/20 hover:bg-[#BDBDD7]/30"
          }  font-semibold py-[1.5rem]`}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
