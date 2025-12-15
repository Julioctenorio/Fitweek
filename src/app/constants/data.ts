import type { Exercise } from "../types/data";

export const workoutData: Record<string, Omit<Exercise, 'id'>[]> = {
  FULLBODY: [
    { name: "Supino com halteres", muscle: "Peito", series: 3, reps: 12 },
    { name: "Remada curvada", muscle: "Costas", series: 3, reps: 10 },
    { name: "Agachamento", muscle: "Pernas", series: 3, reps: 12 },
    { name: "Rosca martelo", muscle: "Bíceps", series: 3, reps: 12 },
    { name: "Triceps testa", muscle: "Tríceps", series: 3, reps: 10 },
  ],

  A: [
    { name: "Supino com halteres", muscle: "Peito", series: 3, reps: 12 },
    { name: "Supino inclinado com haltere", muscle: "Peito", series: 3, reps: 12 },
    { name: "Supino declinado com haltere", muscle: "Peito", series: 3, reps: 12 },
    { name: "Tríceps testa", muscle: "Tríceps", series: 3, reps: 10 },
    { name: "Tríceps francês", muscle: "Tríceps", series: 3, reps: 10 },
    { name: "Tríceps corda", muscle: "Tríceps", series: 3, reps: 10 },
  ],

  B: [
    { name: "Puxada frontal", muscle: "Costas", series: 3, reps: 12 },
    { name: "Remada curvada", muscle: "Costas", series: 3, reps: 10 },
    { name: "Pullover polia alta", muscle: "Costas", series: 3, reps: 10 },
    { name: "Rosca direta", muscle: "Bíceps", series: 3, reps: 10 },
    { name: "Rosca martelo", muscle: "Bíceps", series: 3, reps: 10 },
    { name: "Unilateral com haltere", muscle: "Bíceps", series: 3, reps: 10 },
  ],

  C: [
    { name: "Agachamento", muscle: "Pernas", series: 4, reps: 10 },
    { name: "Leg Press", muscle: "Pernas", series: 4, reps: 10 },
    { name: "Cadeira extensora", muscle: "Pernas", series: 3, reps: 12 },
    { name: "Cadeira flexora", muscle: "Pernas", series: 3, reps: 12 },
    { name: "Stiff", muscle: "Pernas", series: 3, reps: 12 },
    { name: "Abdutora", muscle: "Pernas", series: 3, reps: 12 },
    { name: "Panturrilha", muscle: "Panturrilha", series: 4, reps: 15 },
  ],

  PERSONALIZADO: []
};