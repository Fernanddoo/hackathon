import pool from "../database/dbConfig";

interface Avaliacao {
    id?: number;
    notas: JSON;
    avaliador_id: number;
    equipe_id: number;
}