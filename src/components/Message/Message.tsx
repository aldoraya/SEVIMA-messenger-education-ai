"use client"

import { DocumentData } from "firebase/firestore";
import React from "react";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {

  const isChatGPT = message.user.name === "chatGPT";

  return (
    <div className={`py-5 text-[#111] ${isChatGPT && "bg-blue-100"}`}>
      <div className="flex space-x-5 px-10 md:px-0 max-w-2x1 mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
