import { useState } from 'react';
import originalExercises from './data-3/all-exercises.json';
import Exercise from './components/exercise/Exercise';
import { TopicItemType } from './types/topicItemType';
import TopicsList from './components/topics-list/TopicsList';
import { FilteredExceriseType } from './types/exerciseType';

export default function App() {
  const topicList: TopicItemType[] = originalExercises
    .filter((item) => typeof item.domain === 'string' && item.domain.trim() !== '')
    .filter((item, index, array) => array.findIndex(t => (t.domain === item.domain)) === index)
    .map((item) => {
      return {
        name: item.domain,
        nameCapitalized: item.domain.charAt(0).toUpperCase() + item.domain.slice(1)
      }
    });

  // type xxx = { domain: string; subDomain: string; question: string; answers: string; } | { domain: string; subDomain?: undefined; question?: undefined; answers?: undefined; };
  const exercises: FilteredExceriseType[] = originalExercises
    .filter((item) => typeof item.domain === 'string' && item.domain.trim() !== '' && typeof item.question === 'string' && item.question.trim() !== '')
    .map((item, index: number) => {
      return {
        exerciseNumber: index + 1,
        domain: item.domain,
        subDomain: item.subDomain ? item.subDomain : '',
        question: item.question ? item.question : '',
        answers: item.question ? item.answers.split(",") : []
      }
    })

  const [filteredExercises, setFilteredExercises] = useState<Array<FilteredExceriseType>>(exercises);
  const [isShowFilters, setIsShowFilters] = useState<boolean>(false);
  const [showExerciseNumber, setShowExerciseNumber] = useState<number>(1);

  function filterExercisesByTopic(topic: string) {
    const filteredExercises = exercises
      .filter((exercise) => exercise.domain === topic)
      .map((exercise, index) => {
        return {
          ...exercise,
          excersizeNumber: index + 1
        }
      });
    setIsShowFilters(!isShowFilters);
    setFilteredExercises(filteredExercises);
  }

  function randomizeExercises() {
    const randomizedExercises = [...filteredExercises].sort(() => Math.random() - 0.5);
    setFilteredExercises(randomizedExercises);
  }

  return (
    <>
      <header>
        <button onClick={() => setIsShowFilters(!isShowFilters)}>Filter</button>&nbsp;&nbsp;
        <button onClick={randomizeExercises}>Randomize</button>
      </header>
      {isShowFilters && (
        <TopicsList
          topics={topicList}
          filterExercisesByTopic={filterExercisesByTopic}
        />
      )}
      {filteredExercises.length > 0 && filteredExercises.map((exercise: FilteredExceriseType, index: number) => (
        index === exercise.exerciseNumber - 1 &&
        <div key={exercise.exerciseNumber} className='exercise-container'>
          <Exercise {...exercise} numberToDisplay={index + 1} nextExercise={() => setShowExerciseNumber(showExerciseNumber + 1)} />
        </div>
      ))}
    </>
  );
}


//   typeof item === 'object' &&
//   item !== null &&