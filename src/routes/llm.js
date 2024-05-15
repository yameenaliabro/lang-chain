import express from "express";
import { basicLlmChain } from "../controller/basic.js";
import { simpleSequentialChainsController } from "../controller/simplesequentialchain.js";
import { sequentialChain } from "../controller/sequentialchain.js";
import { ConversationChains } from "../controller/chat.js";
const routes = express.Router();

routes.post("/basic", basicLlmChain);
routes.post("/simplesequentialchain", simpleSequentialChainsController);
routes.post("/sequentialchain", sequentialChain);
routes.post("/chat", ConversationChains);

export default routes;
