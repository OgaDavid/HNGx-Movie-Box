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
  key: string
  official: boolean;
  published_at: string;
  id: string;
}

export interface Videos {
  id: number;
  results: Array[Video[]];
}

// export interface ProductionCompanies {
//   id: number;
//   logo_path: string;
//   name: string;
//   origin_country: string;
// }

// interface Movie {

//     adult: boolean
//     backdrop_path: string
//     belongs_to_collection: {
//       id: number
//       name:string
//       poster_path: string
//       backdrop_path: string
//     },
//     budget: number
//     genres: Genre[]
//     homepage: string
//     id: number
//     imdb_id: number
//     original_language: string
//     original_title: string
//     overview: string
//     popularity: number
//     poster_path: string
//     production_companies: ProductionCompanies[]
//     production_countries: [
//       {
//         iso_3166_1: US,
//         name: United States of America
//       }
//     ],
//     release_date: string
//     revenue: number
//     runtime: number
//     spoken_languages: [
//       {
//         english_name: English,
//         iso_639_1: en,
//         name: English
//       },
//       {
//         english_name: Hindi,
//         iso_639_1: hi,
//         name: हिन्दी
//       },
//       {
//         english_name: Italian,
//         iso_639_1: it,
//         name: Italiano
//       },
//       {
//         english_name: Spanish,
//         iso_639_1: es,
//         name: Español
//       }
//     ],
//     status: Released,
//     tagline: string
//     title: Spider-Man: Across the Spider-Verse,
//     video: boolean
//     vote_average: 8.451,
//     vote_count: 4159
// }