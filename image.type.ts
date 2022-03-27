import { IDataMetadata } from './util.type';
export interface AndroidImageColors {
  dominant?: string;
  average?: string;
  vibrant?: string;
  darkVibrant?: string;
  lightVibrant?: string;
  darkMuted?: string;
  lightMuted?: string;
  muted?: string;
  platform: 'android';
}

export interface IOSImageColors {
  background: string;
  primary: string; // optional
  secondary: string; // optional
  detail: string; // optional
  platform: 'ios';
}

export interface ImageColors {
  primary: string;
  secondary: string;
  //
  average: string;
  allColors: string[];
  origin: AndroidImageColors | IOSImageColors;
}

export type TImageSource = 'unsplash' | 'local' | 'camera';

type TUnsplashInfo = {
  color: string;
  rawUrl: string;
  authorName: string;
  portfolioUrl: string;
};
export interface IIntroImage extends IDataMetadata {
  source: TImageSource;
  // if it is local image, only save filename to DB, when retrieve from DB, generate path with DocumentDirectoryPath
  imageUrl: string;
  width: number;
  height: number;
  size?: number;
  mime?: string;
  unsplashInfo?: TUnsplashInfo;
}
