import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";
const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);
  return (
    <BrowserRouter className='App'>
      <Header />
      <Route exact path='/'>
        <Home
          animeList={animeList}
          setAnimeList={setAnimeList}
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
        />
      </Route>
      <Route path='/cart'>
        <Cart
          animeList={animeList}
          setAnimeList={setAnimeList}
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
        />
      </Route>
    </BrowserRouter>
  );
};

export default App;
