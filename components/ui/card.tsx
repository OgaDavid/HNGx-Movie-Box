import { Heart } from "lucide-react";
import Image from "next/image";

const MovieCard = () => {
  return (
    <div data-testid="movie-card" className="flex relative space-y-2 flex-col">
      <Image
        data-testid="movie-poster"
        className="w-[150px] rounded-tl-xl rounded-tr-xl  h-[230px] md:w-[250px] md:h-[370px]"
        src="/images/stranger-things.png"
        alt="Movie poster"
        width={250}
        height={370}
      />
      <div className="absolute text-gray-300 py-1 px-3 rounded-full top-3 left-2 glassmorphism">
        <span className="text-xs md:text-sm">TV Series</span>
      </div>
      <div className="absolute text-gray-300 p-2 rounded-full top-[13px] right-3 glassmorphism">
        <Heart className="w-4 h-4" />
      </div>
      <span className="text-muted-foreground text-xs">
        USA, <span data-testid="movie-release-date">2018 - current</span>{" "}
      </span>
      <h4 data-testid="movie-title" className="md:text-xl text-base font-bold">
        Stranger Things
      </h4>
      <div className="flex items-center gap-1 justify-between">
        <span className="flex max-md:text-xs font-semibold items-center gap-1 md:gap-2">
          <Image src="images/tmdb.svg" alt="imdb" width={35} height={17} />
          860 / 100
        </span>
        <span className="flex max-md:text-xs font-semibold items-center gap-1 md:gap-2">
          <Image
            src="images/tomato.svg"
            alt="rotten tomatoes"
            width={17}
            height={17}
          />
          97%
        </span>
      </div>
      <span className="text-muted-foreground text-xs font-medium">
        Adventure, Action, Horror
      </span>
    </div>
  );
};

export default MovieCard;
