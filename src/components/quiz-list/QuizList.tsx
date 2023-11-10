import { QuizListProps } from '../../props/quizListProps';
import c from './QuizList.module.css';
export default function QuizList({ topProps, filterExercisesByTopic }: QuizListProps) {
  return (
    <>
      <div className={c.container}>
        {topProps.map((item, index) => (
          <div key={index} className={c.quiz} onClick={() => filterExercisesByTopic(item.jsonProperty)}>{item.capitalizedProperty}</div>
        ))}
      </div>
    </>
  )
}