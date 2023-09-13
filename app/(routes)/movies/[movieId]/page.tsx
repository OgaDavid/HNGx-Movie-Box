import Sidebar from "@/app/(routes)/movie/components/sidebar";
import getMovie from "@/lib/get-movie";
import { Metadata } from "next";

type Params = {
  params: {
    movieId: number;
  };
};

export async function generateMetadata({ params: { movieId } }: Params): Promise<Metadata> {
  const movieData = await getMovie(movieId);

  return {
    title: movieData.title || movieData.name
  }
}

const page = async ({ params: { movieId } }: Params) => {
  const movieData = await getMovie(movieId);
  return (
    <div>
      Hello
    </div>
  );
};

export default page;
