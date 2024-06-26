import { Avaliador, AvaliadorModel } from "../models/avaliadorModel"

class AvaliadorService {
    private avaliadorModel: AvaliadorModel;

    constructor() {
        this.avaliadorModel = new AvaliadorModel();
    }

    async createAvaliador(avaliadorData: Avaliador): Promise<Avaliador> {
        return this.avaliadorModel.create(avaliadorData);
    }

    async getAllAvaliadores(): Promise<Avaliador[] | null> {
        return this.avaliadorModel.findAll();
    }

    async deleteAvaliador(id: number): Promise<void> {
        return this.avaliadorModel.delete(id);
    }
}

export default new AvaliadorService();
