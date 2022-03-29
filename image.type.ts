import { DataMetadata } from './util.type';
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

export type IntroImageSource = 'unsplash' | 'local' | 'camera';

type UnsplashMetadata = {
  color: string;
  rawUrl: string;
  authorName: string;
  portfolioUrl: string;
  blurHash: string;
  description: string;
  origin: object;
};
export interface IntroImage extends DataMetadata {
  source: IntroImageSource;
  // if it is local image, only save filename to DB, when retrieve from DB, generate path with DocumentDirectoryPath
  imageUrl: string;
  width: number;
  height: number;
  size?: number;
  mime?: string;
  unsplashInfo?: UnsplashMetadata;
}
