"use client"
import React, { useState, useEffect } from "react";
import api from "../services/api";
import Link from "next/link";

interface IAvaliadores {
  id: number;
  nome: string;
}

interface IEquipes {
  id: number;
  nome: string;
}

interface INotas {
  id: number;
  notas: object;
  avaliador_id: number;
  equipe_id: number;
}

export default function Home() {
  const [ avaliadores, setAvaliadores ] = useState<IAvaliadores[]>([]);
  const [ equipes, setEquipes ] = useState<IEquipes[]>([]);
  const [ notas, setNotas ] = useState<INotas[]>([]);

  useEffect(() => {
    api.get('/avaliadores').then(response => {
      setAvaliadores(response.data);
    }).catch(error => {
      console.error("Erro ao chamar a API:", error);
    });

    api.get('/equipes').then(response => {
      setEquipes(response.data);
    }).catch(error => {
      console.error("Erro ao chamar a API:", error);
    });

    api.get('/avaliacoes').then(response => {
      setNotas(response.data);
    }).catch(error => {
      console.error("Erro ao chamar a API:", error)
    })
  }, [avaliadores, equipes, notas]);

  return (
    <main>
      <div>
        <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
          <h1 className="mt-2">Avaliadores: {avaliadores.length}</h1>
          <Link href="/allAvaliadores" className="bg-gray-700 hover:bg-white transition-colors duration-300 hover:text-black rounded mt-2 px-2">Mostrar avaliadores</Link>
        </div>
        <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
          <h1 className="mt-2">Equipes: {equipes.length}</h1>
          <Link href="/allEquipes" className="bg-gray-700 hover:bg-white transition-colors duration-300 hover:text-black rounded mt-2 px-2">Mostrar equipes</Link>
        </div>
        <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
          <h1 className="mt-2">Notas atribuídas: {notas.length}</h1>
          <Link href="/allNotas" className="bg-gray-700 hover:bg-white transition-colors duration-300 hover:text-black rounded mt-2 px-2">Mostrar notas</Link>
        </div>
      </div>
    </main>
  )
}
