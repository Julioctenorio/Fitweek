"use client";

import { TrainingPlan } from "../types/data";

type Props = {
  value: TrainingPlan;
  onChange: (value: TrainingPlan) => void;
};

export default function TrainingSelect({ value, onChange }: Props) {
  return (
    <div className="w-full max-w-xs">
      <label htmlFor="workout-plan" className="block text-sm mb-1">
        Programa de Treino
      </label>

      <select
        id="workout-plan"
        aria-label="Tipo de treino"
        value={value}
        onChange={(e) => onChange(e.target.value as TrainingPlan)}
        className="w-full border rounded-lg p-2"
      >
        <option value="ppl">Push Pull Legs</option>
        <option value="upperlower">Upper Lower</option>
        <option value="custom">Personalizado</option>
      </select>
    </div>
  );
}
