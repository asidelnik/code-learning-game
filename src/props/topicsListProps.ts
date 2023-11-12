import { TopicItemType } from '../types/topicItemType';

export type TopicsListProps = {
  topics: TopicItemType[];
  filterExercisesByTopic: (topic: string) => void;
};
