export interface Genre {
  id: number;
  name: string;
}

export interface MoviesResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: "movie" | "tv";
}

export interface Movies {
  page: number;
  results: MoviesResult[];
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  site: "YouTube" | "Vimeo";
  size: number;
  type: string;
  key: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface Videos {
  id: number;
  results: Array[Video[]];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Credits {
  id: number
  cast: Cast[]
}
