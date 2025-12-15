export function getWorkoutOfDay(
  sequence: string[],
  startDate: Date,
  today = new Date()
) {
  const diffDays = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return sequence[diffDays % sequence.length];
}
