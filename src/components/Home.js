import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);

  const temp = axios
    .get(
      `https://api.jikan.moe/v3/search/anime?q=aot&order_by=title&sort=asc&limit=10`
    )
    .then((res) => {
      const data = res.data;
      setAnimeList(data);
    });

  return <div>Home</div>;
};

export default Home;
