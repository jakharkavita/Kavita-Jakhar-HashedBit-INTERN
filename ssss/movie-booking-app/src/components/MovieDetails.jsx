import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}
