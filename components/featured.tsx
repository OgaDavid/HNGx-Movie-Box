import { BarChartBig, ChevronRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import MovieCard from "@/components/ui/card";
// import { useState } from "react";
import Loading from "@/components/ui/loading";
import { Movies, MoviesResult } from "@/typings";
import getMovies from "@/lib/get-movies";

const FeaturedMovies = async () => {

  const moviesData: Promise<Movies> = getMovies();

  const { results: movies } = await moviesData;
  // const [isLoading, setIsLoading] = useState(false);

  if (movies?.length === 0) {
  }

  return (
    <section className="mt-10">
      <Container>
        <div className="flex items-center justify-between">
          <h3 className="md:text-3xl flex items-center gap-2 text-xl font-bold">
            <BarChartBig className="w-6 h-6 text-rose-700" /> Featured Movies
          </h3>
          <Link
            className="text-rose-700 font-bold hover:underline flex items-center text-sm gap-2"
            href="/movies"
          >
            See More <ChevronRight className="w-4 h-4 text-rose-700" />
          </Link>
        </div>
        <div>
          {(
            <div className="mt-8 place-items-center gap-x-2 gap-y-5 sm:gap-y-10 grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} Movie={movie} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedMovies;
