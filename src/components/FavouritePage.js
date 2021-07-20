import React, { useContext } from "react";
import "../App.css";
import { Favourites } from "./context";

const FavouritePage = () => {
  const { favouriteList } = useContext(Favourites);
  return (
    <div className='anime__container'>
      {favouriteList.map((item) => {
        return (
          <div key={item.mal_id} className='anime__card'>
            <img className='image' src={item.image_url} alt='img' />
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FavouritePage;
