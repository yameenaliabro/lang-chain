import express from "express";
import { whisperModelUseCase } from "../controller/whisper.js";

const whisperRoutes = express.Router();

whisperRoutes.get("/testing", whisperModelUseCase);

export default whisperRoutes;
