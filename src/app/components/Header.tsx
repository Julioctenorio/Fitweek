'use client'
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const day = new Date();
  const hour = day.getHours();
  const username = localStorage.getItem("username");
  const training = localStorage.getItem("selectedITraining")
  console.log(training)

  return (
    <>
      <div className="w-full bg-none p-3 mx-auto sm:w-120 ">
        <div className="flex justify-between">
          <div className="">
            <p className="text-gray-400">
              {hour < 5
                ? `Boa noite, `
                : hour < 19
                ? `Boa tarde, `
                : `Bom dia, `}
            </p>
            <h1 className="text-3xl mb-3">{username}</h1>
          </div>

          <div className="flex items-center justify-center mx-2">
            <div className="w-25 h-9 rounded-4xl px-2 pt-0.5 mr-2 flex text-center items-center text-xl bg-neutral-700">
              <img
                src="chama-orange.png"
                alt="icon orange flame"
                className="w-5 h-5 mr-1"
              />
              <p className="font-light">{0} dias</p>
            </div>
            <div>
              <img src="config.png" alt="icon settings" className="w-6 h-6 cursor-pointer" />
            </div>
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
              <p className="ml-2 text-gray-300 text-xs">Sequencia</p>
              <p className="ml-2 text-white texd-sm">{0} dias</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 border bg-green-200 rounded-md flex items-center justify-center">
              <img
                src="raio.png"
                alt="black ray icon"
                className="w-5 h-5"
              />
            </div>
            <div className="text-left">
              <p className="ml-2 text-gray-300 text-xs">Pontos</p>
              <p className="ml-2 text-white texd-xl">{0} dias</p>
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
              <p className="ml-2 text-white texd-sm">{0} dias</p>
            </div>
          </div>
        </div>
        <div className="h-10 border border-neutral-600 rounded-md flex justify-around items-center">
          <div className="w-full h-8 m-1 py-0.5 rounded-md bg-green-300 font-medium text-black">{training === "1" ? "Musculação" : "Corrida"}</div>
          <div className="w-full h-8 m-1 py-0.5 rounded-md  font-medium text-neutral-400">Conquistas</div>
        </div>
      </div>
    </>
  );
}
