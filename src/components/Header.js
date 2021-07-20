import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Favourites } from "./context";
const Header = () => {
  const { favouriteList } = useContext(Favourites);
  return (
    <>
      <ul className='list'>
        <Link style={{ textDecoration: "none" }} to='/'>
          <span className='header__heading'>Home</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/cart'>
          <span className='header__heading'>
            Favourites
            <h4 style={{ color: "red", margin: "-20px  " }}>
              {favouriteList.length}
            </h4>
          </span>
        </Link>
      </ul>
    </>
  );
};

export default Header;
