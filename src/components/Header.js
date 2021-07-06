import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <>
      <ul className='list'>
        <Link style={{ textDecoration: "none" }} to='/'>
          <span className='header__heading'>Home</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/cart'>
          <span className='header__heading'>Favourites</span>
        </Link>
      </ul>
    </>
  );
};

export default Header;
