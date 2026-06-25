import UserNavbar from "../components/UserNavbar";
import MovieRow from "../components/MovieRow";
import movies from "../data/movies";
import { useState, useEffect } from "react";

function Home() {
  const [showTrailer, setShowTrailer] =
  useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowTrailer(true);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <UserNavbar />

      <div className="featured-banner">

  {!showTrailer ? (
    <img
      src="/images/athadu.jpg"
      alt="Athadu"
      className="banner-image"
    />
  ) : (
    <video
      autoPlay
      controls
      className="banner-video"
      onEnded={() =>
        setShowTrailer(false)
      }
    >
      <source
        src="/videos/athadut.mp4"
        type="video/mp4"
      />
    </video>
  )}

  <div className="featured-overlay">
    <h1>Athadu</h1>

    <p>
      After being framed for a crime he didn't commit,
      <br />
      Nandu must outrun his enemies and
      <br />
      rewrite his destiny.
    </p>

    <div className="banner-buttons">
      <button>▶ Play</button>

      <button
        onClick={() =>
          alert("Athadu • Action • Thriller • 2005")
        }
      >
        ℹ More Info
      </button>
    </div>
  </div>

</div>

      <MovieRow
        title="🔥 Trending Now"
        movies={movies.trending}
      />

      <MovieRow
        title="🎬 Popular Movies"
        movies={movies.popular}
      />

      <MovieRow
        title="⭐ Recommended For You"
        movies={movies.recommended}
      />
    </>
  );
}

export default Home;