import { Avaliacao, AvaliacaoModel } from "../models/avaliacaoModel"

class AvaliacaoService {
    private avaliacaoModel: AvaliacaoModel;

    constructor() {
        this.avaliacaoModel = new AvaliacaoModel();
    }

    async createAvaliacao(notas: object, avaliador_id: number, equipe_id: number): Promise<Avaliacao> {
        const avaliacaoData = { notas, avaliador_id, equipe_id };
        return this.avaliacaoModel.create(avaliacaoData);
    }

    async findAllAvaliacoes(): Promise<Avaliacao[] | null>{
        return this.avaliacaoModel.findAllAvaliacoes();
    }

    async findByAvaliador(avaliador_id: number): Promise<Avaliacao[] | null> {
        return this.avaliacaoModel.findByAvaliador(avaliador_id);
    }

    async findByEquipe(equipe_id: number): Promise<Avaliacao[] | null> {
        return this.avaliacaoModel.findByEquipe(equipe_id);
    }

    async updateAvaliacao(id: number, avaliacaoData: Partial<Avaliacao>): Promise<Avaliacao | null> {
        return this.avaliacaoModel.updateAvaliacao(id, avaliacaoData);
    }
    
}

export default new AvaliacaoService();
