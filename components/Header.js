import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  margin: 20px 10px;
  padding: 25px;

  a {
    text-decoration: none;
    color: black;
  }

  > a + a {
    margin-left: 20px;
  }
`;
/* header component exported to layout */
export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <Link href="/">Home</Link>
        <Link href="/products"> Products</Link>
        <Link href="/cartpage">🛒Cart</Link>
      </nav>
    </header>
  );
}
