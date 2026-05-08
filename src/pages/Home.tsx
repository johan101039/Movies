import React, { useEffect, useState } from "react";
import { getMovies, searchMovies } from "../services/api";
import type { Movies } from "../interfaces/Movie";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

function Home({
  favorites,
  setFavorites,
}: {
  favorites: Movies[];
  setFavorites: React.Dispatch<React.SetStateAction<Movies[]>>;
}) {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        if (search.trim() === "") {
          // 🎬 Películas populares
          const peliculas = await getMovies();
          setMovies(peliculas.results);
        } else {
          // 🔍 Buscar en TODA la API
          const resultados = await searchMovies(search);
          setMovies(resultados);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadMovies();
  }, [search]);

  const addFavorite = (movie: Movies) => {
    const existe = favorites.find((fav) => fav.id === movie.id);

    if (!existe) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div>
      <Navbar
        favoritesCount={favorites.length}
        search={search}
        setSearch={setSearch}
      />

      <div className="p-5">
        <h1 className="text-3xl font-bold mb-5">Películas</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavorite={addFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;