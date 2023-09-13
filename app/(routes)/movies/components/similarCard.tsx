import { MoviesResult } from "@/typings";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SimilarCard = ({ Movie }: { Movie: MoviesResult }) => {
  return (
    <Link href={`/movies/${Movie.id}`}>
      <div
        data-testid="movie-card"
        className="flex group relative space-y-2 flex-col"
      >
        <Image
          data-testid="movie-poster"
          className="w-[100px] rounded-[20px]  h-[180px] md:w-[173px] md:h-[271px]"
          src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`}
          alt="Movie poster"
          width={250}
          height={370}
        />
        <div className="absolute right-1 rounded-[20px] p-1 glassmorphism top-0">
          <span className="flex text-sm text-black font-medium text items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400" /> {Movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SimilarCard;
