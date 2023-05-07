import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import axiosInstance from '../utils/axios';
import { BasicButton } from '../components/button/BasicButton';
import { useUI } from '../contexts/managed-ui';
import { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { CartContext } from '../contexts/cart';

export default function Shop({ product, variants }) {
  const { openSidebar, setSidebarView } = useUI();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(CartContext);
  // console.log('product', product);
  // console.log('variants', variants);

  const addToCart = () => {
    console.log('addToCart');
    setLoading(true);
    setError(null);
    dispatch({ type: 'FETCH_REQUEST' });

    axios
      .post('/api/cart', {
        line_items: [
          {
            quantity: 2,
            product_id: 971,
            variant_id: 44636,
          },
        ],
      })
      .then((res) => {
        console.log('res', res);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data.data.data });
        Cookies.set('bc_cartId', res.data.data.data.id, { expires: 7 });
        setSidebarView('CART_VIEW');
        openSidebar();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        setError({
          ...error,
          message: 'Could not add item to cart. Please try again.',
        });
      });
  };

  return (
    <>
      <Head>
        <title>Delano Bats - Shop</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="ARKH" key="title" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.webp" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        shop
        {/* <BasicButton label="Add to Cart" onClick={addToCart} /> */}
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const productRes = await axiosInstance.get('/v3/catalog/products', {
    params: {
      sku: 'THX-1138',
      include: 'images',
    },
  });
  const product = productRes.data.data[0];

  const variantsRes = await axiosInstance.get(`v3/catalog/products/${product.id}/variants`);

  // https://api.bigcommerce.com/stores/{store_hash}/v3/catalog/products/{product_id}/variants

  const variants = variantsRes.data.data;

  // Pass data to the page via props
  return { props: { product, variants } };
}
