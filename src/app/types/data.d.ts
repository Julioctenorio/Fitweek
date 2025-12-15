export type TrainingLevel = "iniciante" | "intermediario" | "avancado";
export type TrainingPlan = "fullbody" | "abc" | "personalizado";
export type MuscleGroup = "Peito" | "Costas" | "Pernas" | "Bíceps" | "Tríceps" | "Ombros" | "Abdômen" | "Panturrilha" | "Outro";

export type Exercise = {
  id?: string;
  name: string;
  muscle: MuscleGroup;
  series: number;
  reps: number;
  descanso?: number;
};

export type CustomWorkout = {
  id: string;
  name: string;
  day: number; 
  exercises: Exercise[];
  createdAt: string;
};

export type UserTrainingData = {
  nivel: TrainingLevel;
  plan: TrainingPlan;
  currentDay: number;
  lastTrainingDate?: string;
  customWorkouts: CustomWorkout[];
};