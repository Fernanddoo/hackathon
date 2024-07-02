import { Router } from "express"; 
import equipeController from "../controllers/equipeController";
import { validateEquipe } from "../middlewares/validationMiddleware";

const routerEquipe = Router();

routerEquipe.post("/", validateEquipe, equipeController.createEquipe);
routerEquipe.get("/", equipeController.getEquipe);
routerEquipe.delete("/:id", equipeController.deleteEquipe);

export default routerEquipe;