import Head from 'next/head';
import Image from 'next/image';
import css from 'styled-jsx/css';

const productImageStyles = css`
  display: flex;
  justify-content: center;
`;

export default function Product4() {
  return (
    <>
      <Head>
        <title>Spaceship</title>
        <meta name="description" content="Product Page 4" />
      </Head>
      <h1>Kandinsky AI Spaceship </h1>
      <div css={productImageStyles}>
        <Image
          src="/Kandinsky-spaceship2.png"
          alt=""
          width="600"
          height="450"
        />
      </div>
      <div>Prize: 111-,</div>
      <button>Add To Cart</button>
    </>
  );
}
