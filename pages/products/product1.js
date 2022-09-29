import Head from 'next/head';
import Image from 'next/image';
import css from 'styled-jsx/css';

const productImageStyles = css`
  display: flex;
  justify-content: center;
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
        <Image src="/Kandinsky-tower3.png" alt="" width="600" height="600" />
      </div>
    </>
  );
}
