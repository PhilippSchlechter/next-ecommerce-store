import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/connect';

const productStyles = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
          <div
            data-test-id={`product-${product.id}`}
            key={`product-${product.id}`}
            css={productStyles}
          >
            <h2>
              <Link href={`/products/${product.id}`}>
                <div>{product.name}</div>
              </Link>
            </h2>

            <div>
              <Image
                src={`/${product.id}-${product.name}.jpg`}
                alt="AI generated poster products"
                width="200"
                height="200"
              />
            </div>

            <div>Size: {product.size}</div>
            <div>Price: {product.price}</div>
          </div>
        );
      })}
    </>
  );
}
// change to async function and get the data from the database and not the file
export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}
