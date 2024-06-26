import pool from "../database/dbConfig";

interface Avaliador {
    id?: number;
    nome: string;
    login: string;
    senha: string;
}

class AvaliadorModel {
    async create(avaliador: Avaliador): Promise<Avaliador> {
        const { nome, login, senha } = avaliador;
        const resultado = await pool.query(
            "INSERT INTO avaliadores (nome, login, senha) VALUES ($1, $2, $3) RETURNING *",
            [ nome, login, senha ]
        );
        return resultado.rows[0];
    }

    async findAll(): Promise<Avaliador[] | null> {
        const resultado = await pool.query("SELECT * FROM avaliadores");
        return resultado.rows || null;
    }

    async delete(id: number): Promise<void> {
        await pool.query("DELETE FROM avaliadores WHERE id = $1", [id]);
    }
}

export { Avaliador, AvaliadorModel };