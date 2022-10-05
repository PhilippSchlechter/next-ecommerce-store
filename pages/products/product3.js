import Head from 'next/head';
import Image from 'next/image';
import css from 'styled-jsx/css';

/* this was the first attempt creating different pages, will be deleted at the end of the project */

const productImageStyles = css`
  display: flex;
  justify-content: center;
`;

export default function Product3() {
  return (
    <>
      <Head>
        <title>Dragon</title>
        <meta name="description" content="Product Page 3" />
      </Head>
      <h1>Kandinsky AI Dragon </h1>
      <div css={productImageStyles}>
        <Image src="/Kandinsky-dragon2.png" alt="" width="600" height="450" />
      </div>
      <div>Prize: 111-,</div>
      <button>Add To Cart</button>
    </>
  );
}
