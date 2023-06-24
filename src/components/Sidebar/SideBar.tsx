"use client"

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import NewChat from "../NewChat/NewChat";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const SideBar = () => {
  const { data: session } = useSession();

  return (
    <div className="lg:mr-56">
      <div className="p-2 fixed flex flex-col h-screen bg-[#111] w-[60%] md:w-[16rem] text-white text-sm z-10">
        <div className="w-[60%] md:w-[16rem] fixed left-0 top-0 flex space-x-2 p-2 h-max">
          <NewChat />
          <button className="w-[20%] border border-blue-100 border-opacity-40 px-2 py-2 space-x-2 rounded-lg items-center">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-14 flex flex-col">
          <button className="flex space-x-2 px-2 rounded-lg py-2 w-full hover:bg-blue-100 hover:text-[#111] items-center">
            <ChatBubbleLeftIcon className="w-4 h-4" />
            <p>AI Populer saat ini</p>
          </button>
        </div>
        <div className="fixed bottom-0 left-0 p-2 w-[60%] md:w-[16rem] h-max">
          <button onClick={() => signOut} className="flex space-x-2 px-2 rounded-lg py-2 w-full hover:bg-blue-100 hover:text-[#111] items-center">
          
              <Image
              src={session?.user?.image || "Profile"} 
              width="30"
              height="30"
              alt="Profile Google"
              />
           
            <div className="w-full flex flex-1 justify-end">
              <p>{session?.user?.name || "Username"}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
