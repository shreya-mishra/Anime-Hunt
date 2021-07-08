import axios from "axios";
import React, { useEffect } from "react";
import "../App.css";

const Home = ({ favouriteList, setFavouriteList, animeList, setAnimeList }) => {
  useEffect(() => {
    fetchAnimeList();
    console.log("typeof ", typeof favouriteList);
  }, []);
  console.log(animeList);
  const fetchAnimeList = async () => {
    // const temp = await fetch(
    //   `https://api.jikan.moe/v3/search/anime?q=aot&order_by=title&sort=asc&limit=10`
    // ).then((res) => res.json());
    // setAnimeList(temp.results);
    await axios
      .get(
        `https://api.jikan.moe/v3/search/anime?q=aot&order_by=title&sort=asc&limit=10`
      )
      .then((res) => {
        const abc = res.data.results;
        setAnimeList(abc);
      });
  };
  console.log("favouriteList", favouriteList);
  return (
    <div className='anime__container'>
      {animeList.map((item, key) => {
        return (
          <div key={item.mal_id} className='anime__card'>
            <img className='image' src={item.image_url} alt='img' />
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              {item.title}
            </span>
            {/* <span>{item.synopsis}</span> */}

            {favouriteList.some((i) => i.mal_id === item.mal_id) ? (
              <button
                className='button'
                onClick={() =>
                  setFavouriteList(
                    favouriteList.filter((c) => c.mal_id !== item.mal_id)
                  )
                }>
                Remove from Favourites
              </button>
            ) : (
              <button
                className='button'
                onClick={() => {
                  setFavouriteList([...favouriteList, item]);
                }}>
                Add to Favourites
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
