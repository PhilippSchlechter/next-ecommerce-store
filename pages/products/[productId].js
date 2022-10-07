import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Cart from '../../components/Cart';
import { getProductById } from '../../database/connect';
import { positiveCartValues } from '../../utils/cart';

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
  const [cart, setCart] = useState(0);
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
        <button onClick={() => setCart(cart - 1)}>➖</button>
        <button onClick={() => setCart(cart + 1)}>➕</button>{' '}
        <span>{positiveCartValues(cart)}</span>{' '}
        <button data-test-id="product-add-to-cart">Add To Cart ✔️</button>
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

  return {
    props: {
      product: foundProduct,
    },
  };
}
