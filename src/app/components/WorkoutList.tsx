import { workoutData } from "../constants/data";

type Props = {
  workoutKey: string;
};

export default function WorkoutList({ workoutKey }: Props) {
  if (workoutKey === "rest") {
    return <p className="mt-4 text-gray-400">Dia de descanso</p>;
  }

  const exercises = workoutData[workoutKey];

  return (
    <div className="mt-4 space-y-3">
      {exercises.map((ex) => (
        <div
          key={ex.name}
          className="bg-neutral-900 rounded-xl p-3"
        >
          <p className="font-medium">{ex.name}</p>
          <p className="text-xs text-gray-400">{ex.muscle}</p>
          <p className="text-xs">
            {ex.series} Séries · {ex.reps} Reps
          </p>
        </div>
      ))}
    </div>
  );
}
