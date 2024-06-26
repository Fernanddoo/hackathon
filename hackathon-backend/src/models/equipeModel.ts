import pool from "../database/dbConfig";

interface Equipe {
    id?: number;
    nome: string;
}

class EquipeModel {
    async create(equipe: Equipe): Promise<Equipe> {
        const { nome } = equipe;
        const resultado = await pool.query(
            "INSERT INTO equipes (nome) VALUES ($1) RETURNING *",
            [ nome ]
        );
        return resultado.rows[0];
    }

    async findAll(): Promise<Equipe[] | null> {
        const resultado = await pool.query("SELECT * FROM equipes");
        return resultado.rows || null;
    }

    async delete(id: number): Promise<void> {
        await pool.query("DELETE FROM equipes WHERE id = $1", [id]);
    }
}

export { Equipe, EquipeModel };
