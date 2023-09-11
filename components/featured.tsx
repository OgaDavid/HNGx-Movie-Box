import { BarChartBig, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Container from "./ui/container";
import MovieCard from "./ui/card";

const FeaturedMovies = () => {
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
        <div className="mt-8 place-items-center gap-x-2 gap-y-5 sm:gap-y-10 grid md:grid-cols-4 sm:grid-col-3 grid-cols-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedMovies;
