interface ITag extends IMetadata {
  id: string;
  backgroundColor: string;
  title: string;
  type: '-1' | '0' | '1';
}
interface IMetadata {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TFeedback extends IMetadata {
  id: string;
  content: string;
  locked: boolean;
  targetId: string;
  tagId: string;
  tag: ITag;
}
export interface ITaskItemSlot extends IMetadata {
  taskItemId: string;
  feedbacks?: TFeedback[];
  content: string;
  finished: boolean;
  delayedTimes: number;
  delayedOn: string[];
}
export interface ITaskItem extends IMetadata {
  taskId: string;
  title: string;
  content: string;
  slots?: ITaskItemSlot[];
  backgroundColor: string;
  feedbacks?: TFeedback[];
}

export interface ITaskImage {
  id?: string;
  source: 'unsplash' | 'local' | 'camera';
  // if it is local image, only save filename to DB, when retrieve from DB, generate path with DocumentDirectoryPath
  imageUrl: string;
  width: number;
  height: number;
  size?: number;
  mime?: string;
  unsplashInfo?: {
    color: string;
    rawUrl: string;
    authorName: string;
    portfolioUrl: string;
  };
}
export interface ITask extends IMetadata {
  title: string;
  image: ITaskImage;
  items?: ITaskItem[];
  feedbacks?: TFeedback[];
}
