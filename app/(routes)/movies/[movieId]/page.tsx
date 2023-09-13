import getMovie from "@/lib/get-movie";
import getVideo from "@/lib/get-video";
import { MoviesResult, Video, Videos } from "@/typings";
import { Metadata } from "next";
import VideoPlayer from "../components/videoPlayer";
import MovieDetails from "../components/movieDetails";

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

  const [movie, videos] = await Promise.all([movieData, movieVideos]);

  const filteredVideos: Video[] = [];
  videos.results.forEach((trailer: Video) => {
    if (trailer.type === "Trailer") {
      filteredVideos.push(trailer);
    }
  });

  const randomTrailer = filteredVideos[Math.floor(Math.random() * filteredVideos.length)]

  console.log(randomTrailer)

  console.log(filteredVideos);

  console.log(movie);
  console.log(videos);

  return (
    <div>
      <VideoPlayer trailer={randomTrailer} />
      <MovieDetails />
    </div>
  );
};

export default page;
