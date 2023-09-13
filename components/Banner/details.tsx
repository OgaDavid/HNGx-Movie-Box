import React from "react";
import Container from "@/components/ui/container";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BannerDetailsProps {
  id: number;
  title: string;
  name: string;
  overview: string;
}

const BannerDetails: React.FC<BannerDetailsProps> = ({
  id,
  title,
  name,
  overview,
}) => {
  return (
    <Container>
      <div className="absolute top-[40%] md:top-1/2 transform -translate-y-1/2">
        <h1 className="text-4xl pb-3 max-w-[800px] max-md:leading-9 md:text-6xl font-bold text-white">
          {title || name}
        </h1>
        <p className="text-white max-md:text-sm max-w-[300px] md:max-w-[500px]">
          {overview}
        </p>
        <div className="flex items-center gap-5 my-4">
          <span className="flex items-center gap-2 text-white">
            <Image src="/images/tmdb.svg" alt="IMDb" width={35} height={17} />
            860 / 100
          </span>
          <span className="flex items-center gap-2 text-white">
            <Image
              src="/images/tomato.svg"
              alt="rotten tomatoes"
              width={17}
              height={17}
            />
            97%
          </span>
        </div>
        <div className="flex gap-4 mt-4">
          <Link
            href={`/movies/${id}`}
            className="bg-rose-700 hover:opacity-90 flex items-center gap-2 text-white px-4 py-2 rounded-md"
          >
            <PlayCircle className="text-white w-4 h-4" />
            Watch trailer
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default BannerDetails;
