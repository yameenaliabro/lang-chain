import express from "express";
import {
  langChainWhisper,
  whisperModelUseCase,
} from "../controller/whisper.js";

const whisperRoutes = express.Router();

whisperRoutes.get("/testing", whisperModelUseCase);
whisperRoutes.get("/whisper/langchain", langChainWhisper);

export default whisperRoutes;
