"use client";

import { useMemo, useState } from "react";
import { Settings } from "lucide-react";
import { EditUserDataModal } from "./EditUserDataModal";
import { useSelectedOption } from "../hooks/useSelectedOption";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const day = new Date();
  const hour = day.getHours();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const username = useMemo(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("username") || "Usuário";
  }, []);

  const training = useMemo(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("selectedTraining") || "";
  }, []);

  const [selectedOption, setSelectedOption] = useSelectedOption();

  const trainingText = useMemo(() => {
    switch (training) {
      case "1":
        return "Musculação";
      case "2":
        return "Corrida";
      default:
        return "Treino";
    }
  }, [training]);

  const greeting = useMemo(() => {
    if (hour < 5) return "Boa noite, ";
    if (hour < 12) return "Bom dia, ";
    if (hour < 19) return "Boa tarde, ";
    return "Boa noite, ";
  }, [hour]);

  return (
    <div className="w-full bg-none mx-auto bg-neutral-950 sm:w-140">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-400">{greeting}</p>
          <h1 className="text-3xl mb-3 text-white">{username}</h1>
        </div>

        <div className="flex items-center justify-center mx-2">
          <div className="w-25 h-9 rounded-4xl px-2 pt-0.5 mr-2 flex text-center items-center text-xl bg-neutral-700">
            <img
              src="chama-orange.png"
              alt="icon orange flame"
              className="w-5 h-5 mr-1"
            />
            <p className="font-light text-white">0 dias</p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 rounded-lg hover:bg-neutral-700 transition-colors"
            title="Editar meus dados"
            aria-label="Abrir configurações de perfil"
          >
            <Settings className="w-6 h-6 text-gray-300" />
          </button>
        </div>
      </div>

      <div className="w-full mx-auto h-16 rounded-lg border border-neutral-600 my-2 flex justify-between px-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-orange-200 border rounded-md flex items-center justify-center">
            <img
              src="chama-orange.png"
              alt="black flame icon"
              className="w-4 h-4"
            />
          </div>
          <div className="text-left">
            <p className="ml-2 text-gray-300 text-xs">Sequência</p>
            <p className="ml-2 text-white text-sm">0 dias</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 border bg-green-200 rounded-md flex items-center justify-center">
            <img src="raio.png" alt="black ray icon" className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="ml-2 text-gray-300 text-xs">Pontos</p>
            <p className="ml-2 text-white text-xl">0</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 border bg-yellow-200 rounded-md flex items-center justify-center">
            <img
              src="trophy-yellow.png"
              alt="black trophy icon"
              className="w-5 h-5"
            />
          </div>
          <div className="text-left">
            <p className="ml-2 text-gray-300 text-xs">Treinos</p>
            <p className="ml-2 text-white text-sm">0</p>
          </div>
        </div>
      </div>

      <div className="h-10 border border-neutral-600 rounded-md flex justify-around items-center mb-2">
        <button
          className={`w-full h-8 m-1 py-0.5 rounded-md font-medium cursor-pointer text-center transition-colors ${
            selectedOption === 1
              ? "bg-green-400 text-black"
              : "text-white opacity-80 hover:opacity-100"
          }`}
          onClick={() => setSelectedOption(1)}
        >
          {trainingText}
        </button>

        {/* <button
          className={`w-full h-8 m-1 py-0.5 rounded-md font-medium cursor-pointer text-center transition-colors ${
            selectedOption === 3
              ? "bg-green-400 text-black"
              : "text-neutral-400 hover:text-neutral-300"
          }`}
          onClick={() => setSelectedOption(3)}
        >
          Corrida
        </button> */}

        <button
          className={`w-full h-8 m-1 py-0.5 rounded-md font-medium cursor-pointer text-center transition-colors ${
            selectedOption === 2
              ? "bg-green-400 text-black"
              : "text-neutral-400 hover:text-neutral-300"
          }`}
          onClick={() => setSelectedOption(2)}
        >
          Conquistas
        </button>
      </div>

      <EditUserDataModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
