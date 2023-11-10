import { useState } from 'react';
import allExercises from './data-3/all-exercises.json'
// import { ExerciseTopProperty } from './types/exerciseTopProperty';
// import { QAExercise } from './types/qaExercise';
// import QuizList from './components/quiz-list/QuizList';
// import ExerciseGame from './components/exercise-game/ExerciseGame';
import Exercise from './components/exercise/Exercise';
import { TopicItemType } from './types/topicItemType';
import QuizList from './components/quiz-list/QuizList';
import { ExerciseType } from './types/exerciseType';

export default function App() {
  const [filteredExercises, setFilteredExercises] = useState<Array<ExerciseType>>([]);
  const topics: Array<TopicItemType> = allExercises.map((item) => { name: item.domain; nameCapitalized: item.domain.charAt(0).toUpperCase() + item.domain.slice(1); });
  const exercises: ExerciseType[] = allExercises.map((item) => {
    return {
      domain: item.domain,
      subDomain: item.subDomain,
      question: item.question,
      answers: item.answers ? item.answers.split(",") : []
    }
  });

  function filterExercisesByTopic(topic: string) {
    const filteredExercises = exercises.filter((exercise) => exercise.domain === topic);
    setFilteredExercises(filteredExercises);
  }

  return (
    <>
      <QuizList
        topProps={topics}
        filterExercisesByTopic={filterExercisesByTopic}
      />
      <Exercise />
    </>
  );
}

{/* Render the selected quiz */ }
{/* {selectedQuiz.length > 0 && <ExerciseGame data={selectedQuiz} />} */ }
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