import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const imageContainerStyles = css`
  display: grid;
  grid-template-columns: 270px 270px;
  grid-template-rows: 270px 270px;
  grid-gap: 13px;
  justify-content: center;
`;
const imageStyles = css`
  border: 4px solid black;
  border-radius: 2px;
`;
const h1Styles = css`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Kandinsky AI</title>
        <meta name="description" content="Overview Product page" />
      </Head>
      <h1 css={h1Styles}>Kandinsky AI Art Posters</h1>
      <div css={imageContainerStyles}>
        <div css={imageStyles}>
          <Image src="/Kandinsky-18.jpg" alt="" width="270" height="270" />
        </div>
        <div css={imageStyles}>
          <Image src="/Kandinsky-sea.jpg" alt="" width="270" height="270" />
        </div>
        <div css={imageStyles}>
          <Image src="/Kandinsky-dragon.jpg" alt="" width="270" height="270" />
        </div>
        <div css={imageStyles}>
          <Image
            src="/Kandinsky-spaceship.jpg"
            alt=""
            width="270"
            height="270"
          />
        </div>
      </div>
    </>
  );
}
