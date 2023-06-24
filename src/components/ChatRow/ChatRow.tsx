import React, { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, query } from "firebase/firestore";
import { db } from "../../../firebase";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    query(
      collection(db, 'users', session?.user?.email!, 'chats', id, 'mesages')
    )
  );

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async() => {
    await deleteDoc (doc (db, 'users', session?.user?.email!, 'chats', id));
    router.replace('/');
    }

  return (
    <div className="flex space-x-2">
        <Link
      href={"/chat/${id}"}
      className={`flex space-x-2 px-2 rounded-lg py-2 w-[80%] hover:bg-blue-100 hover:text-[#111] items-center ${active && "bg-blue-100"}`}
    >
      <ChatBubbleLeftIcon className="w-4 h-4" />
      <p>
        {messages?.docs[messages?.docs.length - 1]?.data().text || "Chat Baru"}
      </p>
    </Link>
    <button onClick={removeChat} className="flex flex-1 px-2 rounded-lg py-2 w-full hover:bg-blue-100 hover:text-[#111] items-center justify-center">
        <TrashIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ChatRow;
