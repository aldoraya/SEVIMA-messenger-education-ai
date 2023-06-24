import { query } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session}= req.body;

    if (!prompt) {
    res.status (480).json ({ answer: "Please provide a prompt!" });
    return;
    }

    if (!chatId) {
    res.status (488).json({ answer: "Please provide a valid chat ID!" });
    return;
    }

    const response = await query(prompt, chatId, model)

     res.status(200).json({ name: ' Aldo ' });
}