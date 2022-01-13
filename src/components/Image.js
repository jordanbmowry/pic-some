import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addItemToCart } = useContext(Context);

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

  const cartIcon = hovered && (
    <i
      className='ri-add-circle-line cart'
      onClick={() => addItemToCart(img)}
    ></i>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {heartIcon()}
      {cartIcon}
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
