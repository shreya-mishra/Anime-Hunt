import React, { createContext, useState } from "react";
export const Favourites = createContext();

const Context = ({ children }) => {
  const [favouriteList, setFavouriteList] = useState([]);
  return (
    <Favourites.Provider value={{ favouriteList, setFavouriteList }}>
      {children}
    </Favourites.Provider>
  );
};

export default Context;
