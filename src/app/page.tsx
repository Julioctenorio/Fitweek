"use client";
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/navigation";
import Button from "./components/Button";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full bg-neutral-950">
      <div className="w-full h-dvh flex flex-col bg-[#151515] items-center text-center gap-8 justify-center lg:gap-5">
        <Header />
        <p className="mx-16 text-gray-400">
          Organize seus treinos semanais de forma simpels e eficaz
        </p>
        <div className="flex my-16">
          <div className="flex flex-col w-20 items-center">
            <img
              src="chama.png"
              alt="Fire design"
              className="w-5 h-5 mb-1 xl:w-6 xl:h-6"
            />
            <p className="text-sm text-gray-300 ">Sequências</p>
          </div>
          <div className="flex flex-col w-30 items-center border-gray-500 border-l border-r mx-6 xl:mx-20 xl:w-35">
            <img
              src="raio.png"
              alt="Lightning design"
              className="w-5 h-5 mb-1 xl:w-6 xl:h-6 border-none bg-gree"
            />
            <p className="text-sm text-gray-300">Pontos</p>
          </div>
          <div className="flex flex-col w-20 items-center">
            <img
              src="trofeu.png"
              alt="Trophy design"
              className="w-5 h-5 mb-1 xl:w-6 xl:h-6"
            />
            <p className="text-sm text-gray-300">Conquistas</p>
          </div>
        </div>
        <div>
          <Button text="Começar agora" onClick={() => router.push("/user/")} />
        </div>
      </div>

      <div className="w-full h-full my-7 sm:py-8 md:py-32">
        <div className="flex flex-col mx-10 my-6 text-center justify-center">
          <h2 className="uppercase text-3xl m-5 md:m-5 xl:text-5xl text-white">
            Tudo que você precisa
          </h2>
          <p className="mx-4 text-gray-400 xl:text-lg xl:pb-8">
            Ferramenta poderosa para transformar sua rotina de treinos
          </p>
        </div>
        <div className="grid grid-cols-1 pb-3 mb-5 md:grid-cols-2 md:mx-32 xl:grid-cols-4 xl:flex xl:justify-center xl:gap-3">
          <Card
            title="Planejamento Semanal"
            icon="calendar.png"
            extra="Organize seus treinos para cada dia da semana de forma clara e
              intuitiva."
          />

          <Card
            title="Treino Progressivo"
            icon="atuacao.png"
            extra="Programas adaptados ao seu nível: Iniciante, intermediário ou avançado."
          />

          <Card
            title="Gamificação"
            icon="trofeu-icon.png"
            extra="Conquiste pontos, mantenha sequências e desbloqueie conquistas."
          />

          <Card
            title="Musculação & Corrida"
            icon="batimento.png"
            extra="Escolha entre treinos de musculação estruturados ou registo de corridas."
          />
        </div>
      </div>

      <div className="w-full h-full mb-16 py-7 bg-[#151515] text-center items-center sm:py-8 md:py-32 xl:my-7">
        <div className="flex flex-col mx-10 my-6 text-center justify-center">
          <h2 className="uppercase text-3xl m-5 md:m-5 xl:text-5xl text-white">
            Programa de Treino
          </h2>
          <p className="mx-4 text-gray-400 xl:text-lg xl:pb-8">
            Programas progressivos que evoluem com você
          </p>
        </div>
        <div className="grid grid-cols-1 pb-3 mb-5 md:grid-cols-3 md:mx-10 xl:flex xl:justify-center xl:gap-5">
          <Card title="Iniciante"
          number={1}
          extra="Full Body → ABC → ABCD" icon={""}          />

          <Card
            title="Intermediário"
            number={2}
            extra="ABC → ABCD → Upper / Lower" icon={""}          />
          
          <Card
            title="Avançado"
            number={3}
            extra="Push / Pull / Legs • Personalizado" icon={""}          />
        </div>
      </div>

      <div className="w-full h-full flex-col items-center justify-center mt-16">
        <div className="flex flex-col m-10 text-center">
          <h2 className="uppercase text-3xl m-5 md:m-5 xl:text-5xl xl:pt-20 text-white">
            Pronto para começar?
          </h2>
          <p className="mx-4 text-gray-400 xl:text-lg xl:pb-8">
            Configure seu perfil em menos de 2 minutos e comece a organizar seus
            treinos hoje.
          </p>
        </div>
        <div className="flex justify-center my-16 xl:pb-20">
          <Button
            text="Criar Meu Perfil"
            onClick={() => router.push("/user/")}
          />
        </div>

        <footer className="w-full h-32 flex flex-col mx-auto items-center border-t border-t-gray-700 py-8 px-5 md:flex-row md:justify-between">
          <div className="flex items-center  md:my-auto">
            <img
              src="haltere - verde.png"
              alt="Dubble design"
              className="w-5 h-5 rotate-45 mr-1 xl:w-8 xl:h-8 xl:mr-3"
            />
            <h4 className="uppercase text-lg text-white md:my-auto xl:text-2xl">
              Fitweek
            </h4>
          </div>
          <p className="text-gray-300 mt-2">
            © 2025 FitWeek. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
