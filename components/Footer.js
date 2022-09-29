import { css } from '@emotion/react';

const footerStyles = css`
  margin-top: 100px;
  border-top: 2px solid black;
  padding: 10px;
`;
/* footer component exported to layout */
export default function Footer() {
  return <footer css={footerStyles}>Copyrights K AI Art 2022</footer>;
}
