import { useState } from 'react';
import allExercises from './data/all-exercises.json'
import { ExerciseTopProperty } from './types/exerciseTopProperty';
import { QAExercise } from './types/qaExercise';
import QuizList from './components/quiz-list/QuizList';
import ExerciseGame from './components/exercise-game/ExerciseGame';



interface AllExercises {
  [key: string]: QAExercise[];
}

export default function App() {
  const [selectedQuiz, setSelectedQuiz] = useState<QAExercise[]>([]);
  const exercises: AllExercises = allExercises;
  const topProps: ExerciseTopProperty[] = Object.keys(allExercises).map((item) => {
    return {
      jsonProperty: item,
      capitalizedProperty: item.charAt(0).toUpperCase() + item.slice(1)
    }
  });

  function selectQuizHandler(jsonProperty: string) {
    setSelectedQuiz(exercises[jsonProperty]);
  }

  return (
    <>
      <QuizList
        topProps={topProps}
        selectQuizHandler={selectQuizHandler}
      />
      {/* Render the selected quiz */}
      {selectedQuiz.length > 0 && <ExerciseGame data={selectedQuiz} />}
      {/* {selectedQuiz.length > 0 && (
        <>
          {selectedQuiz.map((exercise, index) => (
            <div key={index}>
              <h3>{exercise.question}</h3>
              <p>{exercise.answer}</p>
            </div>
          ))}
        </>
      )} */}
    </>
  );
}