import { css, Global } from '@emotion/react';
import Header from '../components/Header';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
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
        `}
      />
      {/* layout component wraped around */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
