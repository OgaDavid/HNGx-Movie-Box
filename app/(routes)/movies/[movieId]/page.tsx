import getMovie from "@/lib/get-movie";
import getVideo from "@/lib/get-video";
import { Credits, Movies, MoviesResult, Video, Videos } from "@/typings";
import { Metadata } from "next";
import VideoPlayer from "../components/videoPlayer";
import MovieDetails from "../components/movieDetails";
import getCredits from "@/lib/get-credits";
import getSimilar from "@/lib/get-similar";

type Params = {
  params: {
    movieId: number;
  };
};

export async function generateMetadata({
  params: { movieId },
}: Params): Promise<Metadata> {
  const movieData = await getMovie(movieId);

  return {
    title: movieData.title || movieData.name,
  };
}

const page = async ({ params: { movieId } }: Params) => {
  const movieData: Promise<MoviesResult> = getMovie(movieId);
  const movieVideos: Promise<Videos> = getVideo(movieId);
  const movieCredits: Promise<Credits> = getCredits(movieId);
  const similarMovies: Promise<Movies> = getSimilar(movieId);

  const [movie, videos, credits, similar] = await Promise.all([
    movieData,
    movieVideos,
    movieCredits,
    similarMovies
  ]);

  const filteredVideos: Video[] = [];
  videos.results.forEach((trailer: Video) => {
    if (trailer.type === "Trailer") {
      filteredVideos.push(trailer);
    }
  });

  const randomTrailer =
    filteredVideos[Math.floor(Math.random() * filteredVideos.length)];

  return (
    <main>
      <div className="flex flex-col items-start justify-start">
        <VideoPlayer trailer={randomTrailer} />
        <MovieDetails credits={credits} movie={movie} similar={similar} />
      </div>
    </main>
  );
};

export default page;
