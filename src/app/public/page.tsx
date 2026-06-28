import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-glow bg-local mt-0 pt-1 md:bg-hero md:bg-contain md:bg-top md:bg-no-repeat">
      <header className="mb-18 ">
        <Header />
      </header>
      <section className="flex flex-col gap-4 m-5">
        <section className="flex flex-col gap-10 mb-10" id="principal-page">
          <h3 className="w-fit text-[#DFFF00] text-xs uppercase border border-[#DFFF00]/30 bg-yellow-200/10 rounded-full p-2">
            ✨ A revolução do fitness digital
          </h3>

          <section className="flex flex-col gap-6 md:flex">
            <h1 className="flex flex-col text-white text-5xl font-bold md:text-7xl">
              Ultrapasse seus{" "}
              <span className="text-[#DFFF00] md:italic">limites reais.</span>
            </h1>
            <p className="max-w-xl flex flex-col text-gray-300 text-lg">
              Uma experiência premium de treino, nutrição e acompanhamento de
              performance em uma única plataforma
            </p>
          </section>

          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full bg-[#DFFF00] py-6 px-2 mt-5 rounded-2xl border-none hover:bg-[#DFFF00]/80 md:w-48"
          >
            Criar Conta Grátis
            <ArrowRight />
          </Button>
        </section>
        <section id="secondary-page" className="flex flex-col gap-10"></section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
