"use client"
import React, { useState, useEffect } from "react";
import api from "../../services/api";


interface INotas {
    id: number;
    notas: object;
    avaliador_id: number;
    equipe_id: number;
  }

  export default function Page() {
    const [ notas, setNotas ] = useState<INotas[]>([]);

    useEffect(() => {
      api.get('/avaliacoes').then(response => {
        setNotas(response.data);
      }).catch(error => {
        console.error("Erro ao chamar a API:", error);
      });
    }, [notas]);

    return (
        <main>
            <div>
                <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
                    <h1 className="mt-2 bg-gray-900 mb-2">Notas:</h1>
                    {notas.map((nota: INotas) => {
                        return (
                            <div key={nota.id} className="mb-2 justify-content">
                                <h1>ID: {nota.id}</h1>
                                <h2>Avaliador ID: {nota.avaliador_id}</h2>
                                <h2>Equipe ID: {nota.equipe_id}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}