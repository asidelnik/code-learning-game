import c from './TopicsList.module.css';
import { TopicsListProps } from '../../props/topicsListProps';

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