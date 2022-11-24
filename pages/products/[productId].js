import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { getProductById, getProducts } from '../../database/connect';
import { positiveCartValues } from '../../utils/cart';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookie';

const productStyles = css`
  border-radius: 5px;
  border: 1px solid black;
  padding: 30px;

  & + & {
    margin-top: 30px;
  }
  button {
  }
`;
const h2Styles = css`
  margin-bottom: 30px;
`;
const imageContainerStyles = css``;

const productInformationStyles = css`
  margin: 10px 0px 10px 0px;
`;

export default function Product(props) {
  const [cartAmount, setCartAmount] = useState(1);

  return (
    <>
      {}
      <div key={`product-${props.product.id}`} css={productStyles}>
        <Head>
          <title>AI {props.product.name}</title>
          <meta
            name="description"
            content={`${props.product.name} is a ${props.product.type}`}
          />
        </Head>
        <h2 css={h2Styles}>
          <div>AI {props.product.name}</div>
        </h2>
        <div css={imageContainerStyles}>
          <Image
            src={`/${props.product.id}-${props.product.name}2.png`}
            alt="AI generated posters in Kandinsky style"
            width="500"
            height="400"
          />
        </div>
        <div css={productInformationStyles}>
          <div>Size: {props.product.size}</div>
          <div>Type: {props.product.type}</div>
          <div data-test-id="product-price">
            Price: {props.product.price},- (frame not included)
          </div>
        </div>
        <button
          onClick={() => {
            setCartAmount(cartAmount + 1);
          }}
        >
          ➕
        </button>{' '}
        <span>{positiveCartValues(cartAmount)}</span>{' '}
        <button
          onClick={() => {
            setCartAmount(cartAmount - 1);
          }}
        >
          ➖
        </button>
        <button
          data-test-id="product-add-to-cart"
          onClick={() => {
            if (!props.cart) {
              return props.setCart([
                {
                  id: props.product.id,
                  cart: cartAmount,
                },
              ]);
            }
            const currentCookieValue = getParsedCookie('cart');
            if (!currentCookieValue) {
              setStringifiedCookie('cart', [
                { id: props.product.id, cart: cartAmount },
              ]);
              return;
            }

            const foundCookie = props.cart.find(
              (cookieProduct) => cookieProduct.id === props.product.id,
            );

            if (!foundCookie) {
              props.cart.push({
                id: props.product.id,
                cart: cartAmount,
              });
              setStringifiedCookie('cart', props.cart);
            } else {
              foundCookie.cart = foundCookie.cart + cartAmount;
            }
            const newQuantity = [...props.cart];

            props.setCart(newQuantity);
            setStringifiedCookie('cart', currentCookieValue);
          }}
        >
          Add To Cart ✔️
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const productId = parseInt(context.query.productId);

  const foundProduct = await getProductById(productId);

  const parsedCookies = context.req.cookies.cart
    ? JSON.parse(context.req.cookies.cart)
    : [];
  const products = (await getProducts()).map((product) => {
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
      product: foundProduct,
      products: products,
    },
  };
}
