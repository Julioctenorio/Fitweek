// components/ExerciseForm.tsx
"use client";

import { useState } from "react";
import type { Exercise, MuscleGroup } from "../types/data";

interface ExerciseFormProps {
  onSave: (exercise: Exercise) => void;
  onCancel: () => void;
  initialExercise?: Exercise | null;
}

const muscleGroups: MuscleGroup[] = [
  "Peito",
  "Costas",
  "Pernas",
  "Bíceps",
  "Tríceps",
  "Ombros",
  "Abdômen",
  "Panturrilha",
  "Outro",
];

export default function ExerciseForm({
  onSave,
  onCancel,
  initialExercise,
}: ExerciseFormProps) {
  const [exercise, setExercise] = useState<Partial<Exercise>>(
    initialExercise || {
      name: "",
      muscle: "Peito",
      series: 3,
      reps: 10,
      descanso: 60,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !exercise.name ||
      !exercise.muscle ||
      !exercise.series ||
      !exercise.reps
    ) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const newExercise: Exercise = {
      id: initialExercise?.id || `custom-${Date.now()}`,
      name: exercise.name,
      muscle: exercise.muscle as MuscleGroup,
      series: exercise.series,
      reps: exercise.reps,
      descanso: exercise.descanso || 60,
    };

    onSave(newExercise);
  };

  return (
    <div className="bg-neutral-900 rounded-2xl p-6 mt-6 border border-neutral-700">
      <h3 className="text-xl font-bold text-white mb-5 text-center">
        {initialExercise ? "Editar Exercício" : "Novo Exercício"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-gray-300 text-sm font-medium mb-2"
            htmlFor="exercise-name"
          >
            Nome do Exercício *
          </label>
          <input
            type="text"
            id="exercise-name"
            value={exercise.name || ""}
            onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
            className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ex: Supino com halteres"
            required
          />
        </div>

        <div>
          <label
            className="block text-gray-300 text-sm font-medium mb-2"
            htmlFor="exercise-muscle"
          >
            Grupo Muscular *
          </label>
          <select
            id="exercise-muscle"
            value={exercise.muscle || "Peito"}
            onChange={(e) =>
              setExercise({
                ...exercise,
                muscle: e.target.value as MuscleGroup,
              })
            }
            className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            {muscleGroups.map((muscle) => (
              <option key={muscle} value={muscle}>
                {muscle}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="exercise-series"
            >
              Séries *
            </label>
            <input
              id="exercise-series"
              type="number"
              min="1"
              max="10"
              value={exercise.series || 3}
              onChange={(e) =>
                setExercise({
                  ...exercise,
                  series: parseInt(e.target.value) || 3,
                })
              }
              className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="exercise-reps"
            >
              Repetições *
            </label>
            <input
              id="exercise-reps"
              type="number"
              min="1"
              max="50"
              value={exercise.reps || 10}
              onChange={(e) =>
                setExercise({
                  ...exercise,
                  reps: parseInt(e.target.value) || 10,
                })
              }
              className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex-1 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-lg transition-colors"
          >
            {initialExercise ? "Salvar" : "Adicionar"}
          </button>
        </div>
      </form>
    </div>
  );
}
