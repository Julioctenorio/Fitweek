import { Dumbbell, Utensils, SportShoe, ChartColumn } from "lucide-react";

export default function QuickInfo() {
  const quickInfo = [
    {
      label: "Treinos personalizados",
      icon: <Dumbbell size={24} strokeWidth={2} />,
      description: "Planos adaptados ao seu nível",
    },
    {
      label: "Refeições planejadas",
      icon: <Utensils size={24} strokeWidth={2} />,
      description: "Cardápios balanceados para você",
    },
    {
      label: "Registro de corridas",
      icon: <SportShoe size={24} strokeWidth={2} />,
      description: "Monitore seu desempenho",
    },
    {
      label: "Evolução contínua",
      icon: <ChartColumn size={24} strokeWidth={2} />,
      description: "Acompanhe seu progresso",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 p-2 md:p-4 max-w-8xl mx-auto md:bg-neutral-900">
        {quickInfo.map((item) => (
          <div
            key={item.label}
            className="flex flex-col text-center items-center justify-center text-white bg-white/5 backdrop-blur-md border 
          border-[#DFFF00]/20 rounded-2xl shadow-lg shadow-[#DFFF00]/5 p-6 gap-2 hover:bg-white/10 hover:border-[#DFFF00]/40 
          hover:shadow-[#DFFF00]/20 transition-all duration-300 ease-in-out cursor-default group md:bg-transparent md:border-none 
          md:shadow-none md:hover:bg-transparent md:hover:border-none md:hover:shadow-none"
          >
            <span className="text-[#DFFF00] group-hover:scale-110 transition-transform duration-300 md:size-">
              {item.icon}
            </span>
            <span className="text-xs md:text-[15px] font-medium leading-tight lg:text-xl">
              {item.label}
            </span>
            <span className="text-[10px] text-white/50 hidden sm:block lg:text-sm">
              {item.description}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center px-6 py-16 md:py-20 bg-neutral-950 text-center">
        <div className="w-12 h-1 bg-[#DFFF00]/60 rounded-full mb-2"></div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Feito para sua{" "}
          <span className="text-[#DFFF00]">melhor performance</span>
        </h3>
        <p className="text-sm md:text-base text-white/50 max-w-md leading-relaxed">
          Sua rotina merece mais. Performance em cada segundo.
        </p>
      </div>
    </div>
  );
}
