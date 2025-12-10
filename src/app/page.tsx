/* eslint-disable @next/next/no-img-element */

import Button from "./components/Button";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="flex flex-col w-full h-dvh bg-[#151515] items-center text-center gap-10 justify-center lg:gap-5">
        <Header />
        <div className="flex my-16">
          <div className="flex flex-col w-20 items-center">
            <img src="chama.png" alt="Fire design" className="w-6 h-6 mb-1 xl:w-10 xl:h-10" />
            <p className="text-sm text-gray-300 md:text-lg">Sequências</p>
          </div>
          <div className="flex flex-col w-30 items-center border-gray-500 border-l border-r mx-6 xl:mx-20 xl:w-50">
            <img
              src="raio.png"
              alt="Lightning design"
              className="w-6 h-6 mb-1 xl:w-10 xl:h-10 border-none bg-gree"
            />
            <p className="text-sm text-gray-300 md:text-lg">Pontos</p>
          </div>
          <div className="flex flex-col w-20 items-center">
            <img src="trofeu.png" alt="Trophy design" className="w-6 h-6 mb-1 xl:w-10 xl:h-10" />
            <p className="text-sm text-gray-300 md:text-lg">Conquistas</p>
          </div>
        </div>
        <div>
          <Button />
        </div>
      </div>

      <div className="w-dvw h-full my-7 sm:py-8 md:py-32">
        <div className="flex flex-col mx-10 my-6 text-center justify-center">
          <h2 className="uppercase text-3xl m-5 md:m-5 xl:text-5xl text-white">Tudo que você precisa</h2>
          <p className="mx-4 text-gray-400 xl:text-lg xl:pb-8">
            Ferramenta poderosa para transformar sua rotina de treinos
          </p>
        </div>
        <div className="grid grid-cols-1 pb-3 mb-5 md:grid-cols-2 md:mx-32 xl:grid-cols-4 xl:flex xl:justify-center xl:gap-3">
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 mx-5 my-2 p-5 transition hover:scale-105 hover:shadow-xl hover:border-green-500 md:mx-3 md:my-3 xl:w-96 xl:h-56">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="calendar.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-lg mt-4 mb-1 2xl:text-2xl 2xl:py-2 text-white">Planejamento Semanal</h3>
            <p className="text-gray-400 xl:text-md">
              Organize seus treinos para cada dia da semana de forma clara e
              intuitiva.
            </p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 mx-5 my-2 p-5 transition hover:scale-105 hover:shadow-xl hover:border-green-500 md:mx-3 md:my-3 xl:w-96 xl:h-56">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="atuacao.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-lg mt-4 mb-1 2xl:text-2xl 2xl:py-2 text-white">Treino Progressivo</h3>
            <p className="text-gray-400 xl:text-md">
              Programas adaptados ao seu nível: Iniciante, intermediário ou
              avançado.
            </p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 mx-5 my-2 p-5 transition hover:scale-105 hover:shadow-xl hover:border-green-500 md:mx-3 md:my-3 xl:w-96 xl:h-56">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="trofeu-icon.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-lg mt-4 mb-1 2xl:text-2xl 2xl:py-2 text-white">Gamificação</h3>
            <p className="text-gray-400 xl:text-md">
              Conquiste pontos, mantenha sequências e desbloqueie conquistas.
            </p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 mx-5 my-2 p-5 transition hover:scale-105 hover:shadow-xl hover:border-green-500 md:mx-3 md:my-3 xl:w-96 xl:h-56">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="batimento.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-lg mt-4 mb-1 2xl:text-2xl 2xl:py-2 text-white">Musculação & Corrida</h3>
            <p className="text-gray-400 xl:text-md">
              Escolha entre treinos de musculação estruturados ou registo de
              corridas.
            </p>
          </div>
        </div>
      </div>

      <div className="w-dvw h-full mb-16 py-7 bg-[#151515] text-center items-center sm:py-8 md:py-32 xl:my-7">
        <div className="flex flex-col mx-10 my-6 text-center justify-center">
          <h2 className="uppercase text-3xl m-5 md:m-5 xl:text-5xl text-white">Programa de Treino</h2>
          <p className="mx-4 text-gray-400 xl:text-lg xl:pb-8">
            Programas progressivos que evoluem com você
          </p>
        </div>
        <div className="grid grid-cols-1 pb-3 mb-5 md:grid-cols-3 md:mx-10 xl:flex xl:justify-center xl:gap-5">
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 mx-5 my-2 p-5 transition hover:scale-105 hover:shadow-xl hover:border-green-500 md:mx-2 md:my-3 xl:w-80 xl:h-56 xl:pt-8">
            <div className="flex w-12 h-12 bg-gray-800 items-center justify-center rounded-full mx-auto ">
              <p className="text-green-400 text-2xl">1</p>
            </div>
            <h3 className="text-xl mt-4 mb-1 xl:text-2xl xl:py-2 text-white">Iniciante</h3>
            <p className="text-gray-400">Full Body → ABC → ABCD</p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 mx-5 my-2 p-5 transition hover:scale-105 hover:shadow-xl hover:border-green-500 md:mx-2 md:my-3 xl:w-80 xl:h-56 xl:pt-8">
            <div className="flex w-12 h-12 bg-gray-800 items-center justify-center rounded-full mx-auto">
              <p className="text-green-400 text-2xl">2</p>
            </div>
            <h3 className="text-xl mt-4 mb-1 xl:text-2xl xl:py-2 text-white">Intermediário</h3>
            <p className="text-gray-400">ABC → ABCD → Upper / Lower</p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 mx-5 my-2 p-5 transition hover:scale-105 hover:shadow-xl hover:border-green-500 md:mx-2 md:my-3 xl:w-80 xl:h-56 xl:pt-8">
            <div className="flex w-12 h-12 bg-gray-800 items-center justify-center rounded-full mx-auto">
              <p className="text-green-400 text-2xl">3</p>
            </div>
            <h3 className="text-xl mt-4 mb-1 xl:text-2xl xl:py-2 text-white">Avançado</h3>
            <p className="text-gray-400">Push / Pull / Legs • Personalizado</p>
          </div>
        </div>
      </div>
      
      <div className="flex-col items-center justify-center w-dvw h-full mt-16">
        <div className="flex flex-col m-10 text-center">
          <h2 className="uppercase text-3xl m-5 md:m-5 xl:text-5xl xl:pt-20 text-white">Pronto para começar?</h2>
          <p className="mx-4 text-gray-400 xl:text-lg xl:pb-8">
            Configure seu perfil em menos de 2 minutos e comece a organizar seus
            treinos hoje.
          </p>
        </div>
        <div className="flex justify-center my-16 xl:pb-20">
          <Button />
        </div>
        <div className="w-full h-32 flex flex-col mx-auto items-center border-t border-t-gray-700 py-8 px-5 md:flex-row md:justify-between">
          <div className="flex items-center  md:my-auto">
            <img src="haltere - verde.png" alt="Dubble design" className="w-5 h-5 rotate-45 mr-1 xl:w-8 xl:h-8 xl:mr-3" />
            <h4 className="uppercase text-lg  md:my-auto xl:text-2xl">Fitweek</h4>
          </div>
          <p className="text-gray-300 mt-2">© 2025 FitWeek. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
