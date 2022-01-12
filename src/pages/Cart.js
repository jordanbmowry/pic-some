import React, { useContext } from 'react';
import { Context } from '../context';

function Cart() {
  const context = useContext(Context);
  console.log(context);
  return (
    <main className='cart-page'>
      <h1>Check out</h1>
    </main>
  );
}

export default Cart;
