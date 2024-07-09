"use client"
import React, { useState, useEffect } from "react";
import api from "../../services/api";

interface IAvaliadores {
    id: number,
    nome: string,
  }

  
export default function Page() {
    const [ avaliadores, setAvaliadores ] = useState<IAvaliadores[]>([]);
  
    useEffect(() => {
      api.get('/avaliadores').then(response => {
        setAvaliadores(response.data);
      }).catch(error => {
        console.error("Erro ao chamar a API:", error);
      });
    }, [avaliadores]);

    const deleteAvaliador = async (id: number) => {
        await api.delete(`/avaliadores/${id}`);
    }

    return (
        <main>
            <div>
                <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
                    <h1 className="mt-2 bg-gray-900 mb-2">Avaliadores:</h1>
                    {avaliadores.map((avaliador: IAvaliadores) => {
                        return (
                            <div key={avaliador.id} className="mb-2">
                                <h1>{avaliador.nome}</h1>
                                <button 
                                onClick={() => deleteAvaliador(avaliador.id)}
                                className="inline-block w-[30%] bg-red-500 rounded hover:bg-red-800 transition-colores duration-300 text-sm font-semibold"
                                >
                                    Excluir
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}