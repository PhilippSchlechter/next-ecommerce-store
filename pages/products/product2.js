import Head from 'next/head';
import Image from 'next/image';
import css from 'styled-jsx/css';

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
        <Image src="/Kandinsky-sea2.png" alt="" width="700" height="550" />
      </div>
    </>
  );
}
