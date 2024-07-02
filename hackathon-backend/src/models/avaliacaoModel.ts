import pool from "../database/dbConfig";

interface Nota {
    [key:string]: number,
}

interface Avaliacao {
    id?: number;
    notas?: Nota;
    avaliador_id: number;
    equipe_id: number;
}

class AvaliacaoModel {
    async create(avaliacao: Avaliacao): Promise<Avaliacao> {
        const { avaliador_id, equipe_id } = avaliacao;
        const resultado = await pool.query(
            "INSERT INTO avaliacoes (avaliador_id, equipe_id) VALUES ($1, $2) RETURNING *",
            [ avaliador_id, equipe_id ]
        );
        return resultado.rows[0];
    }
}

export { Avaliacao, AvaliacaoModel };
