import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const response = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return (response.data as { choices: { text: string }[] }).choices[0].text;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`ChatGPT was unable to find an answer for that! (Error: ${error.message})`);
      throw error;
    } else {
      console.error("An unknown error occurred");
      throw new Error("Unknown error");
    }
  }
};

export default query;
