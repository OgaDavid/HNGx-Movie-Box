"use client";

import Image from "next/image";
import BannerDetails from "@/components/Banner/details";
import { useEffect, useState } from "react";

const Banner = ({ movies }: { movies: any }) => {
  const [bannerMovie, setBannerMovie] = useState<any>();

  useEffect(() => {
    setBannerMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, []);

  function truncateOverview(text: any) {
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
        alt={bannerMovie?.title}
        src={`https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path}`}
      />
      <BannerDetails
        name={bannerMovie?.name}
        title={bannerMovie?.title}
        overview={truncateOverview(bannerMovie?.overview)}
      />
    </div>
  );
};

export default Banner;
