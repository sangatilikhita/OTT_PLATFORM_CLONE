import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import movies from "../data/movies";

function Landing() {
  return (
    <>
      <Navbar />
      <HeroBanner />

      <MovieRow
  title="🔥 Trending Movies"
  movies={movies.trending}
/>

      <footer className="footer">
        <p>© 2026 Letflix</p>
      </footer>
    </>
  );
}

export default Landing;