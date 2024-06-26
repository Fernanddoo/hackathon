import { Equipe, EquipeModel } from "../models/equipeModel";

class EquipeService {
    private equipeModel: EquipeModel;

    constructor() {
        this.equipeModel = new EquipeModel();
    }

    async createEquipe(equipeData: Equipe): Promise<Equipe> {
        return this.equipeModel.create(equipeData);
    }

    async getAllEquipes(): Promise<Equipe[] | null> {
        return this.equipeModel.findAll();
    }

    async deleteEquipe(id: number): Promise<void> {
        return this.equipeModel.delete(id);
    }
}

export default new EquipeService();
