import getMovie from "@/lib/get-movie";

type Params = {
  params: {
    movieId: number;
  };
};

const page = async ({ params: { movieId } }: Params) => {
  const movieData = await getMovie(movieId);
  return (
    <div>
      <h1>{movieData.title || movieData.name}</h1>
    </div>
  );
};

export default page;
