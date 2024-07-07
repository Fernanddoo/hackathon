import express  from "express";
import routerAvaliador from "./avaliadorRoutes";
import routerEquipe from "./equipeRoutes";

const appRouter = express();

appRouter.use("/avaliadores", routerAvaliador);
appRouter.use("/equipes", routerEquipe);

export default appRouter;
