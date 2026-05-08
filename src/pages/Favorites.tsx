import React, { useState } from "react";
import type { Movies } from "../interfaces/Movie";
import Navbar from "../components/Navbar";

function Favorites({
  favorites,
  onRemoveFavorite,
}: {
  favorites: Movies[];
  onRemoveFavorite: (id: number) => void;
}) {

  const [search, setSearch] = useState("");

  return (
    <div>

      <Navbar
        favoritesCount={favorites.length}
        search={search}
        setSearch={setSearch}
      />

      <div className="p-5">

        <h1 className="text-3xl font-bold mb-5">
          Favoritos ❤️
        </h1>

        {favorites.length === 0 ? (
          <p>No hay películas favoritas</p>
        ) : (

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

            {favorites
              .filter((movie) =>
                movie.title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((movie) => (

                <div
                  key={movie.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden relative"
                >

                  {/* BOTON X */}
                  <button
                    onClick={() => onRemoveFavorite(movie.id)}
                    className="absolute top-2 right-2 bg-red-600 text-white w-8 h-8 rounded-full font-bold z-10"
                  >
                    X
                  </button>

                  <img
                    className="w-full h-[500px] object-contain bg-black"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />

                  <div className="p-3 text-center">

                    <h2 className="font-bold">
                      {movie.title}
                    </h2>

                    <p className="text-gray-600">
                      {movie.release_date?.split("-")[0]}
                    </p>

                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Favorites;