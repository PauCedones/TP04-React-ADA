import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const getData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5214af6249bf105c4d2ab8ebc91d26f9"
    );
    const getJson = await getData.json();

    console.log(getJson);
    setData(getJson.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Peliculas</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
