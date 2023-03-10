import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { PORT } from "./componets/config";

import router from "./routes";
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(router);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
console.log(`environment: ${process.env.NODE_ENV}`);