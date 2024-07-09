import { Avaliacao, AvaliacaoModel } from "../models/avaliacaoModel"

class AvaliacaoService {
    private avaliacaoModel: AvaliacaoModel;

    constructor() {
        this.avaliacaoModel = new AvaliacaoModel();
    }

    async createAvaliacao(avaliacaoData: Avaliacao): Promise<Avaliacao> {
        return this.avaliacaoModel.create(avaliacaoData);
    }

    async findAllAvaliacoes(): Promise<Avaliacao[] | null>{
        return this.avaliacaoModel.findAllAvaliacoes();
    }

    async findByAvaliador(avaliador_id: number): Promise<Avaliacao[] | null> {
        return this.avaliacaoModel.findByAvaliador(avaliador_id);
    }

    async updateAvaliacao(id: number, avaliacaoData: Partial<Avaliacao>): Promise<Avaliacao | null> {
        return this.avaliacaoModel.updateAvaliacao(id, avaliacaoData);
    }
    
}

export default new AvaliacaoService();
