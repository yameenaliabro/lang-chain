import OpenAI from "openai";
import fs from "fs";
import { OPENAI_API_KEY } from "../config/index.js";

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const whisperModelUseCase = async (req, res) => {
  try {
    const resultTranscription = await openai.audio.transcriptions.create({
      file: fs.createReadStream("checking.mp3"),
      model: "whisper-1",
      language: "de",
    });

    res.send({ result: resultTranscription });
  } catch (error) {
    res.send({ message: error.message });
    console.log("🚀 ~ whisperModelUseCase ~ error:", error);
  }
};
