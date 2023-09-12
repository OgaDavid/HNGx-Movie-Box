import Banner from "@/components/Banner/banner";
import Navbar from "@/components/Navbar/navbar";
import FeaturedMovies from "@/components/featured";
import Footer from "@/components/footer";
import getMovies from "@/actions/get-movies";

const Home = async () => {
  const { results } = await getMovies();

  return (
    <>
      <Navbar />
      <main>
        <Banner movies={results} />
        <FeaturedMovies movies={results} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
