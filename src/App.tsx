import { useState } from 'react';
import data from './data/all-exercises.json';
import { TopicItemType } from './types/topicItemType';
import TopicsList from './components/topics-list/TopicsList';
import { FilteredExceriseType } from './types/exerciseType';
import ExerciseList from './components/exercise-list/ExerciseList';

export default function App() {
  const topicList: TopicItemType[] = data
    .filter((item) => typeof item.domain === 'string' && item.domain.trim() !== '')
    .filter((item, index, array) => array.findIndex(t => (t.domain === item.domain)) === index)
    .map((item) => {
      return {
        name: item.domain,
        nameCapitalized: item.domain.charAt(0).toUpperCase() + item.domain.slice(1)
      }
    });

  const originalExercises: FilteredExceriseType[] = data
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

  const [exercisesFilteredByTopic, setExercisesFilteredByTopic] = useState<Array<FilteredExceriseType>>(originalExercises);
  const [isShowFilters, setIsShowFilters] = useState<boolean>(false);
  // const [showExerciseNumber, setShowExerciseNumber] = useState<number>(1);

  function filterExercisesByTopic(topic: string) {
    const filteredExercisesByTopic = [...originalExercises].filter((exercise) => exercise.domain === topic);
    setIsShowFilters(!isShowFilters);
    setExercisesFilteredByTopic(filteredExercisesByTopic);
  }

  function randomizeExercises() {
    const randomizedExercises = [...exercisesFilteredByTopic].sort(() => Math.random() - 0.5);
    setExercisesFilteredByTopic(randomizedExercises);
  }

  return (
    <>
      <header>
        <button onClick={() => setIsShowFilters(!isShowFilters)}>Filter</button>&nbsp;&nbsp;&nbsp;
        <button onClick={randomizeExercises}>Randomize</button>
      </header>

      {isShowFilters && (
        <TopicsList
          topics={topicList}
          filterExercisesByTopic={filterExercisesByTopic}
        />
      )}
      <ExerciseList exercisesFilteredByTopic={exercisesFilteredByTopic} />
      {/* <div>
        {exercisesFilteredByTopic.length > 0 && exercisesFilteredByTopic.map((exercise: FilteredExceriseType, index: number) => (
        // index === exercise.exerciseNumber - 1 &&
          <div key={exercise.exerciseNumber} className='exercise-container'>
              <Exercise {...exercise} numberToDisplay={index + 1} />
          </div>
        ))}
      </div> */}
    </>
  );
}

// numberToDisplay={index + 1} nextExercise={() => setShowExerciseNumber(showExerciseNumber + 1)}