import React, { useState, useEffect } from "react";
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
      {movieTrendy.map((item, key) => {
        return (
          <ItemMovieTrendy
            title={item.title}
            img={item.backdrop_path}
            key={item.id ? item.id : key}
          />
        );
      })}
    </>
  );
}

export default MovieTrendy;
