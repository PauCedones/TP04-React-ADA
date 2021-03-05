import React from "react";

function ItemSeriesTrendy(props) {
  const { title, img } = props;
  return (
    <>
      <img src={`http://image.tmdb.org/t/p/w185${img}`} />
      <p>{title}</p>
    </>
  );
}

export default ItemSeriesTrendy;
