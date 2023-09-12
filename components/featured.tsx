import { BarChartBig, ChevronRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import MovieCard from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Movies } from "@/typings";
import Loading from "@/components/ui/loading";

const api_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=11ca62a738dc81495dca5a3cef42e8f5&language=en-US&page=1`;

const FeaturedMovies = () => {
  const [movies, setMovies] = useState<Movies>();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(api_url);
      setMovies(data);
    },
  });

  console.log(movies?.results);

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
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-8 place-items-center gap-x-2 gap-y-5 sm:gap-y-10 grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-4">
              {movies?.results.map((movie) => (
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
