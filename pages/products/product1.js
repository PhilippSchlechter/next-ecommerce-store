import Head from 'next/head';
import Image from 'next/image';
import css from 'styled-jsx/css';

/* this was the first attempt creating different pages, will be deleted at the end of the project */

const productImageStyles = css`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

export default function Product1() {
  return (
    <>
      <Head>
        <title>Tower</title>
        <meta name="description" content="Product Page 1" />
      </Head>
      <h1>Kandinsky AI Tower </h1>
      <div css={productImageStyles}>
        <Image src="/Kandinsky-tower3.png" alt="" width="500" height="500" />
      </div>
      <div>Prize: 111-,</div>
      <button>Add To Cart</button>
    </>
  );
}
