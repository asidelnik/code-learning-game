import { Options } from "./option";

export type MultipleChoiceExercise = {
  id: number;
  question: string;
  options: Options[];
};
