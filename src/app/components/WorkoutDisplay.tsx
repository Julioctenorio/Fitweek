"use client";

import { useMemo } from "react";

interface WorkoutDisplayProps {
  nivel: string; 
}

export default function WorkoutDisplay({ nivel }: WorkoutDisplayProps) {
  const workoutInfo = useMemo(() => {
    switch(nivel) {
      case "1": 
        return {
          title: "Treino FullBody para Iniciantes",
          description: "Treino completo para todo o corpo, ideal para quem está começando.",
          days: "Segunda, Quarta e Sexta",
          focus: "Desenvolver base muscular e técnica"
        };
      case "2": 
        return {
          title: "Treino ABC Split",
          description: "Divisão por grupos musculares para melhor desenvolvimento.",
          days: "Segunda: Peito/Tríceps | Terça: Costas/Bíceps | Quinta: Pernas",
          focus: "Hipertrofia e definição muscular"
        };
      case "3":
        return {
          title: "Treino Personalizado",
          description: "Plano personalizado baseado nas suas necessidades específicas.",
          days: "A definir conforme seu plano",
          focus: "Maximizar resultados específicos"
        };
      default:
        return {
          title: "Treino",
          description: "Selecione seu nível nas configurações.",
          days: "-",
          focus: "-"
        };
    }
  }, [nivel]);

  return (
    <div className="w-full bg-neutral-800 rounded-xl p-6 mt-4">
      <h3 className="text-2xl font-bold text-green-400 mb-4">
        {workoutInfo.title}
      </h3>
      
      <div className="space-y-4">
        <div className="bg-neutral-900 rounded-lg p-4">
          <h4 className="font-bold text-white mb-2">Descrição</h4>
          <p className="text-gray-300">{workoutInfo.description}</p>
        </div>
        
        <div className="bg-neutral-900 rounded-lg p-4">
          <h4 className="font-bold text-white mb-2">Dias de Treino</h4>
          <p className="text-gray-300">{workoutInfo.days}</p>
        </div>
        
        <div className="bg-neutral-900 rounded-lg p-4">
          <h4 className="font-bold text-white mb-2">Foco Principal</h4>
          <p className="text-gray-300">{workoutInfo.focus}</p>
        </div>
      </div>
    </div>
  );
}