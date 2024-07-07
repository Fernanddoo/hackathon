import express from "express";
import appRouter from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use("/api", appRouter);

export default app;
