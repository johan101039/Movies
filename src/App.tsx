import { Route, Routes } from "react-router-dom"
import { useState } from "react"

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

import type { Movies } from "./interfaces/Movie"

function App() {

  const [favorites, setFavorites] = useState<Movies[]>([])

  const removeFavorite = (id: number) => {
    setFavorites(
      favorites.filter((movie) => movie.id !== id)
    )
  }

  return (
    <>
      <main className="flex flex-col p-2xl w-full box-border">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onRemoveFavorite={removeFavorite}
              />
            }
          />

        </Routes>

      </main>
    </>
  )

}

export default App