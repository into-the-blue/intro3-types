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
