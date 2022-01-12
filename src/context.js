import React, { createContext, useState, useEffect } from 'react';
import useFetch from './utils/useFetch';

const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const { get } = useFetch('https://raw.githubusercontent.com');

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const photos = await get(
          '/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        );
        setAllPhotos(photos);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPhotos();
  }, []);

  const value = {
    allPhotos,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export { Context, ContextProvider };
