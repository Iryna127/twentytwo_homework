import React, { useEffect, useState } from 'react';

export const HttpHerousContext = React.createContext({
  heroList: [],
  fetchHeros: () => {},
});

const HttpHerousProvider = (props) => {
  const [heroList, setheroList] = useState([]);
 
  useEffect(
    () => fetchHeros(`https://rickandmortyapi.com/api/character?page=1`),
    []
  );
  const fetchHeros = (page) => {
    fetch(page)
      .then((resp) => resp.json())
      .then((data) => setheroList(data))
      .catch((err) => alert('Error in request'));
  };
  const getHeroCtX = () => ({
    heroList,
    fetchHeros,
  });
  return (
    <HttpHerousContext.Provider value={getHeroCtX()}>
      {props.children}
    </HttpHerousContext.Provider>
  );
};
export default HttpHerousProvider;
