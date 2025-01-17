"use client";
import Image from "next/image";
import Logo from "@/public/kamui.svg";
import { Moon, Sun,Check } from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import Ethereum from "@/public/ethereum.svg";
import {SignedIn,UserButton,SignedOut,SignInButton} from '@clerk/nextjs'
import { Combobox } from "./ui/comboBox";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-gray-500/40 my-4 w-[60%] mx-auto flex p-3  rounded-xl justify-between">
      <div className="flex">
        <Image height={50} src={Logo} alt="Logo" />
        <p></p>
      </div>
      <div className="bg-gray-200 flex rounded-3xl align-middle text-black/85">
        <Image height={20} src={Ethereum} className="my-auto cursor-pointer mx-3" alt="Solana Logo" />
        {/* <Image height={20} src={Solana} className="my-auto cursor-pointer mx-3" alt="Solana Logo" /> */}
        <Separator className="bg-gray-600/50 border-2" orientation="vertical" />
            <Combobox/>
        <Separator className="bg-gray-600/50 border-2" orientation="vertical" />
        {/* <Copy className="my-auto cursor-pointer mx-3"/> */}
        <Check className="my-auto cursor-pointer mx-3"/>
      </div>
      <div className="flex justify-evenly align-middle select-none">
        {theme === "light" ? (
          <Moon className="my-auto mx-3 cursor-pointer" onClick={() => setTheme("dark")} />
        ) : (
          <Sun className="my-auto mx-3 cursor-pointer" onClick={() => setTheme("light")} />
        )}
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <p className="my-auto">
            Login
            </p>
          </SignInButton>
        </SignedOut>

      </div>
    </div>
  );
}
