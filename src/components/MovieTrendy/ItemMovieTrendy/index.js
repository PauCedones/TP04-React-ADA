import React from "react";
import "./style.scss";

function ItemMovieTrendy(props) {
  const { title, img, rated } = props;
  return (
    <div className="item-context">
      <img src={`http://image.tmdb.org/t/p/w154${img}`} />
      <p className="title">{title}</p>
      <p className="rated">{rated}</p>
    </div>
  );
}

export default ItemMovieTrendy;
