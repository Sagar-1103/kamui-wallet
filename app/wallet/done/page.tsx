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
          <Image height={60} width={60} src={Kamui} alt="Kamui" className="motion-safe:animate-spin-medium" />
        </div>
        <div className="pt-3 text-center">
        <p className="px-3 py-4 text-wrap font-bold text-2xl text-[#c3c3cd]">Wallet setup complete!</p>
        <p className="text-[#94949c] font-medium pb-2">Your digital wallet is now ready for smooth transactions.</p>
        </div>
        <div className="my-3 font-semibold ">
          <Button onClick={()=>router.push("/wallet/get-started")} className="w-full rounded-xl tracking-wider bg-[#f3263dd4] hover:bg-[#f3263eac] py-[1.5rem] font-semibold">Get Started</Button>
        </div>
      </div>
    );
}