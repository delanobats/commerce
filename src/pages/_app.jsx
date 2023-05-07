import { CartProvider } from '../contexts/cart';
import { ManagedUIContext } from '../contexts/managed-ui';
import Layout from '../layouts/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <ManagedUIContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </CartProvider>
  );
}
