import React, { useContext, useRef } from 'react';
import { Context } from '../context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const buttonRef = useRef(null);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const handleClick = () => {
    buttonRef.current.textContent = 'Ordering...';
    setTimeout(() => {
      console.log('Order placed!');
      buttonRef.current.textContent = 'Place Order';
      emptyCart();
    }, 3000);
  };

  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {cartItemElements}
      <p className='total-cost'>Total: {totalCostDisplay}</p>
      <div>
        {cartItems.length ? (
          <button onClick={handleClick} ref={buttonRef}>
            Place Order
          </button>
        ) : null}
      </div>
    </main>
  );
}

export default Cart;
