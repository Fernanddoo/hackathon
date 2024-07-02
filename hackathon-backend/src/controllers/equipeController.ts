import e, { Request, Response } from "express";
import equipesService from "../services/equipesService";

class EquipeController {
    async createEquipe(req: Request, res: Response): Promise<Response> {
        try {
            const equipe = await equipesService.createEquipe(req.body);
            return res.status(201).json(equipe);
        } catch (error) {
            return res.status(500).json({ error: "Error creating Equipe"});
        }
    }

    async getEquipe(req: Request, res: Response): Promise<Response> {
        try {
            const equipes = await equipesService.getAllEquipes();
            if (equipes) {
                return res.status(200).json(equipes);
            }
            return res.status(404).json({ error: "Equipes not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error fetching equipes" });
        }
    }

    async deleteEquipe(req: Request, res: Response): Promise<Response> {
        try {
            await equipesService.deleteEquipe(Number(req.params.id));
            return res.status(200).json({ message: "Equipe deleted successfully "})
        } catch (error) {
            return res.status(500).json({ error: "Error deleting Equipe" })
        }
    }
}

export default new EquipeController();