import type { Data } from "../interfaces/Movie";

const API_KEY = "22d8c17988d5590d8b2dc391f908e9ea";
const BASE_URL = "https://api.themoviedb.org/3";

// Películas populares
export const getMovies = async (): Promise<Data> => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    const data: Data = await response.json();
    console.log(data.results);
    return data;
};

// Buscar películas
export const searchMovies = async (query: string) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    return data.results;
};
