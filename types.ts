
export interface MovieResult {
  id: string;
  title: string;
  year: number;
  genre: string;
  duration: string;
  matchScore: number;
  synopsis: string;
  posterUrl: string;
  trailerUrl: string;
  streamingPlatforms: { name: string; icon: string; bg: string; color?: string }[];
}

export interface IdentificationHistory {
  id: string;
  movie: MovieResult;
  timestamp: string;
}

export enum AppScreen {
  IDENTIFY = 'IDENTIFY',
  IDENTIFYING = 'IDENTIFYING',
  RESULT = 'RESULT',
  NO_MATCH = 'NO_MATCH',
  HISTORY = 'HISTORY',
  DISCOVER = 'DISCOVER',
  PROFILE = 'PROFILE',
  SEARCH = 'SEARCH'
}
