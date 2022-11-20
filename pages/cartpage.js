import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProducts } from '../database/connect';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookie';

export function totalSum(props) {
  const cartSum = props.products.map((productSum) => {
    return productSum.cart * productSum.price;
  });

  return cartSum;
}

export default function Cartpage(props) {
  const cartAmount = props.products;
  const [cart, setCart] = useState(cartAmount);

  const initialValue = 0;
  const totalSumArray = totalSum(props).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue,
  );

  return (
    <>
      <Head>
        <title>Cart Kandinsky AI</title>
        <meta name="description" content="Cart Page" />
      </Head>

      <h1>Cart</h1>
      {cart.map((product) => {
        if (product.cart) {
          return (
            <div
              key={`product-${product.id}`}
              data-test-id={`cart-product-${product.id}`}
            >
              <h2>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </h2>
              <a>
                <Image
                  src={`/${product.id}-${product.name}.jpg`}
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div>Price: {product.price * product.cart}</div>
              <div>🛒{product.cart}</div>{' '}
              <div>
                <br />
                <button
                  aria-label="Remove"
                  onClick={() => {
                    const cookieCart = getParsedCookie('cart');
                    const foundCookie = cookieCart.filter((item) => {
                      return item.id === product.id;
                    });
                    const foundCookieId = foundCookie[0].id;

                    const newCart = cart.filter(
                      (item) => item.id !== foundCookieId,
                    );
                    const foundCookieToSetCart = cookieCart.filter((item) => {
                      return item.id !== product.id;
                    });
                    setStringifiedCookie(
                      'cart',
                      props.setCart(foundCookieToSetCart),
                    );
                    setCart(newCart);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <br />
      <br />
      <div>
        <h3>Total:</h3>
        {totalSumArray}€
        <br />
        <br />
        {}
        <br />
      </div>
      <div>
        <form method="POST" action="/checkoutpage">
          <button>checkout</button>
        </form>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const parsedCookies = context.req.cookies.cart
    ? JSON.parse(context.req.cookies.cart)
    : [];

  const products = await getProducts();
  const cartProducts = products.map((product) => {
    return {
      ...product,
      cart:
        parsedCookies.find(
          (cookieProductObject) => product.id === cookieProductObject.id,
        )?.cart || null,
    };
  });

  return {
    props: {
      products: cartProducts,
    },
  };
}
