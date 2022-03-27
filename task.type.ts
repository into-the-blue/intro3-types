import { IIntroImage } from './image.type';
import { IDataMetadata } from './util.type';
interface ITag extends IDataMetadata {
  id: string;
  backgroundColor: string;
  title: string;
  type: '-1' | '0' | '1';
}
export interface TFeedback extends IDataMetadata {
  id: string;
  content: string;
  locked: boolean;
  targetId: string;
  tagId: string;
  tag: ITag;
}
export interface ITaskItemSlot extends IDataMetadata {
  taskItemId: string;
  feedbacks?: TFeedback[];
  content: string;
  finished: boolean;
  delayedTimes: number;
  delayedOn: string[];
}
export interface ITaskItem extends IDataMetadata {
  taskId: string;
  title: string;
  content: string;
  slots?: ITaskItemSlot[];
  backgroundColor: string;
  feedbacks?: TFeedback[];
}

export interface ITask extends IDataMetadata {
  title: string;
  image: IIntroImage;
  items?: ITaskItem[];
  feedbacks?: TFeedback[];
}
