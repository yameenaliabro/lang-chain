import { config } from "dotenv";
config();

import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

export const basicLlmChain = async (req, res) => {
  const { question } = req.body;
  try {
    const model = new OpenAI({ temperature: 0 });
    const template =
      "Be very funny when answering questions\n Question: {question}";
    const prompt = new PromptTemplate({
      template,
      inputVariables: ["question"],
    });

    const chain = new LLMChain({ llm: model, prompt });
    // Question the Static in only for testing purpose
    const result = await chain.call({
      question: question,
    });

    res.send({ result: result });
  } catch (error) {
    res.send({ message: error });
  }
};
