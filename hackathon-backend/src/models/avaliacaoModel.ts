import pool from "../database/dbConfig";



interface Avaliacao {
    id?: number;
    notas: object;
    avaliador_id: number;
    equipe_id: number;
}

class AvaliacaoModel {
    async create(avaliacao: Avaliacao): Promise<Avaliacao> {
        const { notas, avaliador_id, equipe_id } = avaliacao;
        const resultado = await pool.query(
            "INSERT INTO avaliacoes (notas, avaliador_id, equipe_id) VALUES ($1, $2, $3) RETURNING *",
            [ notas, avaliador_id, equipe_id ]
        );
        return resultado.rows[0];
    }

    async findAllAvaliacoes(): Promise<Avaliacao[]> {
        const resultado = await pool.query("SELECT * FROM avaliacoes");
        return resultado.rows;
    }

    async findByAvaliador(avaliador_id: number): Promise<Avaliacao[]> {
        const resultado = await pool.query("SELECT * FROM avaliacoes WHERE avaliador_id = $1", [avaliador_id]);
        return resultado.rows;
    }

    async findByEquipe(equipe_id: number): Promise<Avaliacao[]> {
        const resultado = await pool.query("SELECT * FROM avaliacoes WHERE equipe_id = $1", [equipe_id]);
        return resultado.rows;
    }

    async updateAvaliacao(id: number, avaliacao: Partial<Avaliacao>): Promise<Avaliacao | null> {
        const campos: string[] = [];
        const valores: any[] = [];
        let query = "UPDATE avaliacoes SET";

        Object.keys(avaliacao).forEach((key, index) => {
            campos.push(`${key} =$${index + 1}`);
            valores.push((avaliacao as any)[key]);
        });

        query +=
            campos.join(", ") +
            " WHERE id = $" +
            (campos.length + 1) +
            " RETURNING *";
        valores.push(id);

        try {
            const resultado = await pool.query(query, valores);
            return resultado.rows[0] || null;
        } catch (error) {
            console.error("Error updating avaliacao:", error);
            throw error;
        }
    }

    
}

export { Avaliacao, AvaliacaoModel };
