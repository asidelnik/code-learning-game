import c from './Exercise.module.scss';
import { ExerciseType } from '../../types/exerciseType';
import { useState } from 'react';
export default function Exercise({ domain, subDomain, question, answers }: ExerciseType) {
  const [answer, setAnswer] = useState<string>('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);

  function textChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(event.target.value);
  }

  function submitAnswer() {
    setIsAnswerSubmitted(true);
  }

  return (
    <>
      <p>{domain}&gt;{subDomain}</p>
      <h3>{question}</h3>
      {/* <label htmlFor="1">{answer.answer}</label> */}
      <textarea id="1" value={answer} onChange={textChangeHandler} rows={3}>
        {answers.length} answer/s
      </textarea>
      <button onClick={submitAnswer}>Submit Answer</button>

      {isAnswerSubmitted && (
        <>
          <h3>Answers</h3>
          <ul>
            {answers.map((answer: string, index: number) => <li key={index}>{answer}</li>)}
          </ul>
        </>
      )}
    </>
  )
}