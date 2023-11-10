import { ExerciseTopProperty } from "../types/exerciseTopProperty";

export type QuizListProps = {
  topProps: ExerciseTopProperty[];
  filterExercisesByTopic: (topic: string) => void;
};
