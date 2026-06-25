import UserNavbar from "../components/UserNavbar";
import { useWatchList } from "../context/WatchListContext";

function WatchList() {
  const { watchlist, removeMovie } =
    useWatchList();

  return (
    <>
      <UserNavbar />

      <h1>❤️ My List</h1>

      <div className="movie-list">
        {watchlist.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          watchlist.map((movie) => (
            <div
              className="movie-card"
              key={movie.id}
            >
              <img
                src={movie.image}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

              <button
                onClick={() =>
                  removeMovie(movie.id)
                }
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default WatchList;