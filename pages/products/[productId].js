import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { getProductById } from '../../database/connect';

// this was the first way trying to get the data
// import { products } from '../../database/products';

const productStyles = css`
  border-radius: 5px;
  border: 1px solid black;
  padding: 30px;

  & + & {
    margin-top: 30px;
  }
`;

export default function Product(props) {
  return (
    <>
      {}
      <div key={`product-${props.product.id}`} css={productStyles}>
        <Head>
          <title>{props.product.name}</title>
          <meta
            name="description"
            content={`${props.product.name} is a ${props.product.type}`}
          />
        </Head>
        <h2>{props.product.name}</h2>

        <Image
          src={`/${props.product.id}-${props.product.name}2.png`}
          alt=""
          width="500"
          height="400"
        />

        <div>Size: {props.product.size}</div>
        <div>Prize: {props.product.prize},- (without frame) </div>
        <button>Add To Cart</button>
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
