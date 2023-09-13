import React from "react";

const MovieDetails = ({ movie }: { movie: any }) => {
  return (
    <section className="mt-5">
      <div className="flex items-start">
        <div className="w-[80%] border-r p-2 border-r-gray-200">
          <div className="flex items-center gap-5 flex-wrap">
            <h1 className="font-medium text-2xl text-[#404040]">
              {movie.original_title}
            </h1>
            <div className="flex gap-2 items-center justify-center">
              {movie.genres.map((genre: any) => (
                <span className="text-sm text-rose-700 py-1 px-4 rounded-full border border-rose-700">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="max-w-[675px] mt-4 text-sm">{movie.overview}</p>
          </div>
        </div>
        <div className="grow">
          <div className="flex items-center gap-2">
            <span className="text-rose-700 text-sm font-medium">
              {movie.vote_average}
            </span>
            <span className="text-rose-700 text-sm font-medium">
              {movie.vote_count} votes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
