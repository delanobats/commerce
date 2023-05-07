import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import axiosInstance from '../../utils/axios';

export default function Shop() {
  return (
    <>
      <Head>
        <title>Delano Bats - Blog</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="ARKH" key="title" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.webp" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        Blog
      </div>
    </>
  );
}
