import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [data, setData] = useState();
  

  useEffect(() => {
    axios
      .get(
        `
        https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=e2b1a38dd2984558bcdfd049755b3657`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Context.Provider value={{ data }}>
      {props.children}
      
    </Context.Provider>
  );
};