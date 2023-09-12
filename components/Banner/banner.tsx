"use client";

import Image from "next/image";
import BannerDetails from "@/components/Banner/details";
import { MoviesResult } from "@/typings";

const Banner = ({ movie }: { movie: MoviesResult }) => {
  function truncateOverview(text: string) {
    if (text?.length > 200) {
      return text.slice(0, 200) + "...";
    }
    return text;
  }

  return (
    <div>
      <Image
        className="h-[650px] w-full -z-[1] object-cover"
        width={1440}
        height={600}
        alt={movie?.title!!}
        loading="lazy"
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
      />
      <BannerDetails
        id={movie?.id}
        name={movie?.name!!}
        title={movie?.title!!}
        overview={truncateOverview(movie?.overview)}
      />
    </div>
  );
};

export default Banner;
