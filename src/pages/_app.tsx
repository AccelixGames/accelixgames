import GlobalStyle from '@/style/GlobalStyle';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/style/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
