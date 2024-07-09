"use client"
import React, { useState, useEffect } from "react";
import api from "../../services/api";

interface IEquipes {
    id: number,
    nome: string,
  }

  
export default function Page() {
    const [ equipes, setEquipes ] = useState<IEquipes[]>([]);

    useEffect(() => {
      api.get('/equipes').then(response => {
        setEquipes(response.data);
      }).catch(error => {
        console.error("Erro ao chamar a API:", error);
      });
    }, [equipes]);

    const deleteEquipe = async (id: number) => {
        await api.delete(`/equipes/${id}`);
    }

    return (
        <main>
            <div>
                <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
                    <h1 className="mt-2 bg-gray-900 mb-2">Equipes:</h1>
                    {equipes.map((equipe: IEquipes) => {
                        return (
                            <div key={equipe.id} className="mb-2">
                                <h1>{equipe.nome}</h1>
                                <button 
                                onClick={() => deleteEquipe(equipe.id)}
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