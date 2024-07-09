"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../services/api";

interface IAvaliadores {
    id: number;
    nome: string;
  }

  interface IEquipes {
    id: number;
    nome: string;
  }

interface IAvaliacao {
    notas: { 
        [Pergunta.p1]: number;
        [Pergunta.p2]: number;
        [Pergunta.p3]: number;
        [Pergunta.p4]: number;
        [Pergunta.p5]: number;
    };
    avaliador_id: number;
    equipe_id: number;
}

enum Pergunta {
    p1 = "Originalidade do Projeto: Qual a inovação e originalidade do projeto apresentado pela equipe?",
    p2 = "Impacto Potencial: Qual o impacto potencial do projeto na sociedade ou no mercado?",
    p3 = "Execução Técnica: Qual a qualidade da execução técnica e da implementação do projeto?",
    p4 = "Apresentação e Demonstração: Quão clara e eficaz foi a apresentação e demonstração do projeto pela equipe?",
    p5 = "Viabilidade e Sustentabilidade: Quão viável e sustentável é o projeto a longo prazo?",
}

export default function Page() {
    const rota = useRouter();
    const [ avaliadores, setAvaliadores ] = useState<IAvaliadores[]>([]);
    const [ equipes, setEquipes ] = useState<IEquipes[]>([]);
    const [ selectAvaliador, setSelectAvaliador ] = useState<number>(0);
    const [ selectEquipe, setSelectEquipe ] = useState<number>(0);
    const [ perguntas, setPergunta ] = useState({
        [Pergunta.p1]: 0,
        [Pergunta.p2]: 0,
        [Pergunta.p3]: 0,
        [Pergunta.p4]: 0,
        [Pergunta.p5]: 0,
    });
  
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

    const selectAvaliadores = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectAvaliador(Number(e.target.value));
    }

    const selectEquipes = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectEquipe(Number(e.target.value));
    }

    const handleNota = (e: React.ChangeEvent<HTMLInputElement>, questao: Pergunta) => {
        const valor = Number(e.target.value);
        if (!isNaN(valor) && valor >= 0 && valor <= 10) {
            setPergunta({ ...perguntas, [questao]: valor });
        }
    }

    const postRequest = async (e: React.FormEvent) => {
        e.preventDefault();

        const nota: IAvaliacao = {
            notas: perguntas,
            avaliador_id: selectAvaliador,
            equipe_id: selectEquipe,
        };

        try {
            const resposta = await api.post('/avaliacoes', nota);
            console.log(resposta.data);
            setSelectAvaliador(0);
            setSelectEquipe(0);
            setPergunta({
                [Pergunta.p1]: 0,
                [Pergunta.p2]: 0,
                [Pergunta.p3]: 0,
                [Pergunta.p4]: 0,
                [Pergunta.p5]: 0,
            });
            rota.push("/"); 
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };
    
    return (
        <form onSubmit={postRequest} className=" mt-10 ml-52 mr-52 p-4 bg-gray-800 rounded text-black">
            {Object.values(Pergunta).map((pergunta) => (
                <div key={pergunta} className="text-white mb-4">
                    <label className="text-sm justify-between flex mb-4">{pergunta}</label>
                    <input 
                        type="number" 
                        min="0"
                        max="0"
                        step="1"
                        value={perguntas[pergunta]}
                        onChange={(e) => handleNota(e, pergunta)}
                        className="text-black rounded px-3 py-2"
                    />
                </div>
            ))}
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Avaliador ID</label>
                <select
                    value={selectAvaliador}
                    onChange={selectAvaliadores}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                >
                    <option value={0}>Selecione o avaliador</option>
                    {avaliadores.map((avaliador) => (
                        <option key={avaliador.id} value={avaliador.id}>
                            {avaliador.nome}
                        </option>
                    ))}

                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Equipe ID</label>
                <select
                    value={selectEquipe}
                    onChange={selectEquipes}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                >
                    <option value={0}>Selecione a equipe</option>
                    {equipes.map((equipe) => (
                        <option key={equipe.id} value={equipe.id}>
                            {equipe.nome}
                        </option>
                    ))}

                </select>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Enviar</button>
        </form>
    );
    
}