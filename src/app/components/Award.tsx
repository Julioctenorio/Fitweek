import {
  Target,
  BicepsFlexed,
  Dumbbell,
  Bot,
  Flame,
  Star,
  Rocket,
  Crown,
  Gem,
  Sparkles,
} from "lucide-react";

export default function Awards() {
  return (
    <>
      <div className="w-full h-120  grid grid-cols-3 justify-between text-center gap-1">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-green-400 ">
            <Target />
          </div>
          <p className="text-sm p-2">Primeiro Passo</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <BicepsFlexed />
          </div>
          <p className="text-sm p-2">Consistente</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Dumbbell />
          </div>
          <p className="text-sm p-2">Dedicado</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Bot />
          </div>
          <p className="text-sm p-2">Máquina</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Flame />
          </div>
          <p className="text-sm p-2">Em Chamas</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Star />
          </div>
          <p className="text-sm p-2">Semana Perfeita</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Rocket />
          </div>
          <p className="text-sm p-2">Imparável</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Crown />
          </div>
          <p className="text-sm p-2">Lendário</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Gem />
          </div>
          <p className="text-sm p-2">Colecionador</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-neutral-700 ">
            <Sparkles />
          </div>
          <p className="text-sm p-2">Elite</p>
        </div>
      </div>
    </>
  );
}
