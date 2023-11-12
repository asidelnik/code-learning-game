export type FilteredExceriseType = {
  exerciseNumber: number;
  domain: string;
  subDomain: string;
  question: string;
  answers: string[];
};

export type ExerciseType = FilteredExceriseType & {
  numberToDisplay: number;
  nextExercise: () => void;
};
