export default async function getMovie(movieId: number) {
    const api_url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=11ca62a738dc81495dca5a3cef42e8f5&language=en-US`;
  const res = await fetch(api_url);

  if(!res.ok) throw new Error("Cannot get movie details");

  return res.json();
}
