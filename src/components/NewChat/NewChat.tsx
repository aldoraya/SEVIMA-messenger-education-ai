import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const NewChat = () => {
  return (
    <button className="flex w-[80%] border border-blue-100 border-opacity-40 px-2 py-2 space-x-2 rounded-lg items-center">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </button>
  );
};

export default NewChat;
