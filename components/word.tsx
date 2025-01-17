"use client"
import { useEffect, useState } from "react";

interface PhraseWordProps {
    word:string;
    index:number;
    readonly:boolean;
}
export default function PhraseWord({index,word,readonly}:PhraseWordProps){
    const prefix = `${index}. ${word}`;
    const [val,setVal] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.startsWith(prefix)) {
          setVal(inputValue);
        } else {
          setVal(prefix);
        }
      };

      useEffect(()=>{
        setVal(prefix);
      },[prefix]);
    return (
            <input readOnly={readonly} className={`bg-[#1c1a1a]/90 ${!readonly&&"focus-visible:ring-red-300"} focus-visible:outline-none  text-white w-[30%] mx-1 my-2 py-2 px-3 border-1 font-medium ring-1 ring-transparent rounded-md`} type="text" onChange={handleChange} value={val} />
    );
}