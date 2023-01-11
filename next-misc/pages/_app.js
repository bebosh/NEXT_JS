// relative paths modified in jsconfig.json where the base url is set
import 'styles/globals.css';
import 'styles/layout.css';
import Layout from 'components/layout';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout;
  const layout = getLayout ? (
    getLayout(<Component {...pageProps} />)
  ) : (
    <Component {...pageProps} />
  );
  return <Layout>{layout}</Layout>;
}