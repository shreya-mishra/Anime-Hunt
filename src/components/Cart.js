import React from "react";
import "../App.css";

const Cart = ({ animeList, setAnimeList, favouriteList, setFavouriteList }) => {
  console.log("fav list in favs", favouriteList[0].image_url);
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

export default Cart;
