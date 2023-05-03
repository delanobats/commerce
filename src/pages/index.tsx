import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/layouts/Layout';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Delano Bats</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="ARKH" key="title" />
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.webp" />
      </Head>
      <div>Main Content</div>
    </Layout>
  );
}
