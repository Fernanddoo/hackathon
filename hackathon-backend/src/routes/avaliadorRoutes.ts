import { Router } from "express";
import AvaliadorController from "../controllers/avaliadorController"
import { validateAvaliador } from "../middlewares/validationMiddleware";

const routerAvaliador = Router();

routerAvaliador.post("/", validateAvaliador, AvaliadorController.createAvaliador);
routerAvaliador.get("/", AvaliadorController.getAvaliador);
routerAvaliador.delete("/:id", AvaliadorController.deleteAvaliador);

export default routerAvaliador;
