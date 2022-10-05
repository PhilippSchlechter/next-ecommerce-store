import Head from 'next/head';
import Image from 'next/image';
import css from 'styled-jsx/css';

/* this was the first attempt creating different pages, will be deleted at the end of the project */

const productImageStyles = css`
  display: flex;
  justify-content: center;
`;

export default function Product2() {
  return (
    <>
      <Head>
        <title>City</title>
        <meta name="description" content="Product Page 2" />
      </Head>
      <h1>Kandinsky AI Sea </h1>
      <div css={productImageStyles}>
        <Image src="/Kandinsky-sea2.png" alt="" width="600" height="450" />
      </div>
      <div>Prize: 111-,</div>
      <button>Add To Cart</button>
    </>
  );
}
