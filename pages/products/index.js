import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/connect';

// this was the first way trying to get the data
// import { products } from '../../database/products';

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
          <div
            data-test-id={`product-${product.id}`}
            key={`product-${product.id}`}
            css={productStyles}
          >
            <h2>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </h2>
            <Link href={`/products/${product.id}`}>
              <a>
                <Image
                  src={`/${product.id}-${product.name}.jpg`}
                  alt=""
                  width="200"
                  height="200"
                />
              </a>
            </Link>
            <div>Size: {product.size}</div>
            <div>Price: {product.prize}</div>
          </div>
        );
      })}
    </>
  );
}
// change to async function and get the data from the database and not the file
export async function getServerSideProps() {
  const products = await getProducts();
  console.log('get products', getProducts);
  return {
    props: {
      products: products,
    },
  };
}
