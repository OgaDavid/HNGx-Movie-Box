export default async function getMovies() {
  const api_url = `https://api.themoviedb.org/3/trending/all/day?api_key=11ca62a738dc81495dca5a3cef42e8f5&language=en-US&page=1`;

  const res = await fetch(api_url);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
