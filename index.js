import emailRoutes from "./src/routes/emailRoutes.js";

import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", emailRoutes);
app.listen(8800);