import { useState } from 'react';
import { positiveCartValues } from '../utils/cart';

export default function Cart() {
  const [cart, setCart] = useState(0);

  return (
    <div className="jh-cart">
      <div>
        <button onClick={() => setCart(cart - 1)}>➖</button>
        <button onClick={() => setCart(cart + 1)}>➕</button>{' '}
        <span>{positiveCartValues(cart)}</span>{' '}
        <button data-test-id="product-add-to-cart">Add To Cart ✔️</button>
      </div>
    </div>
  );
}
