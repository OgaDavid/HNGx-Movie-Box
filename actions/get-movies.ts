import { Movies } from "@/typings";

const api_url = `https://api.themoviedb.org/3/trending/all/day?api_key=11ca62a738dc81495dca5a3cef42e8f5&language=en-US&page=1`;

const getMovies = async (): Promise<Movies> => {
  const res = await fetch(api_url);

  return res.json();
};

export default getMovies;
