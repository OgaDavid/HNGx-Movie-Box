import Image from "next/image";
import BannerDetails from "@/components/Banner/details";
import { MoviesResult } from "@/typings";

const Banner = ({ movie }: { movie: MoviesResult }) => {
  const { title, overview } = movie;

  return (
    <div>
      <Image
        className="h-[650px] w-full -z-[1] object-cover"
        width={1440}
        height={600}
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
      <BannerDetails title={title} overview={overview} />
    </div>
  );
};

export default Banner;
