export type childOf<T> = new () => T;
export interface DataMetadata {
  id: string;
  createdAt: string;
  updatedAt: string;
}
