function MovieRow({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="movie-list">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
          >
            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;