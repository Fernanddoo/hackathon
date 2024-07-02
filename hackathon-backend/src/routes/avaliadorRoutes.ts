import { Router } from "express";
import AvaliadorController from "../controllers/avaliadorController"
import { validateAvaliador } from "../middlewares/validationMiddleware";

const router = Router();

router.post("/", validateAvaliador, AvaliadorController.createAvaliador);
router.get("/", AvaliadorController.getAvaliador);
router.delete("/:id", AvaliadorController.deleteAvaliador);

export default router;
