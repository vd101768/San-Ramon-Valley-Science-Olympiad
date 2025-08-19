import '@styles/globals.css';
import Layout from '@components/Layout';
import NextNProgress from 'nextjs-progressbar';

function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#56c596" options={{ showSpinner: false }} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
