import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import query from "@/lib/queryapi";
import { adminDb } from "../../../../firebase.admin";

type Data = {
  answer: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(480).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatId) {
    res.status(488).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  try {
    const response = await query(prompt, chatId, model);

    const message = {
      text: response || "ChatGPT was unable to find an answer for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: "https://links.papareact.com/89k",
      },
    };

    const userDoc = adminDb
      .collection("users")
      .doc(session?.user?.email)
      .collection("chats")
      .doc(chatId)
      .collection("messages");

    await userDoc.add(message);

    res.status(200).json({ answer: message.text });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ answer: "Internal Server Error" });
  }
}

export default handler;
