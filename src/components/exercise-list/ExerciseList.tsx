import { ExerciseListProps } from "../../props/ExerciseListProps";
import { FilteredExceriseType } from "../../types/exerciseType";
import Exercise from "../exercise/Exercise";

export default function ExerciseList({ exercisesFilteredByTopic }: ExerciseListProps) {
  const firstTopic = exercisesFilteredByTopic[0].domain;
  const topicName = firstTopic.charAt(0).toUpperCase() + firstTopic.slice(1)

  return (
    <main>
      <h2>{topicName}</h2>
      {exercisesFilteredByTopic.length > 0 &&
        exercisesFilteredByTopic.map((exercise: FilteredExceriseType, index: number) => (
          // index === exercise.exerciseNumber - 1 &&
          <div key={exercise.exerciseNumber} className='exercise-container'>
            <Exercise {...exercise} numberToDisplay={index + 1} />
          </div>
        ))}
    </main>
  )
}