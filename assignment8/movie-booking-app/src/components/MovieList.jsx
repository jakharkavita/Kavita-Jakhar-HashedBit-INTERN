import { movies } from "../data";
import MovieCard from "./MovieCard";
import "./styles.css";

export default function MovieList() {
  return (
    <div className="grid-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
