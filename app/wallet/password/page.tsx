"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Page() {
  const router = useRouter();
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [isChecked,setIsChecked] = useState(false);

  return (
    <div className="bg-[#252525] w-[20rem]  sm:w-[24rem] h-fit my-auto p-5 rounded-2xl shadow-slate-900/50 shadow-2xl">
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
        <p className="my-auto text-3xl text-gray-200 font-bold pt-14 mx-2">
          Create a password
        </p>
      </div>
      <div>
        <p className=" p-3 text-wrap text-center text-md font-medium text-[#BDBDD7]">
          You will use this to unlock your wallet.
        </p>
      </div>
      <div className="text-gray-300">
      <Input className={`my-5 ${password===""?"":"md:text-2xl"} border-[#3c3838] text-center bg-[#2f2e2e]`} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <Input className={`my-5 ${confirmPassword===""?"":"md:text-2xl"} border-[#3c3838] text-center  ${!confirmPassword&&!password?"":password===confirmPassword?"text-green-500":"text-red-500"} bg-[#2f2e2e]`} type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
      </div>
      <div className="flex items-center space-x-2 mx-2 my-4 select-none">
      <Checkbox id="terms" className="border-white bg-[#2f2e2e] " onCheckedChange={(value:boolean)=>setIsChecked(value)}/>
      <label
        htmlFor="terms"
        className="text-sm text-[#BDBDD7] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
      <div onClick={()=>router.push("/wallet/secret-phrase")} className="my-3 font-semibold">
        <Button className={`w-full rounded-xl tracking-wider ${(isChecked && password!=="" && password===confirmPassword)?"bg-[#f3263dd4] hover:bg-[#f3263eac]":"bg-[#BDBDD7]/20 hover:bg-[#BDBDD7]/30"}  font-semibold py-[1.5rem]`}>
          Create a seed phrase wallet
        </Button>
      </div>
    </div>
  );
}


