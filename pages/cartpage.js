import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProducts } from '../database/connect';
import { positiveCartValues } from '../utils/cart';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookie';

export function totalSum(props) {
  const cartSum = props.products.map((productSum) => {
    return productSum.amount * productSum.prize;
  });

  return cartSum;
}

export default function Cartpage(props) {
  /* const [cart, setCart] = useState(props.products); */
  /* const [removeProduct, setRemoveProduct] = useState(false); */
  /*  function cartProductState() {
    const cartProducts = props.products.map((cartProduct) => {
      return cartProduct.amount;
    });
    return cartProducts;
  } */
  function handleRemove(id) {
    const newCart = props.cart.filter((item) => item.id !== id);
    props.setCart(newCart);
  }
  console.log('propsCart', props.cart);

  const productCart = props.cart?.map((cart) => {
    return {
      ...cart,
      name: props.products.find((singleProduct) => cart.id === singleProduct.id)
        ?.name,
      prize: props.products.find(
        (singleProduct) => cart.id === singleProduct.id,
      )?.prize,
    };
  });

  console.log('productCart', productCart);

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
      {/* if product. amount exists return it */}

      <h1>Cart</h1>
      {props.products.map((product) => {
        if (product.amount) {
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
              <div>Price: {product.prize * product.amount}</div>
              <div>🛒{product.amount}</div>{' '}
              <div>
                {/* <button
                  aria-label="Remove"
                  onClick={() => {
                    const currentCookieValue = getParsedCookie('amount');
                    const foundCookie = currentCookieValue.find(
                      (cookieProduct) => cookieProduct.id === product.id,
                    );
                    function removeCookie() {
                      foundCookie.amount = 0;
                      return;
                    }
                    removeCookie();
                    setStringifiedCookie('amount', currentCookieValue);
                  }}
                >
                  Remove
                </button> */}
                <br />
                <button
                  aria-label="Remove"
                  onClick={() => {
                    handleRemove(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
              {/* <button
                data-test-id="product-add-to-cart"
                onClick={() => {
                  const currentCookieValue = getParsedCookie('amount');
                  if (!currentCookieValue) {
                    setStringifiedCookie('amount', [
                      { id: props.product.id, amount: cart },
                    ]);
                    return;
                  }

                  const foundCookie = currentCookieValue.find(
                    (cookieProduct) => cookieProduct.id === product.id,
                  );

                  if (!foundCookie) {
                    currentCookieValue.push({
                      id: props.product.id,
                      amount: cart,
                    });
                  } else {
                    foundCookie.amount = foundCookie.amount + cart;
                  }

                  setStringifiedCookie('amount', currentCookieValue);
                }}
              >
                Add To Cart ✔️
              </button> */}
              {/* <button
                onClick={() => {
                  setCart(cart + 1);
                }}
              >
                ➕
              </button>{' '}
              <span>{positiveCartValues(cart)}</span>{' '}
              <button
                onClick={() => {
                  setCart(cart - 1);
                }}
              >
                ➖
              </button> */}
              {}
              {/* <div>
              {getParsedCookie('amount')?.find(
                (cookieProduct) => cookieProduct.id === product.id,
              )?.amount || 0}
            </div> */}
            </div>
          );
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
  const parsedCookies = context.req.cookies.amount
    ? JSON.parse(context.req.cookies.amount)
    : [];
  const cartProducts = (await getProducts()).map((product) => {
    return {
      ...product,
      amount:
        parsedCookies.find(
          (cookieProductObject) => product.id === cookieProductObject.id,
        )?.amount || 0,
    };
  });

  return {
    props: {
      products: cartProducts,
    },
  };
}
