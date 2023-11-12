import { TopicsListProps } from '../../props/topicsListProps';
import c from './TopicsList.module.css';
export default function TopicsList({ topics, filterExercisesByTopic }: TopicsListProps) {
  return (
    <>
      <div className={c.container}>
        {topics.map((item, index) => (
          <div
            key={index}
            className={c.topic}
            onClick={() => filterExercisesByTopic(item.name)}
          >
            {item.nameCapitalized}
          </div>
        ))}
      </div>
    </>
  )
}