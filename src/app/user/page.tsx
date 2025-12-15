"use client";

import Principal from "../components/Principal";
import Button from "../components/Button";
import InputText from "../components/InputText";
import Card from "../components/Card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PageUser() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedTraining, setSelectedTraining] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const calcularIMC = () => {
    setIMC(Number((Number(weight) / (Number(height) / 100) ** 2).toFixed(1)));
  };

  return (
    <div className="w-full bg-neutral-950 flex text-center">
      {step === 1 ? (
        <div className="w-full h-dvh flex flex-col bg-[#151515] mx-auto items-center text-center justify-center gap-5 lg:gap-5">
          <Principal />
          <p className="mx-auto mb-6 text-gray-400">Vamos começar</p>
          <form
            className="flex flex-col items-center"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              if (!form.checkValidity()) {
                form.reportValidity();
                return;
              }
              handleNext();
            }}
          >
            <InputText
              id="username"
              type="text"
              text={"Nome"}
              value={username}
              onChange={(e) => {
                const value = e.target.value;
                setUsername(value);
                localStorage.setItem("username", value);
              }}
              required
            />
            <div className="mt-4">
              <Button text={"Começar"} width="w-80" type="submit" />
            </div>
          </form>
        </div>
      ) : step === 2 ? (
        <div className="w-full h-dvh flex flex-col bg-[#151515] mx-auto items-center text-center justify-center gap-5 lg:gap-5">
          <div className="flex justify-around">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left-icon text-neutral-500 lucide-arrow-left mr-2 hover:text-green-200"
                onClick={() => setStep(step - 1)}
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </div>
            <div>
              <h1 className="uppercase text-2xl ml-12 mr-18 text-white">Sua medidas</h1>
            </div>
            <div content="w-1 mx-20"></div>
          </div>
          <p className="mx-auto mb-8 text-gray-400">Calcular IMC</p>

          <form
            className="flex flex-col items-center"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              if (!form.checkValidity()) {
                form.reportValidity();
                return;
              }

              if (imc === 0) {
                calcularIMC();
              } else {
                handleNext();
              }
            }}
          >
            <InputText
              id="weight"
              type="number"
              text={"Peso (kg)"}
              value={weight}
              onChange={(e) => {
                const value = e.target.value;
                setWeight(value);
                localStorage.setItem("weight", value);
                console.log(value);
              }}
              required
            />

            <InputText
              id="height"
              type="number"
              text={"Altura (cm)"}
              value={height}
              onChange={(e) => {
                const value = e.target.value;
                setHeight(value);
                localStorage.setItem("height", value);
              }}
              required
            />

            <div
              className={
                imc === 0
                  ? "hidden"
                  : "flex w-80 h-18 py-2 px-3 rounded-lg border border-gray-500 bg-transparent items-center justify-between"
              }
            >
              <div className="text-gray-300">Seu IMC</div>
              <div>
                <div className="text-3xl">{imc}</div>
                <div className="text-xs">{imcClassification(imc)}</div>
              </div>
            </div>

            <div className="mt-4">
              <Button
                text={imc === 0 ? "Calcular" : "Continuar"}
                width="w-80"
                type="submit"
              />
            </div>
          </form>
        </div>
      ) : step === 3 ? (
        <div className="w-full h-dvh flex flex-col bg-[#151515] mx-auto items-center text-center justify-center gap-3">
          <div className="flex justify-around">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left-icon text-neutral-500 lucide-arrow-left mr-2 hover:text-green-200"
                onClick={() => setStep(step - 1)}
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </div>
            <div>
              <h1 className="uppercase text-2xl ml-12 mr-26 text-white">Seu nível</h1>
            </div>
            <div content="w-1 mx-20"></div>
          </div>
          <p className="mx-auto mb-8 text-gray-400">
            Qual experiência com treinos
          </p>
          <Card
            variant="small"
            title="Iniciante"
            subtitle="Menos de 6 meses"
            style="text-white"
            extra="Treino Full Body"
            icon="atuacao.png"
            selected={selectedId === 1}
            onSelect={() => {
              setSelectedId(1);
              setError(null);
              localStorage.setItem("nivel", "1")
            }}
          />
          <Card
            variant="small"
            title="Intermediário"
            subtitle="6 meses a 2 anos de treino"
            style="text-white"
            extra="Treino ABC / ABCD"
            icon="atuacao.png"
            selected={selectedId === 2}
            onSelect={() => {
              setSelectedId(2);
              setError(null);

              localStorage.setItem("nivel", "2")
            }}
            />
          <Card
            variant="small"
            title="Avançado"
            subtitle="Mais de 2 anos de treino"
            style="text-white"
            extra="Personalizado"
            icon="atuacao.png"
            selected={selectedId === 3}
            onSelect={() => {
              setSelectedId(3);
              setError(null);
              localStorage.setItem("nivel", "3")
            }}
          />

          {error && <p className="text-red-400 mt-4">{error}</p>}

          <div className="">
            <Button
              text={"Continuar"}
              width="w-80"
              onClick={() => {
                if (selectedId == null) {
                  setError("Escolha um nível antes de continuar");
                  return;
                }
                setError(null);
                handleNext();
              }}
            />
          </div>
        </div>
      ) : step === 4 ? (
        <div className="w-full h-dvh flex flex-col bg-[#151515] mx-auto items-center text-center justify-center gap-3">
          <div className="flex justify-around">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left-icon text-neutral-500 lucide-arrow-left mr-2 hover:text-green-200"
                onClick={() => setStep(step - 1)}
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </div>
            <div>
              <h1 className="uppercase text-2xl ml-10 mr-14 text-white">Tipo de Treino</h1>
            </div>
            <div content="w-1 mx-20"></div>
          </div>
          <p className="mx-auto mb-8 text-gray-400">
            O que você quer participar
          </p>
          <div className="flex flex-col gap-3">
            <Card
              variant="small"
              title="Musculação"
              subtitle="Treino de força e hipertrofia no ginásio"
              icon="atuacao.png"
              selected={selectedTraining === 1}
              style="cursor-pointer text-white"
              onSelect={() => {
                setSelectedTraining(1);
                setError(null);
                localStorage.setItem("training", "1")
              }}
              />
            <Card
              variant="small"
              title="Corrida"
              subtitle="Treino de corrida e cardio"
              icon="atuacao.png"
              selected={selectedTraining === 2}
              style="cursor-pointer text-white"
              onSelect={() => {
                setSelectedTraining(2);
                setError(null);
                localStorage.setItem("training", "2")
              }}
            />

            {error && <p className="text-red-400 mt-4">{error}</p>}

            <div className="">
              <Button
                text={"Continuar"}
                width="w-80"
                onClick={() => {
                  if (selectedId == null) {
                    setError("Escolha um nível antes de continuar");
                    return;
                  }
                  setError(null);
                  router.push("/app");
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function imcClassification(imc: number) {
  if (imc < 18.5) {
    return <p className="text-orange-300">Abaixo do peso</p>;
  } else if (imc < 25) {
    return <p className="text-green-300">Peso Normal</p>;
  } else if (imc < 30) {
    return <p className="text-orange-400">Sobrepeso</p>;
  } else {
    return <p className="text-red-400">Obesidade</p>;
  }
}
