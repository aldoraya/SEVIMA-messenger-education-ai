"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "../NewChat/NewChat";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { db } from "../../../firebase";
import ChatRow from "../ChatRow/ChatRow";
import { collection, orderBy, query } from "firebase/firestore";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="lg:mr-72">
      <div className="p-2 fixed flex flex-col h-screen bg-[#111] w-[60%] md:w-[16rem] text-white text-sm z-0">
        <div className="w-[60%] md:w-[16rem] fixed left-0 top-0 flex space-x-2 p-2 h-max">
          <NewChat />
          <button className="w-[20%] border border-blue-100 border-opacity-40 px-2 py-2 space-x-2 rounded-lg items-center">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-14 flex flex-col">
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
        <div className="fixed bottom-0 left-0 p-2 w-[60%] md:w-[16rem] h-max">
          {session && (
            <div className="flex space-x-4 px-2 rounded-lg py-2 w-full items-center">
              <Image
                src={session?.user?.image || "Profile"}
                width="30"
                height="30"
                alt="Profile Google"
              />

              <p>{session?.user?.name || "Username"}</p>
            </div>
          )}
          <button
            onClick={() => signOut()}
            className="flex space-x-2 px-2 rounded-lg py-2 w-full hover:bg-blue-100 hover:text-[#111] items-center"
          >
            <ArrowLeftOnRectangleIcon className="w-6 h-6" />
            <p>Keluar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
