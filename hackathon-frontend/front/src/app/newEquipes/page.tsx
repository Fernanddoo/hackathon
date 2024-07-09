"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../../services/api";

interface IEquipes {
    nome: string,
  }

export default function Page() {
    const rota = useRouter();
    const [ equipes, setEquipes ] = useState<IEquipes>({
        nome: "",
    });

    const handler = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setEquipes((prevEquipes) => ({
            ...prevEquipes,
            [name]: value,
        }))
    };

    const postRequest = async () => {
        try {
            await api.post("/equipes", {
                ...equipes,
            });

            rota.push("/");

        } catch (error) {
            console.error("Erro:", error)
        }
    };

    return (
        <div className="container items-center justify-center flex my-32">
            <form className="forms inline-block justify-center text bg-gray-800 text-black rounded-xl p-4 font-semibold pt-2">
                <div>
                    <label className=" flex rounded px-2 ml-2 text-white">Nome</label>
                    <input type="text"
                        name="nome"
                        value={equipes.nome}
                        onChange={handler}
                        placeholder="Insira o nome"
                        className="desc px-2 rounded mb-2 mt-2 ml-2 mr-2"
                    />
                </div>
                <br />
                <div className="flex flex-row gap-2 items-center justify-center w-[97%] text-white font-bold">
                    <button type="button"
                        onClick={postRequest}
                        className=" inline-block bg-blue-600 rounded p-1 px-3"
                    >
                        Cadastrar
                    </button>
                    <br />
                    <button type="button"
                        onClick={() => rota.push("/")}
                        className=" inline-block bg-red-500 rounded p-1 px-3"
                    >
                        Cancelar
                    </button>
                </div>
                <br />
            </form>
        </div>
    )
}