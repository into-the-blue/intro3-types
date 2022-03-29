import { IntroImage } from './image.type';
import { DataMetadata } from './util.type';
interface Tag extends DataMetadata {
  id: string;
  backgroundColor: string;
  title: string;
  type: '-1' | '0' | '1';
}
export interface Feedback extends DataMetadata {
  id: string;
  content: string;
  locked: boolean;
  targetId: string;
  tagId: string;
  tag: Tag;
}
export interface TaskItemSlot extends DataMetadata {
  taskItemId: string;
  feedbacks?: Feedback[];
  content: string;
  finished: boolean;
  delayedTimes: number;
  delayedOn: string[];
}
export interface TaskItem extends DataMetadata {
  taskId: string;
  title: string;
  content: string;
  slots?: TaskItemSlot[];
  backgroundColor: string;
  feedbacks?: Feedback[];
}

export interface Task extends DataMetadata {
  title: string;
  image: IntroImage;
  items?: TaskItem[];
  feedbacks?: Feedback[];
}
