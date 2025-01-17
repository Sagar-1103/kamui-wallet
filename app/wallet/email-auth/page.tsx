"use client";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import GoogleLogo from "@/public/google-logo.svg";
import AppleLogo from "@/public/apple-logo.svg";
import GithubLogo from "@/public/github-logo.svg";
import ProviderDiv from "@/components/provider";
import { StaticImageData } from "next/image";

export default function Page() {
  const router = useRouter();
  interface providerProps {
    providerName: string;
    mode: string;
    image:  string | StaticImageData;
  }
  const providers: providerProps[] = [
    { providerName: "Google", mode: "Google email", image: GoogleLogo },
    { providerName: "Apple", mode: "Apple ID", image: AppleLogo },
    { providerName: "Github", mode: "Github ID", image: GithubLogo },
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
          <p className="h-3 w-3 bg-red-500 rounded-full"></p>
          <p className="h-3 w-3 bg-gray-600 rounded-full"></p>
        </div>
      </div>
      <Separator className="bg-gray-500/50 h-[2px] w-full" />
      <div className="flex align-middle text-center justify-center mx-auto w-full">
        <p className="my-auto text-3xl text-gray-200 font-bold pt-6 mx-2">
          Select your email
        </p>
      </div>
      <div>
        <p className=" pt-2 text-wrap text-center text-md font-medium text-[#BDBDD7]">
          Add a wallet with your Account
        </p>
      </div>
      <div className="flex flex-col space-y-4 pt-10 pb-8">
        {providers.map((provider, index) => (
          <ProviderDiv key={index} {...provider} />
        ))}
      </div>
    </div>
  );
}
