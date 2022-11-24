import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const imageContainerStyles = css`
  display: grid;
  grid-template-columns: 270px 270px;
  grid-template-rows: 270px 270px;
  grid-gap: 20px;
  justify-content: center;
`;
const imageStyles = css`
  border: 2px solid #2f3330;
  border-radius: 2px;
`;
const h1Styles = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Kandinsky AI Art</title>
        <meta name="description" content="Overview Product page" />
      </Head>
      <h1 css={h1Styles}>
        Kandinsky <br /> AI Art Posters
      </h1>
      <div css={imageContainerStyles}>
        <div css={imageStyles}>
          <Link href="/products/product1">
            <Image
              src="/1-tower.jpg"
              alt="AI generated poster of a tower"
              width="270"
              height="270"
            />
          </Link>
        </div>
        <div css={imageStyles}>
          <Link href="/products/product2">
            <Image
              src="/2-sea.jpg"
              alt="AI generated poster of the sea"
              width="270"
              height="270"
            />
          </Link>
        </div>
        <div css={imageStyles}>
          <Link href="/products/product3">
            <Image
              src="/3-dragon.jpg"
              alt="AI generated poster of a dragon"
              width="270"
              height="270"
            />
          </Link>
        </div>
        <div css={imageStyles}>
          <Link href="/products/product4">
            <Image
              src="/4-spaceship.jpg"
              alt="AI generated poster of a spaceship"
              width="270"
              height="270"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
