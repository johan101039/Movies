import { useState } from "react";
import type { Movies } from "../interfaces/Movie";

const IMAGEN_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({
  movie,
  onFavorite,
}: {
  movie: Movies;
  onFavorite?: (movie: Movies) => void;
}) {

  const [liked, setLiked] = useState(false);

  const handleFavorite = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked && onFavorite) {
      onFavorite(movie);
    }
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden
      hover:scale-105 transition duration-300"
    >

      <div className="relative">

        <img
          className="w-full h-[500px] object-contain bg-black"
          src={`${IMAGEN_URL}${movie.poster_path}`}
          alt={movie.title}
        />

        {/* CORAZON */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 text-3xl"
        >
          <span
            className={`${liked ? "text-red-600" : "text-white"
              } drop-shadow-[0_0_3px_black]`}
          >
            ♥
          </span>
        </button>

      </div>

      {/* INFORMACION */}
      <div className="p-3 text-center">

        <h2 className="font-bold text-lg">
          {movie.title}
        </h2>

        <p className="text-gray-600">
          Año: {movie.release_date?.split("-")[0]}
        </p>

      </div>

    </div>
  );
}

export default MovieCard;