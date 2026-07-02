import Navbar from "./Navbar";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChartNoAxesCombined, Zap } from "lucide-react";

export default function Header() {
  return (
    <section className="flex flex-col gap-4 m-5 flex-1">
      <Navbar />
      <section
        className="flex flex-col gap-10 mb-10 mt-26 md:mt-38"
        id="principal-page"
      >
        <h3 className="w-fit flex gap-3 text-[#DFFF00] text-xs uppercase tracking-widest border border-[#DFFF00]/30 bg-yellow-200/10 rounded-full py-1 px-4 md:py-2">
        <Zap size={16} strokeWidth={1} />
          A revolução do fitness digital
        </h3>

        <section className="flex flex-col justify-between items-center md:flex-row">
          <section className="flex flex-col gap-6 md:flex">
            <h1 className="flex flex-col text-white text-5xl font-bold md:text-7xl lg:text-[7rem] lg:leading-30">
              Ultrapasse seus{" "}
              <span className="text-[#DFFF00] md:italic">limites reais.</span>
            </h1>
            <p className="max-w-xl flex flex-col tracking-wide font-extralight md:text-lg text-[#f5ffb5]">
              Uma experiência premium de treinamento, nutrição e monitoramento
              de desempenho em uma plataforma única e de alta fidelidade,
              projetada para atletas de elite.
            </p>
            <Button
              variant={"outline"}
              size={"lg"}
              className="w-full bg-[#DFFF00] py-6 px-2 mt-3 rounded-2xl border-none hover:bg-[#DFFF00]/80 md:w-48"
            >
              Criar Conta Grátis
              <ArrowRight />
            </Button>
          </section>
          <section className="w-72 hidden text-white bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 border border-white/20 rounded-2xl p-5 m-1 gap-3 rotate-3 md:w-96 md:flex md:flex-col lg:mr-40 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <section className="flex items-center gap-2 justify-between mb-3">
              <h5 className="text-[#DFFF00] text-sm">Desempenho Diário</h5>
              <ChartNoAxesCombined size={16} />
            </section>
            <section>
              <section className="flex text-sm items-center justify-between">
                <h5 className="text-sm font-light">Calorias</h5>
                <p className="text-xs text-[#DFFF00]">850 kcal</p>
              </section>
              <section id="progreess" className="w-full bg-neutral-700 rounded-full h-2.5">
                <section className="w-[85%] bg-[#DFFF00] h-2.5 rounded-full"></section>
              </section>
            </section>
            <section>
              <section className="flex text-sm items-center justify-between">
                <h5 className="text-sm font-light">Estado de Recuperação</h5>
                <p className="text-xs text-blue-400">Otimizado</p>
              </section>
              <section id="progreess" className="w-full bg-neutral-700 rounded-full h-2.5">
                <section className="w-[85%] bg-blue-400 h-2.5 rounded-full"></section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
