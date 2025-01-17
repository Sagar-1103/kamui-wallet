import Image, { StaticImageData } from "next/image";

interface providerProps {
    providerName: string;
    mode: string;
    image: string | StaticImageData
  }
  export default function ProviderDiv({providerName,mode,image}:providerProps){
    return (
        <div className="h-fit bg-gray-600/40 hover:bg-gray-600/50 flex py-2.5 rounded-2xl">
            <div className="p-2 rounded-full h-fit my-auto mx-3 bg-gray-600/60">
                <Image className="h-6 w-6" src={image}  alt={`${providerName}`} />
            </div>
            <div className="">
                <p className="text-lg text-gray-200">{providerName}</p>
                <p className="text-sm text-gray-400">Create wallet with your {mode}</p>
            </div>
        </div>
    );
}