import React from "react";
import { Link } from "react-router-dom";

function Navbar({
  favoritesCount,
  search,
  setSearch,
}: {
  favoritesCount: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <nav className="bg-black text-blue-600 px-8 py-4 flex justify-between items-center shadow-lg">

      <div className="text-2xl font-semibold tracking-tight">
        <Link
          to="/"
          className="hover:text-blue-400 transition-colors"
        >
          App Peliculas
        </Link>
      </div>

      <div className="hidden bg-amber-50 lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">

        <input
          className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          type="text"
          placeholder="Buscar película"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.836 10.615 15 14.695"
            stroke="#7A7B7D"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            clipRule="evenodd"
            d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
            stroke="#7A7B7D"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

      <div className="flex gap-8 text-lg font-medium">

        <Link
          to="/"
          className="hover:text-blue-400 transition-colors"
        >
          Home
        </Link>

        <Link
          to="/favorites"
          className="hover:text-blue-400 transition-colors relative"
        >
          Favorites

          <span className="absolute -top-3 -right-5 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {favoritesCount}
          </span>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;