import { useState } from "react";
import movies from "../data/movies";
import UserNavbar from "../components/UserNavbar";
import { useWatchList } from "../context/WatchListContext";

function Movies() {
  const { addMovie } = useWatchList();

  const [search, setSearch] = useState("");

  const allMovies = [
    ...movies.trending,
    ...movies.popular,
    ...movies.recommended,
  ];

  const filtered = allMovies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <UserNavbar />

      <h1>🎬 Movies</h1>

      <input
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="movie-list">
        {filtered.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
          >
            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>

            <p>{movie.genre}</p>

            <p>{movie.language}</p>

            <button
              onClick={() =>
                addMovie(movie)
              }
            >
              + My List
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;