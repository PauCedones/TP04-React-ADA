import React, { useState, useEffect } from "react";
import "./style.scss";
import axios from "axios";
import ItemMovieTrendy from "./ItemMovieTrendy";

function MovieTrendy() {
  const [movieTrendy, setMovieTrendy] = useState([]);

  useEffect(() => {
    fetchMovieTrendy();
  }, []);

  async function fetchMovieTrendy() {
    const baseUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=5214af6249bf105c4d2ab8ebc91d26f9";
    const data = await axios.get(baseUrl);
    console.log(data.data.results);
    setMovieTrendy(data.data.results);
  }

  return (
    <>
      <h1>Trending Movies</h1>
      <section className="wrapper">
        <a>🢀</a>
        {movieTrendy.map((item, key) => {
          return (
            <ItemMovieTrendy
              title={item.title}
              img={item.poster_path}
              rated={item.vote_average}
              key={item.id ? item.id : key}
            />
          );
        })}
        <a>🢂</a>
      </section>
    </>
  );
}

export default MovieTrendy;
