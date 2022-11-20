import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookie';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState();

  useEffect(() => {
    const parsedCookie = getParsedCookie('amount');
    if (parsedCookie) {
      setCart(parsedCookie);
    }
  }, []);

  useEffect(() => {
    if (typeof cart !== 'undefined') {
      setStringifiedCookie('amount', cart);
    }
  }, [cart]);

  console.log('Appcart', cart);

  return (
    <>
      {/* globalstyle for all pages */}
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;
            background-color: #f5f3eb;
          }
          a {
            text-decoration: none;
            color: black;
          }
        `}
      />

      {/* layout component wraped around */}
      <Layout>
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </Layout>
    </>
  );
}

export default MyApp;
