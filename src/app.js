import express from "express";
import routes from "./routes/llm.js";
import dotenv from "dotenv";
import whisperRoutes from "./routes/whisper.js";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/", routes);
app.use("/", whisperRoutes);

app.listen(PORT, () => {
  console.log(`Server Started in ${PORT}`);
});
