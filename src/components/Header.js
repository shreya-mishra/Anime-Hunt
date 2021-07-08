import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Header = ({ favourites }) => {
  return (
    <>
      <ul className='list'>
        <Link style={{ textDecoration: "none" }} to='/'>
          <span className='header__heading'>Home</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/cart'>
          <span className='header__heading'>
            Favourites<h2 style={{ color: "red", margin: "-25px  " }}>❤</h2>
            {/* <h2>{favourites.length}</h2> */}
          </span>
        </Link>
      </ul>
    </>
  );
};

export default Header;
