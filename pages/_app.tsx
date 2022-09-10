import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { useState } from 'react';
import GlobalStyle from '../components/globalstyles';
import { Reset } from 'styled-reset';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(window.localStorage.getItem('cartItems')) || []
  // );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Header />
        <Footer />
      </ThemeProvider>
    </>
  );
}
