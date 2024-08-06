import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  async function FetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transfomedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        release_date: movieData.release_date,
      };
    });
    setMovies(transfomedMovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
