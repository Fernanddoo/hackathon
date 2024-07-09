import express  from "express";
import routerAvaliador from "./avaliadorRoutes";
import routerEquipe from "./equipeRoutes";
import routerAvaliacao from "./avaliacaoRoutes";

const appRouter = express();

appRouter.use("/avaliadores", routerAvaliador);
appRouter.use("/equipes", routerEquipe);
appRouter.use("/avaliacoes", routerAvaliacao);

export default appRouter;
