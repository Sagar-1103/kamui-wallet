"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Kamui from "@/public/kamui.svg";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-b select-none from-[#730d06] to-[#2e1243] h-screen flex justify-center"> 
    <div className="bg-[#252525] w-[20rem]  sm:w-[24rem] h-fit my-auto p-5 rounded-2xl shadow-2xl shadow-slate-900/50 ">
        <div className="flex align-middle text-center justify-center mx-16 pt-14">
          <Image height={60} width={60} src={Kamui} alt="Kamui" />
          <p className="my-auto text-4xl text-gray-200 font-bold mx-4 ">Kamui</p>
        </div>
        <p className="pb-20 pt-7 px-3 text-lg text-wrap text-center font-medium text-[#BDBDD7]">Kamui is a web-based wallet offering a seamless and secure way to manage digital assets with innovative features that transcend traditional boundaries.</p>
        <div className="my-3 font-semibold ">
          <Button onClick={()=>router.push("/wallet/get-started")} className="w-full rounded-xl tracking-wider bg-[#f3263dd4] hover:bg-[#f3263eac] py-[1.5rem] font-semibold">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
