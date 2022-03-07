import '../styles/globals.css';
// import { NextIntlProvider } from 'next-intl';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    // <NextIntlProvider messages={pageProps.messages}>
    <Component {...pageProps} />
    // </NextIntlProvider>
  );
}

export default appWithTranslation(MyApp);
