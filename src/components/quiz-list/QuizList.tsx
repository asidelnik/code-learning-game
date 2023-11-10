import { QuizListProps } from '../../props/quizListProps';
import c from './QuizList.module.css';
export default function QuizList({ topProps, selectQuizHandler }: QuizListProps) {
  return (
    <>
      <div className={c.container}>
        {topProps.map((item, index) => (
          <div key={index} className={c.quiz} onClick={() => selectQuizHandler(item.jsonProperty)}>{item.capitalizedProperty}</div>
        ))}
      </div>
    </>
  )
}