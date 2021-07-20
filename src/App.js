import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import FavouritePage from "./components/FavouritePage";
const App = () => {
  return (
    <BrowserRouter className='App'>
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/cart'>
        <FavouritePage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
