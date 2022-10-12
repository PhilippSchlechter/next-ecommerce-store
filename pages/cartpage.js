import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/connect';

export default function Cartpage(props) {
  return (
    <>
      <Head>
        <title>Cart Kandinsky AI</title>
        <meta name="description" content="Cart Page" />
      </Head>

      {props.products.map((product) => {
        return (
          <div key={`product-${product.id}`}>
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
            <div>🛒{product.amount}</div>{' '}
            {/* <div>
              {getParsedCookie('amount')?.find(
                (cookieProduct) => cookieProduct.id === product.id,
              )?.amount || 0}
            </div> */}
          </div>
        );
      })}
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
        )?.amount || null /* null or 0 ? */,
    };
  });

  return {
    props: {
      products: cartProducts,
    },
  };
}
