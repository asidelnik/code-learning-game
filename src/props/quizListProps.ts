import { ExerciseTopProperty } from "../types/exerciseTopProperty";

export type QuizListProps = {
  topProps: ExerciseTopProperty[];
  selectQuizHandler: (jsonProperty: string) => void;
};
