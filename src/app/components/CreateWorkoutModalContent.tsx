"use client";

import { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import Button from "./Button";
import type { Exercise, CustomWorkout } from "../types/data";
import { Modal } from "./Modal";

interface CreateWorkoutModalContentProps {
  day: number;
  dayName: string;
  existingWorkout?: CustomWorkout;
  onSave: (workout: CustomWorkout) => void;
  onClose: () => void;
}

export function CreateWorkoutModalContent({
  day,
  dayName,
  existingWorkout,
  onSave,
  onClose,
}: CreateWorkoutModalContentProps) {
  const [workoutName, setWorkoutName] = useState(
    existingWorkout?.name || `Treino ${dayName}`
  );
  const [exercises, setExercises] = useState<Exercise[]>(
    existingWorkout?.exercises || []
  );
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);

  const handleSaveExercise = (exercise: Exercise) => {
    const index = exercises.findIndex((e) => e.id === exercise.id);

    if (index === -1) {
      setExercises([...exercises, exercise]);
    } else {
      const newExercises = [...exercises];
      newExercises[index] = exercise;
      setExercises(newExercises);
    }

    setShowExerciseForm(false);
    setEditingExercise(null);
  };

  const handleRemoveExercise = (exerciseId: string | undefined) => {
    if (!exerciseId) return;
    setExercises(exercises.filter((e) => e.id !== exerciseId));
  };

  const handleSaveWorkout = () => {
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

  const totals = {
    exercises: exercises.length,
    series: exercises.reduce((sum, ex) => sum + (ex.series || 0), 0),
    reps: exercises.reduce(
      (sum, ex) => sum + (ex.series || 0) * (ex.reps || 0),
      0
    ),
  };

  return (
    <>
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

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-neutral-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">
            {totals.exercises}
          </div>
          <div className="text-gray-400 text-sm">Exercícios</div>
        </div>
        <div className="bg-neutral-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{totals.series}</div>
          <div className="text-gray-400 text-sm">Séries</div>
        </div>
        <div className="bg-neutral-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{totals.reps}</div>
          <div className="text-gray-400 text-sm">Repetições</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Exercícios</h3>
          <Button
            text="+ Adicionar Exercício"
            onClick={() => setShowExerciseForm(true)}
            width="!py-2 !px-4"
          />
        </div>

        {exercises.length > 0 ? (
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="bg-neutral-900 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white">{exercise.name}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-gray-400 text-sm">
                        {exercise.muscle}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {exercise.series} × {exercise.reps}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingExercise(exercise);
                        setShowExerciseForm(true);
                      }}
                      className="text-green-400 hover:text-green-300 text-sm"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleRemoveExercise(exercise.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-neutral-900 rounded-lg p-8 text-center">
            <p className="text-gray-400">Nenhum exercício adicionado ainda.</p>
          </div>
        )}
      </div>

      <div className="flex space-x-3 justify-end">
        <Button
          text="Cancelar"
          onClick={onClose}
          width="bg-neutral-600 text-white !py-2 !px-4"
        />
        <Button
          text="Salvar Treino"
          onClick={handleSaveWorkout}
          width="!py-2 !px-4"
          disabled={exercises.length === 0}
        />
      </div>

      {showExerciseForm && (
        <Modal
          isOpen={showExerciseForm}
          onClose={() => {
            setShowExerciseForm(false);
            setEditingExercise(null);
          }}
          title={editingExercise ? "Editar Exercício" : "Novo Exercício"}
          width="max-w-xl"
        >
          <ExerciseForm
            onSave={handleSaveExercise}
            onCancel={() => {
              setShowExerciseForm(false);
              setEditingExercise(null);
            }}
            initialExercise={editingExercise}
          />
        </Modal>
      )}
    </>
  );
}
