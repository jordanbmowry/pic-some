import React, { useContext, useState } from 'react';
import { Context } from '../context';
import PropTypes from 'prop-types';
import useHover from '../utils/useHover';

export default function CartItem({ item }) {
  const { removeItemFromCart } = useContext(Context);
  //   const [hovered, setHovered] = useState(false);
  const { hovered, ref } = useHover();
  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className='cart-item'>
      <i
        className={iconClassName}
        onClick={() => removeItemFromCart(item)}
        ref={ref}
      ></i>

      <img alt='random unsplash img' src={item.url} width='130px' />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
