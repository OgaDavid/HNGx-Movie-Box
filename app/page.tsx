"use client";

import Banner from "@/components/Banner/banner";
import Navbar from "@/components/Navbar/navbar";
import FeaturedMovies from "@/components/featured";
import Footer from "@/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main>
          <Banner />
          <FeaturedMovies />
        </main>
        <Footer />
      </QueryClientProvider>
    </>
  );
}
