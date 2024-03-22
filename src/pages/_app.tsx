import GlobalStyle from '@/style/GlobalStyle';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/style/theme';
import Layout from '@/components/shared/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}
