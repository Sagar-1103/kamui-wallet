"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Kamui from "@/public/kamui.svg";
import { useRouter } from "next/navigation";

export default function Page(){
  const router = useRouter();
    return (
        <div className="bg-[#252525] w-[20rem]  sm:w-[24rem] h-fit my-auto p-5 rounded-2xl shadow-2xl shadow-slate-900/50 ">
        <div className="flex align-middle text-center justify-center mx-16 pt-14">
          <Image height={60} width={60} src={Kamui} alt="Kamui" />
          <p className="my-auto text-4xl text-gray-200 font-bold mx-4 ">Kamui</p>
        </div>
        <p className="pb-20 pt-7 px-3 text-wrap text-center font-medium text-[#BDBDD7]">To get started, create a new wallet or import an existing one.</p>
        <div className="my-3 font-semibold ">
          <Button onClick={()=>router.push("/wallet/add-wallet")} className="w-full rounded-xl tracking-wider bg-[#f3263dd4] hover:bg-[#f3263eac] py-[1.5rem] font-semibold">Create a new wallet</Button>
        </div>
        <div onClick={()=>router.push("/wallet/import-wallet")} className="my-3">
          <Button className="w-full rounded-xl tracking-wider bg-[#BDBDD7]/20 hover:bg-[#BDBDD7]/30 font-semibold py-[1.5rem]">I already have a wallet</Button>
        </div>
      </div>
    );
}