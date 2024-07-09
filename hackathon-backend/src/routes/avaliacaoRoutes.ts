import { Router } from "express";
import avaliacaoController from "../controllers/avaliacaoController";
import { validateAvaliacao } from "../middlewares/validationMiddleware";

const routerAvaliacao = Router();

routerAvaliacao.post("/", validateAvaliacao, avaliacaoController.createAvaliacao);
routerAvaliacao.get("/", avaliacaoController.getAvaliacoes);
routerAvaliacao.get("/:avaliador_id", avaliacaoController.getByAvaliador);
routerAvaliacao.get("/:equipe_id", avaliacaoController.getByEquipe);
routerAvaliacao.put("/:id", avaliacaoController.updateAvaliacao);

export default routerAvaliacao;