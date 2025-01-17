import { ElementType } from "react";

  interface walletProps {
    title: string;
    description: string;
    icon: ElementType;
    execFunc():void;
  }

  export default function WalletDiv({title,description,icon,execFunc}:walletProps){
    const Icon = icon;
    return (
        <div onClick={execFunc} className="h-fit cursor-pointer hover:bg-gray-600/50 bg-gray-600/40 flex py-2.5 rounded-2xl">
            <div className="p-2 rounded-full h-fit my-auto mx-3 bg-gray-600/60">
                <Icon color="white" />
            </div>
            <div className="">
                <p className="text-lg text-gray-200">{title}</p>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
}