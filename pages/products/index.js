import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { products } from '../../database/products';

const productStyles = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 30px;

  & + & {
    margin-top: 30px;
  }
`;

export default function Products(props) {
  return (
    <>
      <Head>
        <title>Product List</title>
        <meat name="description" content="List of all products" />
      </Head>
      <h1>Products</h1>

      {props.products.map((product) => {
        return (
          <div key={`product-${product.id}`} css={productStyles}>
            <h2>{product.name}</h2>
            <Image
              src={`/${product.id}-${product.name}.jpg`}
              alt=""
              width="200"
              height="200"
            />
            <div>Size: {product.size}</div>
            <div>Prize: {product.prize}</div>
          </div>
        );
      })}
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      products: products,
    },
  };
}
