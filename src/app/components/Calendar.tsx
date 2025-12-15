"use client";

import { useState, useMemo, useCallback } from "react";
import Awards from "./Award";
import { useSelectedOption } from "../hooks/useSelectedOption";
import { workoutData } from "../constants/data";
import { levelToPlanMap } from "../constants/trainingSequences";
import type { Exercise, CustomWorkout } from "../types/data";
import CreateWorkoutModal from "./CreateWorkoutModal";
import Button from "./Button";

export default function CalendarMonth() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const [selectedDay, setSelectedDay] = useState<number | null>(currentDay);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);
  const [customWorkouts, setCustomWorkouts] = useState<CustomWorkout[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("customWorkouts");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedOption] = useSelectedOption();

  const daysOfWeek = useMemo(
    () => ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
    []
  );

  const monthNames = useMemo(
    () => [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    []
  );

  const nivel = useMemo(() => {
    if (typeof window === "undefined") return "2";
    return localStorage.getItem("nivel") || "2";
  }, []);

  const trainingPlan = useMemo(() => {
    return levelToPlanMap[nivel] || "fullbody";
  }, [nivel]);

  const sequence = useMemo(() => {
    const sequences: Record<string, string[]> = {
      fullbody: [
        "FULLBODY",
        "FULLBODY",
        "FULLBODY",
        "rest",
        "FULLBODY",
        "FULLBODY",
        "rest",
      ],
      abc: ["A", "B", "C", "rest", "A", "B", "rest"],
      personalizado: [
        "PERSONALIZADO",
        "PERSONALIZADO",
        "PERSONALIZADO",
        "PERSONALIZADO",
        "PERSONALIZADO",
        "PERSONALIZADO",
        "PERSONALIZADO",
      ],
    };
    return sequences[trainingPlan] || sequences.fullbody;
  }, [trainingPlan]);

  const calendarData = useMemo(() => {
    if (selectedOption !== 1) return { daysArray: [], dayToWorkoutMap: {} };

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const dayToWorkoutMap: Record<number, string> = {};
    const daysArray: (number | null)[] = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      daysArray.push(null);
    }

    for (let day = currentDay; day <= daysInMonth; day++) {
      daysArray.push(day);

      const dateObj = new Date(currentYear, currentMonth, day);
      const dayOfWeek = dateObj.getDay();

      dayToWorkoutMap[day] = sequence[dayOfWeek];
    }

    return { daysArray, dayToWorkoutMap };
  }, [selectedOption, currentDay, currentMonth, currentYear, sequence]);

  const getExercisesForDay = useCallback(
    (day: number): Exercise[] => {
      const workoutKey = calendarData.dayToWorkoutMap[day];

      if (!workoutKey || workoutKey === "rest") {
        return [];
      }

      if (workoutKey === "PERSONALIZADO") {
        const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
        const customWorkout = customWorkouts.find(w => w.day === dayOfWeek);
        if (customWorkout && customWorkout.exercises.length > 0) {
          return customWorkout.exercises;
        }
        return [];
      }

      return workoutData[workoutKey] || [];
    },
    [calendarData.dayToWorkoutMap, customWorkouts, currentYear, currentMonth]
  );

  const selectedDayExercises = useMemo(() => {
    if (!selectedDay) return [];
    return getExercisesForDay(selectedDay);
  }, [selectedDay, getExercisesForDay]);

  const selectedWorkoutName = useMemo(() => {
    if (!selectedDay) return "";
    const workoutKey = calendarData.dayToWorkoutMap[selectedDay];

    if (!workoutKey) return "Dia indisponível";
    if (workoutKey === "rest") return "Descanso";
    if (workoutKey === "FULLBODY") return "Treino FullBody";
    if (workoutKey === "PERSONALIZADO") {
      const dayOfWeek = new Date(currentYear, currentMonth, selectedDay).getDay();
      const customWorkout = customWorkouts.find(w => w.day === dayOfWeek);
      return customWorkout ? customWorkout.name : "Treino Personalizado";
    }
    return `Treino ${workoutKey}`;
  }, [selectedDay, calendarData.dayToWorkoutMap, customWorkouts, currentYear, currentMonth]);

  const formatDate = useCallback(
    (day: number) => {
      return `${day} de ${monthNames[currentMonth]}`;
    },
    [currentMonth, monthNames]
  );

  const getCustomWorkoutForSelectedDay = (): CustomWorkout | undefined => {
    if (!selectedDay) return undefined;
    const dayOfWeek = new Date(currentYear, currentMonth, selectedDay).getDay();
    return customWorkouts.find(w => w.day === dayOfWeek);
  };

  const customWorkoutForSelectedDay = getCustomWorkoutForSelectedDay();

  return (
    <>
      <div className="mx-auto my-8 bg-neutral-900 rounded-2xl p-2 pt-4 shadow-xl sm:w-2xl md:w-3xl">
        {selectedOption === 1 && (
          <>
            <div className="flex gap-1 overflow-auto container-snap mb-6 mx-auto">
              {calendarData.daysArray.map((day, index) => {
                const isToday = day === currentDay;
                const isEmpty = day === null;
                const isSelected = day === selectedDay;
                const dayOfWeekIndex = index % 7;
                const dayOfWeek = daysOfWeek[dayOfWeekIndex];

                const workoutKey = day ? calendarData.dayToWorkoutMap[day] : null;
                const isRestDay = workoutKey === "rest";

                return (
                  <button
                    key={index}
                    onClick={() => !isEmpty && day && setSelectedDay(day)}
                    className={`
                      w-5 h-14 px-5 rounded-lg flex flex-col items-center justify-center gap-0.5 
                      text-lg font-semibold transition-all shrink-0 snap-start
                      cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400
                      ${
                        isEmpty
                          ? "invisible cursor-default"
                          : isSelected
                          ? "bg-green-600 my-1 text-black scale-105 shadow-lg ring-2 ring-green-400"
                          : isToday
                          ? "bg-green-500 text-black hover:bg-green-400"
                          : isRestDay
                          ? "bg-black border border-neutral-800 text-white hover:bg-black-600"
                          : "bg-neutral-800 text-white hover:bg-neutral-700"
                      }
                    `}
                  >
                    {!isEmpty && (
                      <>
                        <span className="text-xs font-normal opacity-70">
                          {dayOfWeek}
                        </span>
                        <span className="text-base font-bold mt-0.5">{day}</span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedDay && (
              <div className="bg-neutral-800 rounded-xl p-3 pt-5">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {formatDate(selectedDay)}
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedWorkoutName === "Descanso"
                          ? "bg-black text-white"
                          : "bg-green-400 text-black"
                      }`}
                    >
                      {selectedWorkoutName}
                    </span>
                    {selectedDay === currentDay && (
                      <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-medium">
                        Hoje
                      </span>
                    )}
                  </div>
                </div>

                {selectedWorkoutName === "Descanso" ? (
                  <div className="bg-neutral-900 rounded-lg p-6 text-center">
                    <div className="text-5xl mb-4">😴</div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      Dia de Descanso
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Aproveite para se recuperar! A recuperação é essencial para
                      o crescimento muscular.
                    </p>
                    <p className="text-gray-500 text-sm">
                      Dica: Mantenha-se hidratado e durma bem.
                    </p>
                  </div>
                ) : selectedDayExercises.length > 0 ? (
                  <>
                    <h4 className="text-xl font-bold text-white mb-4">
                      Exercícios
                    </h4>
                    <div className="grid gap-3 mb-6">
                      {selectedDayExercises.map(
                        (exercise: Exercise, index: number) => (
                          <div
                            key={index}
                            className="bg-neutral-900 rounded-lg p-4 hover:bg-neutral-700 transition-colors"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-bold text-white text-lg">
                                  {exercise.name}
                                </h5>
                                <p className="text-gray-400 text-sm">
                                  {exercise.muscle}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-bold">
                                  {exercise.series} × {exercise.reps}
                                </div>
                                <div className="text-gray-500 text-sm">
                                  {exercise.series * exercise.reps} repetições
                                  totais
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </>
                ) : selectedWorkoutName === "Treino Personalizado" || selectedWorkoutName.includes("Personalizado") ? (
                  <div className="bg-neutral-900 rounded-lg p-6 text-center">
                    {nivel === "3" ? (
                      <>
                        <h4 className="text-xl font-bold text-white mb-3">
                          {selectedWorkoutName}
                        </h4>
                        <p className="text-gray-300 mb-4">
                          Como usuário avançado, você pode criar seu próprio plano de
                          treino.
                        </p>
                        
                        <Button 
                          onClick={() => setShowWorkoutModal(true)}
                          className="bg-green-400 hover:bg-green-500 text-black  font-bold py-3 px-6 rounded-lg transition-colors mb-4"
                          text={customWorkoutForSelectedDay ? "Editar Meu Treino" : "Criar Meu Treino"}/>
                        
                        {customWorkoutForSelectedDay && customWorkoutForSelectedDay.exercises.length > 0 ? (
                          <div className="mt-6">
                            <h5 className="text-lg font-bold text-white mb-3">Seu Treino:</h5>
                            <div className="space-y-3">
                              {customWorkoutForSelectedDay.exercises.map((exercise, index) => (
                                <div key={index} className="bg-neutral-800 rounded-lg p-3">
                                  <div className="flex justify-between">
                                    <div>
                                      <p className="font-bold text-white">{exercise.name}</p>
                                      <p className="text-gray-400 text-sm">{exercise.muscle}</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-white font-bold">
                                        {exercise.series} × {exercise.reps}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm">
                            Você ainda não criou um treino personalizado para {daysOfWeek[new Date(currentYear, currentMonth, selectedDay!).getDay()]}.
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="text-5xl mb-4">💪</div>
                        <h4 className="text-xl font-bold text-white mb-3">
                          Treino Personalizado
                        </h4>
                        <p className="text-gray-300 mb-4">
                          Esta funcionalidade está disponível apenas para usuários avançados.
                        </p>
                        <p className="text-gray-500 text-sm">
                          Atualize seu nível nas configurações para acessar treinos personalizados.
                        </p>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="bg-neutral-900 rounded-lg p-6 text-center">
                    <p className="text-gray-300">
                      Nenhum treino disponível para este dia.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 flex items-center justify-center text-xs text-gray-400 gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                <span>Hoje</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                <span>Selecionado</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-black mr-1"></div>
                <span>Descanso</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-neutral-800 mr-1"></div>
                <span>Treino</span>
              </div>
            </div>
          </>
        )}

        {selectedOption === 2 && (
          <div className="min-h-[300px] flex items-center justify-center">
            <Awards />
          </div>
        )}
      </div>

      {showWorkoutModal && selectedDay && (
        <CreateWorkoutModal
          day={new Date(currentYear, currentMonth, selectedDay).getDay()}
          dayName={daysOfWeek[new Date(currentYear, currentMonth, selectedDay).getDay()]}
          existingWorkout={customWorkoutForSelectedDay}
          onSave={(workout: CustomWorkout) => {
            const updatedWorkouts = customWorkouts.filter(w => 
              w.day !== new Date(currentYear, currentMonth, selectedDay).getDay()
            );
            updatedWorkouts.push(workout);
            setCustomWorkouts(updatedWorkouts);
            localStorage.setItem("customWorkouts", JSON.stringify(updatedWorkouts));
            setShowWorkoutModal(false);
          }}
          onClose={() => setShowWorkoutModal(false)}
        />
      )}
    </>
  );
}