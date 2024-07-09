import { Request, Response } from "express";
import avaliacaoService from "../services/avaliacaoService";
import Joi from 'joi';

const schema = Joi.object({
    notas: Joi.object().required(),
    avaliador_id: Joi.number().required(),
    equipe_id: Joi.number().required(),
})

class AvaliacaoController {
    async createAvaliacao(req: Request, res: Response): Promise<Response> {
        const { error, value } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        try {
            const avaliacao = await avaliacaoService.createAvaliacao(value.notas, value.avaliador_id, value.equipe_id);
            return res.status(201).json(avaliacao);
        } catch (error) {
            return res.status(500).json({ error: "Error creating Avaliacao"});
        }
    }

    async getAvaliacoes(req: Request, res: Response): Promise<Response>{
        try{
            const avaliacoes = await avaliacaoService.findAllAvaliacoes();
            if (avaliacoes) {
                return res.status(200).json(avaliacoes);
            }
            return res.status(404).json({ error: "Avaliacoes not found"});
        } catch (error) {
            return res.status(500).json({ error: "Error fetching avaliacoes"});
        }
    }

    async getByAvaliador(req: Request, res: Response): Promise<Response> {
        try {
            const avaliacoes = await avaliacaoService.findByAvaliador(Number(req.params.avaliador_id));
            return res.status(200).json(avaliacoes);
        } catch (error) {
            return res.status(500).json({ error: "Error fetching Avaliacoes" });
        }
    }

    async getByEquipe(req: Request, res: Response): Promise<Response> {
        try {
            const avaliacoes = await avaliacaoService.findByEquipe(Number(req.params.equipe_id));
            return res.status(200).json(avaliacoes);
        } catch (error) {
            return res.status(500).json({ error: "Error fetching Avaliacoes" });
        }
    }

    async updateAvaliacao(req: Request, res: Response): Promise<Response> {
        try {
            const avaliacao = await avaliacaoService.updateAvaliacao(
                Number(req.params.id), req.body
            );
            if (avaliacao) {
                return res.status(200).json(avaliacao);
            }
            return res.status(404).json({ error: "Avaliacao not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error updating avaliacao" });
        }
    }
}

export default new AvaliacaoController();