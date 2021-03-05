import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemSeriesTrendy from "./ItemSeriesTrendy";

function SeriesTrendy() {
  const [seriesTrendy, setSeriesTrendy] = useState([]);

  useEffect(() => {
    fetchSeriesTrendy();
  }, []);

  async function fetchSeriesTrendy() {
    const baseUrl =
      "https://api.themoviedb.org/3/tv/popular?api_key=5214af6249bf105c4d2ab8ebc91d26f9";
    const data = await axios(baseUrl);
    console.log(data.data.results);
    setSeriesTrendy(data.data.results);
  }

  return (
    <>
      {seriesTrendy.map((item, key) => {
        return (
          <ItemSeriesTrendy
            title={item.name}
            img={item.poster_path}
            key={item.id ? item.id : key}
          />
        );
      })}
    </>
  );
}

export default SeriesTrendy;
