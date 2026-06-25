import UserNavbar from "../components/UserNavbar";
import movies from "../data/movies";
import { useState } from "react";

function Languages() {
  const [selectedLanguage, setSelectedLanguage] =
    useState("English");

  const allMovies = [
    ...movies.trending,
    ...movies.popular,
    ...movies.recommended,
  ];

  const filteredMovies = allMovies.filter(
    (movie) =>
      movie.language === selectedLanguage
  );

  return (
    <>
      <UserNavbar />

      <h1>Browse By Language</h1>

      <div className="language-buttons">
        <button
          onClick={() =>
            setSelectedLanguage("English")
          }
        >
          English
        </button>

        <button
          onClick={() =>
            setSelectedLanguage("Telugu")
          }
        >
          Telugu
        </button>

        <button
          onClick={() =>
            setSelectedLanguage("Tamil")
          }
        >
          Tamil
        </button>

      </div>

      <h2>{selectedLanguage} Movies</h2>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
          >
            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Languages;