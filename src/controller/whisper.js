import OpenAI from "openai";
import fs from "fs";
import { OPENAI_API_KEY } from "../config/index.js";
import { OpenAIWhisperAudio } from "langchain/document_loaders/fs/openai_whisper_audio";

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// Using Direct OpenAI
export const whisperModelUseCase = async (req, res) => {
  try {
    const resultTranscription = await openai.audio.transcriptions.create({
      file: fs.createReadStream("testing.mp3"),
      model: "whisper-1",
      language: "de",
    });

    res.send({ result: resultTranscription });
  } catch (error) {
    res.send({ message: error.message });
    console.log("🚀 ~ whisperModelUseCase ~ error:", error);
  }
};

// Using Lang Chain
export const langChainWhisper = async (req, res) => {
  try {
    const filePath = "testing.mp3";
    const loader = new OpenAIWhisperAudio(filePath);
    const docs = await loader.load();
    res.send({ result: docs });
  } catch (error) {
    res.send({ message: error.message });
    console.log("🚀 ~ langChainWhisper ~ error:", error);
  }
};
