import { Credits, Movies } from "@/typings";
import { Calendar, ChevronRight, Clock3, Eye, List, Star } from "lucide-react";
import React from "react";
import SimilarCard from "./similarCard";

interface MovieDetailsProps {
  movie: any;
  credits: Credits;
  similar: Movies;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  movie,
  credits,
  similar,
}) => {
  let directors: string[] = [];
  credits.cast.forEach((cast) => {
    if (cast.known_for_department === "Directing") {
      directors.push(cast.original_name);
    }
  });

  let writers: string[] = [];
  credits.cast.forEach((cast) => {
    if (cast.known_for_department === "Writing") {
      writers.push(cast.original_name);
    }
  });

  let starsNames: string[] = [];
  let orderedStars = credits.cast.sort((a, b) => a.order - b.order);
  const stars = orderedStars.slice(0, 4);

  stars.forEach((star) => {
    starsNames.push(star.original_name);
  });

  const filteredSimilarMovies = similar.results.slice(0, 4);

  return (
    <section className="mt-5 mx-auto max-w-[1000px]">
      <div className="flex max-md:flex-col pb-10 max-lg:px-4 items-start justify-start">
        <div className="md:w-[75%] max-md:border-none border-r pr-2 border-r-gray-200">
          <div className="flex items-start justify-start gap-5 flex-wrap">
            <h1
              data-testid="movie-title"
              className="font-medium text-2xl text-[#404040]"
            >
              {movie.original_title}
            </h1>
            <div className="flex gap-2 items-center justify-center">
              {movie.genres.map((genre: any) => (
                <span
                  key={genre.name}
                  className="text-sm text-rose-700 py-1 px-4 rounded-full border border-rose-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p data-testid="movie-overview" className="mt-4 text-sm">
              {movie.overview}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <p className="text-sm font-medium">
              Director(s):{" "}
              <span className="text-rose-700">
                {directors.length === 0
                  ? "Yet to be known"
                  : directors.join(", ")}
                .
              </span>
            </p>
            <p className="text-sm font-medium">
              Writers(s):{" "}
              <span className="text-rose-700">
                {writers.length === 0 ? "Yet to be known" : writers.join(", ")}.
              </span>
            </p>
            <p className="text-sm font-medium">
              Stars(s):{" "}
              <span className="text-rose-700">
                {starsNames.length === 0
                  ? "Yet to be known"
                  : starsNames.join(", ")}
                .
              </span>
            </p>
          </div>
          <div className="mt-10">
            <h5 className="font-semibold text-xl flex items-center mb-5">
              Similar movies <ChevronRight className="w-5 mt-[3px] h-5" />
            </h5>
            {
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                {filteredSimilarMovies.map((movie) => (
                  <SimilarCard key={movie.id} Movie={movie} />
                ))}
              </div>
            }
          </div>
        </div>
        <div className="max-md:mt-10 grow pl-2">
          <div className="flex items-center md:justify-end gap-2">
            <span className="text-rose-700 border-r-2 pr-2 border-r-gray-200 flex gap-1 items-center text-lg font-bold">
              <Star className="text-yellow-400 w-5 h-5" />
              {movie.vote_average.toFixed(1)}
            </span>
            <span className="text-rose-700 text-lg font-bold">
              {movie.vote_count} votes
            </span>
          </div>
          <div className="flex flex-col justify-center gap-2 mt-6 items-center">
            <div className="w-full text-white bg-rose-700 font-medium flex justify-center items-center gap-2 rounded-lg py-3">
              <Eye className="w-5 h-5" />
              See Showtimes
            </div>
            <div className="w-full text-black bg-rose-200 border border-rose-700 font-medium flex justify-center items-center gap-2 rounded-lg py-3">
              <List className="w-5 h-5" />
              More watch options
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="flex items-center gap-2 font-medium">
              <Clock3 className="w-5 h-5" /> Runtime:{" "}
              <span data-testid="movie-runtime">{movie.runtime}</span>mins
            </p>
            <p
              data-testid="movie-runtime"
              className="flex items-center gap-2 font-medium"
            >
              <Calendar className="w-5 h-5" /> Release Date:{" "}
              <span data-testid="movie-release-date">{new Date(movie.release_date).toUTCString()}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
