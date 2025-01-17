"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveLeft, MousePointerClick,WalletMinimal,Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ElementType } from "react";
import { useLottie } from "lottie-react";
import WalletAnimation from "@/public/wallet-animation.json";

export default function Page() {
  const router = useRouter();
  const options = {
    animationData: WalletAnimation,
    loop: false,
  };
  const { View } = useLottie(options);
  interface featureProps {
    title: string;
    description: string;
    icon: ElementType;
  }
  const features: featureProps[] = [
    {
      title: "One-Click Setup",
      description:
        "Create a wallet instantly using your existing Google or Apple account.",
      icon: MousePointerClick,
    },
    {
      title: "Intuitive Interface",
      description:
        "A user-friendly design guides you through the simple setup process.",
      icon: Eye,
    },
    {
      title: "HD Structure",
      description:
        "Generates unlimited keys for various needs, all derived from a single master seed.",
      icon: WalletMinimal,
    },
  ];
  return (
    <div className="bg-[#252525] w-[20rem]  sm:w-[26rem] h-fit my-auto p-5 rounded-2xl shadow-slate-900/50 shadow-2xl">
      <div onClick={() => router.back()} className="z-10 relative">
        <MoveLeft size={30} className=" text-gray-400 absolute -bottom-1.5 group-hover:text-gray-200"/>
        <div className="mb-3 flex justify-center space-x-2">
            <p className="h-3 w-3 bg-red-500 rounded-full"></p>
            <p className="h-3 w-3 bg-gray-600 rounded-full"></p>
            <p className="h-3 w-3 bg-gray-600 rounded-full"></p>
        </div>
      </div>
      <Separator className="bg-gray-500/50 h-[2px] w-full" />
      <div className="w-60 h-60 mx-auto -mt-20">{View}</div>
      <div className="flex align-middle text-center justify-center mx-auto w-full">
        <p className="my-auto text-4xl text-gray-200 font-bold mx-4">
          Add Wallet
        </p>
      </div>
      <div>
        {features.map((feature, index) => {
            const Icon = feature.icon;
            return(
          <div key={index} className=" text-start p-2 flex">
            <div className="my-auto mx-2">
                <Icon color="white" />
            </div>
            <div>
              <p className=" px-3 text-wrap text-lg font-bold text-[#BDBDD7]">
                {feature.title}
              </p>
              <p className=" px-3 text-wrap text-sm font-medium text-[#BDBDD7]">
                {feature.description}
              </p>
            </div>
          </div>
        )})}
      </div>

      <div className="my-3 font-semibold ">
        <Button onClick={()=>router.push("/wallet/email-auth")} className="w-full rounded-xl tracking-wider bg-[#f3263dd4] hover:bg-[#f3263eac] py-[1.5rem] font-semibold">
          Continue with email
        </Button>
      </div>
      <div className="my-3">
        <Button onClick={()=>router.push("/wallet/password")} className="w-full rounded-xl tracking-wider bg-[#BDBDD7]/20 hover:bg-[#BDBDD7]/30 font-semibold py-[1.5rem]">
          Create a seed phrase wallet
        </Button>
      </div>
    </div>
  );
}
