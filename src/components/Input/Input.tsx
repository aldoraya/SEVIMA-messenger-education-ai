"use client"

import React, { FormEvent, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import toast from "react-hot-toast";

type Props = {
  chatId: string;
};

const Input = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const model = "text-blue-100";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/apt/?name=${session?.user?.name}`,
      },
    };

    try {
      await addDoc(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        message
      );

      const notification = toast.loading("bentar....");

      const response = await fetch("/api/askQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          chatId,
          model,
          session,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("HWork.ai telah menjawab!", {
          id: notification,
        });
        // Process the response data as needed
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={sendMessage}
      className="fixed w-full h-[20%] bg-transparent bottom-0 px-20 flex items-center"
    >
      <input
        type="text"
        value={prompt}
        disabled={!session}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Kirim pertanyaan..."
        className="md:w-[66%] py-4 px-4 rounded-lg outline-none border-2 border-gray-100 shadow-top-xl disabled:cursor-not-allowed ml-44"
      />
      <button
        disabled={!prompt || !session}
        type="submit"
        className="relative top-6 left-10"
      >
        <div className="absolute right-10 -bottom-1 p-6 bg-blue-100 rounded-lg">
          <PaperAirplaneIcon className="w-4 h-4" />
        </div>
      </button>
    </form>
  );
};

export default Input;
