import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import QuickInfo from "@/components/layout/QuickInfo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] bg-glow pt-1 md:bg-hero md:bg-contain md:bg-top md:bg-no-repeat md:pt-0">
      <Header />
      
      <main className="flex-1 bg-neutral-950 text-white">
        <QuickInfo />

        {/* Conteúdo principal da página */}
        {/* Seus cards, seções, etc. */}
      </main>
      
      <Footer />
    </div>
  );
}