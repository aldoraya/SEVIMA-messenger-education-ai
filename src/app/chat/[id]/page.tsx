import Chat from "@/components/Chat/Chat";
import Input from "@/components/Input/Input";
import SideBar from "@/components/Sidebar/SideBar";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col min-h-[120vh] w-full z-0 overflow-hidden">
        <Chat chatId={id} />
        <div className="flex flex-1 justify-center">
          <Input chatId={id} />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
