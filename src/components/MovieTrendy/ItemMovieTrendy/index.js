import React from "react";

function ItemMovieTrendy(props) {
  const { title, img } = props;
  return (
    <>
      <img src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2${img}`} />
      <p>{title}</p>
    </>
  );
}

export default ItemMovieTrendy;
