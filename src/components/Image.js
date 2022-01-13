import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addItemToCart, cartItems } = useContext(Context);

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
      return <i className='ri-shopping-cart-fill cart'></i>;
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
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
