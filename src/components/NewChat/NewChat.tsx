import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { db } from "../../../firebase";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push('/chat/${doc.id}');
  };

  return (
    <button onClick={createNewChat} className="flex w-[80%] border border-blue-100 border-opacity-40 px-2 py-2 space-x-2 rounded-lg items-center">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </button>
  );
};

export default NewChat;
