"use client"
import React, { useState, useEffect } from "react";
import api from "../services/api";

interface Avaliadores {
  id: number,
  nome: string,
}

interface Equipes {
  id: number,
  nome: string,
}

export default function Home() {
  const [ avaliadores, setAvaliadores ] = useState<Avaliadores[]>([]);
  const [ equipes, setEquipes ] = useState<Equipes[]>([]);

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
  }, [avaliadores, equipes]);

  return (
    <main>
      <div>
        <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
          <h1 className="mt-2">Avaliadores: {avaliadores.length}</h1>
          <button className="bg-gray-700 hover:bg-white transition-colors duration-300 hover:text-black rounded mt-2 px-2 mb-2">Mostrar avaliadores</button>
        </div>
        <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
          <h1 className="mt-2">Equipes: {equipes.length}</h1>
          <button className="bg-gray-700 hover:bg-white transition-colors duration-300 hover:text-black rounded mt-2 px-2 mb-2">Mostrar equipes</button>
        </div>
        <div className="box ml-auto mr-auto mt-10 mb-10 w-52 border-white border-4 bg-gray-800 rounded text-center text-white">
          <h1 className="mt-2">Notas atribuídas: {avaliadores.length}</h1>
          <button className="bg-gray-700 hover:bg-white transition-colors duration-300 hover:text-black rounded mt-2 px-2 mb-2">Mostrar notas</button>
        </div>
      </div>
    </main>
  )
}
