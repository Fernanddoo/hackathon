import { Avaliacao, AvaliacaoModel } from "../models/avaliacaoModel"

class AvaliacaoService {
    private avaliacaoModel: AvaliacaoModel;

    constructor() {
        this.avaliacaoModel = new AvaliacaoModel();
    }

    async createAvaliacao(avaliacaoData: Avaliacao): Promise<Avaliacao> {
        return this.avaliacaoModel.create(avaliacaoData);
    }
}

export default new AvaliacaoService();
