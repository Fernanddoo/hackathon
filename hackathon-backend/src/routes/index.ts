import express  from "express";
import router from "../routes/avaliadorRoutes";

const appRouter = express();

appRouter.use("/avaliadores", router);

export default appRouter;
