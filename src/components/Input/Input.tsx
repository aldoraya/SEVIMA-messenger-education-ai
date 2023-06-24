"use client"

import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";

type Props = {
  chatId: string;
}

const Input = ({ chatId }: Props) => {

  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  return (
    <form className="fixed w-full h-[20%] bg-transparent bottom-0 px-20 flex items-center">
      <input
        type="text"
        disabled={!session}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Kirim pertanyaan..."
        className="md:w-[66%] py-4 px-4 rounded-lg outline-none border-2 border-gray-100 shadow-top-xl disabled:cursor-not-allowed ml-44"
      />
      <button disabled={!prompt || !session} type="submit" className="relative">
        <PaperAirplaneIcon className="w-4 h-4 -rotate-45 absolute right-20 bottom-5" />
      </button>
    </form>
  );
}

export default Input;
