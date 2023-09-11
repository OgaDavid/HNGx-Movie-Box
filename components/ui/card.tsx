import Image from "next/image";

const MovieCard = () => {
  return (
    <div className="flex space-y-2 flex-col">
      <Image
        className="w-[150px] rounded-tl-lg rounded-tr-lg  h-[230px] md:w-[250px] md:h-[370px]"
        src="/images/stranger-things.png"
        alt="Movie poster"
        width={250}
        height={370}
      />
      <span className="text-muted-foreground max-md:text-xs">
        USA, 2018 - current
      </span>
      <h4 className="md:text-xl text-base font-bold">Stranger Things</h4>
      <div className="flex items-center gap-1 md:gap-2">
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
