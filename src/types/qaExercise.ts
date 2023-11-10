export type QAExercise = {
  id: number;
  question: string;
  answer: string;
};

export type QAExerciseRes = QAExercise & {
  response: string | null;
};
