import Navbar from "../components/Navbar";
import movies from "../data/movies";

function Recommendations() {

  const recommended = movies.filter(
    (movie) => movie.genre === "Action"
  );

  return (
    <>
      <Navbar />

      <h1>Recommended For You</h1>

      {recommended.map((movie) => (
        <h3 key={movie.id}>
          {movie.title}
        </h3>
      ))}
    </>
  );
}

export default Recommendations;