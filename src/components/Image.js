import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';
import useHover from '../utils/useHover';

export default function Image({ className, img }) {
  const { toggleFavorite, addItemToCart, removeItemFromCart, cartItems } =
    useContext(Context);
  const { hovered, ref } = useHover();

  const isImgInCart = (img) => {
    return cartItems.some((item) => item?.id === img.id);
  };

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className='ri-heart-fill favorite'
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className='ri-heart-line favorite'
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
    return null;
  }

  function cartIcon() {
    if (isImgInCart(img)) {
      return (
        <i
          className='ri-shopping-cart-fill cart'
          onClick={() => removeItemFromCart(img)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className='ri-add-circle-line cart'
          onClick={() => addItemToCart(img)}
        ></i>
      );
    }
    return null;
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      {heartIcon()}
      {cartIcon()}
      <img src={img.url} alt='unsplash img' className='image-grid' />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
};
