"use client";

import { useState } from "react";
import type { Exercise, CustomWorkout, MuscleGroup } from "../types/data";
import Button from "./Button";

interface CreateWorkoutModalProps {
  day: number;
  dayName: string;
  existingWorkout?: CustomWorkout;
  onSave: (workout: CustomWorkout) => void;
  onClose: () => void;
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

export default function CreateWorkoutModal({
  day,
  dayName,
  existingWorkout,
  onSave,
  onClose,
}: CreateWorkoutModalProps) {
  const [workoutName, setWorkoutName] = useState(
    existingWorkout?.name || `Treino ${dayName}`
  );
  const [exercises, setExercises] = useState<Exercise[]>(
    existingWorkout?.exercises || []
  );

  const [newExercise, setNewExercise] = useState({
    name: "",
    muscle: "Peito" as MuscleGroup,
    series: 3,
    reps: 10,
  });

  const handleAddExercise = () => {
    const exercise: Exercise = {
      id: `ex-${Date.now()}`,
      name: newExercise.name,
      muscle: newExercise.muscle,
      series: newExercise.series,
      reps: newExercise.reps,
    };

    setExercises([...exercises, exercise]);

    setNewExercise({
      name: "",
      muscle: "Peito",
      series: 3,
      reps: 10,
    });
  };

  const handleRemoveExercise = (index: number) => {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  };

  const handleSaveWorkout = () => {
    if (exercises.length === 0) {
      alert("Adicione pelo menos um exercício!");
      return;
    }

    const workout: CustomWorkout = {
      id: existingWorkout?.id || Date.now().toString(),
      name: workoutName,
      day: day,
      exercises: exercises,
      createdAt: existingWorkout?.createdAt || new Date().toISOString(),
    };

    onSave(workout);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-800 rounded-2xl">
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-neutral-800 border-b border-neutral-700">
          <h2 className="text-2xl font-bold text-white">
            Treino para {dayName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Nome do Treino
            </label>
            <input
              type="text"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ex: Treino de Peito"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Adicionar Exercício
            </h3>

            <div className="space-y-4 mb-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Nome do Exercício
                </label>
                <input
                  type="text"
                  value={newExercise.name}
                  onChange={(e) =>
                    setNewExercise({ ...newExercise, name: e.target.value })
                  }
                  className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Ex: Supino com halteres"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-gray-300 text-sm font-medium mb-2"
                    htmlFor="muscle"
                  >
                    Musculo
                  </label>
                  <select
                    id="muscle"
                    value={newExercise.muscle}
                    onChange={(e) =>
                      setNewExercise({
                        ...newExercise,
                        muscle: e.target.value as MuscleGroup,
                      })
                    }
                    className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {muscleGroups.map((muscle) => (
                      <option key={muscle} value={muscle}>
                        {muscle}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-gray-300 text-sm font-medium mb-2"
                    htmlFor="series"
                  >
                    Séries
                  </label>
                  <input
                    id="series"
                    type="number"
                    min="1"
                    max="10"
                    value={newExercise.series}
                    onChange={(e) =>
                      setNewExercise({
                        ...newExercise,
                        series: parseInt(e.target.value) || 3,
                      })
                    }
                    className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-300 text-sm font-medium mb-2"
                    htmlFor="reps"
                  >
                    Repetições
                  </label>
                  <input
                    id="reps"
                    type="number"
                    min="1"
                    max="50"
                    value={newExercise.reps}
                    onChange={(e) =>
                      setNewExercise({
                        ...newExercise,
                        reps: parseInt(e.target.value) || 10,
                      })
                    }
                    className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <Button
                text="Adicionar Exercício"
                onClick={handleAddExercise}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-lg"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Exercícios Adicionados ({exercises.length})
            </h3>

            {exercises.length > 0 ? (
              <div className="space-y-3">
                {exercises.map((exercise, index) => (
                  <div
                    key={exercise.id || index}
                    className="bg-neutral-900 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-white">
                          {exercise.name}
                        </h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-gray-400 text-sm">
                            {exercise.muscle}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {exercise.series} séries × {exercise.reps} reps
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveExercise(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-neutral-900 rounded-lg p-8 text-center">
                <p className="text-gray-400">
                  Nenhum exercício adicionado ainda.
                </p>
              </div>
            )}
          </div>

          <div className="flex space-x-3">
            <Button
              text="Cancelar"
              onClick={onClose}
              className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white text-center font-bold py-3 px-2! rounded-lg"
            />
            <Button
              text="Salvar Treino"
              onClick={handleSaveWorkout}
              className="flex-1 bg-green-500 hover:bg-green-600 text-center text-black py-3 px-2! font-semibold rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
