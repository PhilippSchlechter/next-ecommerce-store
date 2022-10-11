import Head from 'next/head';
import { getProducts } from '../database/connect';

export default function Cartpage() {
  return (
    <>
      <Head>
        <title>Cart Kandinsky AI</title>
        <meta name="description" content="Cart Page" />
      </Head>
      Cartpage in progress
      {}
    </>
  );
}
export async function getServerSideProps() {
  const products = await getProducts();
  console.log('get products', getProducts);
  return {
    props: {
      products: products,
    },
  };
}
