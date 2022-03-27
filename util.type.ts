export type childOf<T> = new () => T;
export interface IDataMetadata {
  id: string;
  createdAt: string;
  updatedAt: string;
}
