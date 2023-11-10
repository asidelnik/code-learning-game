export interface Cell {
  requiredLetter: string | null;
  chosenLetter: string | null;
  selected: boolean;
  correct: boolean;
  firstLetterOfExerciseId: number | null;
  nextCellNumber: number | null;
}
