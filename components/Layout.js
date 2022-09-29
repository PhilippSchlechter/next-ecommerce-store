import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  padding: 20px 20px;
`;

export default function Layout(props) {
  return (
    <>
      {/* header component for all pages */}
      <Header />
      {/* main styles for all pages */}
      <main css={mainStyles}>{props.children}</main>
      {/* footer component for all pages */}
      <Footer />
    </>
  );
}
