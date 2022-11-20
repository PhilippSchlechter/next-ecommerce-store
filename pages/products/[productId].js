import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { getProductById, getProducts } from '../../database/connect';
import { positiveCartValues } from '../../utils/cart';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookie';

// this was the first way trying to get the data
// import { products } from '../../database/products';

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
  const [cart, setCart] = useState(1);

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
        <h2 css={h2Styles}>AI {props.product.name}</h2>
        <div css={imageContainerStyles}>
          <Image
            src={`/${props.product.id}-${props.product.name}2.png`}
            alt=""
            width="500"
            height="400"
          />
        </div>
        <div css={productInformationStyles}>
          <div>Size: {props.product.size}</div>
          <div>Type: {props.product.type}</div>
          <div data-test-id="product-price">
            Price: {props.product.prize},- (frame not included)
          </div>
        </div>
        {/*  old version of buttons
        <button onClick={() => setCart(cart - 1)}>➖</button>
        <button onClick={() => setCart(cart + 1)}>➕</button> */}{' '}
        <button
          onClick={() => {
            // initialize first click with: amount 1
            /* const currentCookieValue = getParsedCookie('amount');
            if (!currentCookieValue) {
              setStringifiedCookie('amount', [
                { id: props.product.id, amount: 1 },
              ]);
              return;
            }
            const foundCookie = currentCookieValue.find(
              (cookieProduct) => cookieProduct.id === props.product.id,
            );
            if (!foundCookie) {
              currentCookieValue.push({ id: props.product.id, amount: 1 });
            } else {
              foundCookie.amount++;
            }
            setStringifiedCookie('amount', currentCookieValue); */
            setCart(cart + 1);
          }}
        >
          ➕
        </button>{' '}
        <span>{positiveCartValues(cart)}</span>{' '}
        <button
          onClick={() => {
            /* const currentCookieValue = getParsedCookie('amount');
            if (!currentCookieValue) {
              setStringifiedCookie('amount', [
                { id: props.product.id, amount: -1 },
              ]);
              return;
            }

            const foundCookie = currentCookieValue.find(
              (cookieProduct) => cookieProduct.id === props.product.id,
            );

            if (!foundCookie) {
              currentCookieValue.push({ id: props.product.id, amount: -1 });
            } else {
              foundCookie.amount--;
            }
            setStringifiedCookie('amount', currentCookieValue); */
            setCart(cart - 1);
          }}
        >
          ➖
        </button>
        <button
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
              (cookieProduct) => cookieProduct.id === props.product.id,
            );

            if (!foundCookie) {
              currentCookieValue.push({ id: props.product.id, amount: cart });
            } else {
              foundCookie.amount = foundCookie.amount + cart;
            }

            setStringifiedCookie('amount', currentCookieValue);
          }}
        >
          Add To Cart ✔️
        </button>
        <div>
          {/* Error: Text content does not match server-rendered HTML. use other method? but how with the database */}
          {/* {getParsedCookie('amount')?.find(
            (cookieProduct) => cookieProduct.id === props.product.id,
          )?.amount || 0} */}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const productId = parseInt(context.query.productId);

  /*
  this was the first way trying to get the data:

  const foundProduct = products.find((product) => {
    return product.id === productId;
  }); */

  const foundProduct = await getProductById(productId);

  const parsedCookies = context.req.cookies.amount
    ? JSON.parse(context.req.cookies.amount)
    : [];
  const products = (await getProducts()).map((product) => {
    return {
      ...product,
      amount:
        parsedCookies.find(
          (cookieProductObject) => product.id === cookieProductObject.id,
        )?.amount || 0 /* null or 0 ? */,
    };
  });

  return {
    props: {
      product: foundProduct,
      products: products,
    },
  };
}
