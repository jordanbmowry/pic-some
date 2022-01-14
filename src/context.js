import React, { createContext, useState, useEffect } from 'react';
import useFetch from './utils/useFetch';

const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const emptyCart = () => {
    setCartItems([]);
  };

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem?.id !== item.id)
    );
  };

  const toggleFavorite = (id) => {
    const mappedPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(mappedPhotos);
  };

  const value = {
    allPhotos,
    toggleFavorite,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    emptyCart,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export { Context, ContextProvider };
