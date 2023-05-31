import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import axiosInstance from '../../utils/axios';

export default function Shop({ blogs }) {
  return (
    <>
      <Head>
        <title>Blog - Delano Bats</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Delano Bats" key="title" />
        <meta
          name="description"
          content="Get on deck for FZN Insider updates and news as we get ready to launch The Original Gamer BBCOR bat, the first Delano Bat to use FZN Technology."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.svg" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden">
          <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
            <img
              src="/team.webp"
              className="object-cover object-center w-[100%] h-[100%]"
              alt="hero background"
            />
          </div>
          <div className="z-[1] text-heading-lg h-[400px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <div className="flex flex-col items-center py-2">
              <h1 className="text-center text-heading-sm sm:text-heading-md md:text-heading-lg font-sans md:pb-2 leading-[3rem]">
                <span className="text-heading-lg font-bold">
                  Get <span className="font-cursive">on</span> Deck
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex py-12 mb-12">
          <div className="max-w-[800px] flex flex-col items-center text-center">
            <div className="flex flex-wrap flex-col lg:flex-row justify-start">
              {blogs.map((blog, index) => {
                return (
                  <div
                    className="flex flex-col flex-start text-left w-[100%] my-4 lg:m-4 md:w-[500px] lg:w-[300px] space-y-4 box-shadow--4 rounded-lg overflow-hidden"
                    key={index}
                  >
                    <Link href={'blog/' + blog.id} width="100%">
                      <div className="relative w-[100%] h-[190px] md:w-[500px] md:h-[300px] lg:w-[300px] lg:h-[210px]">
                        <img
                          src={'https://store-jo3a1dt1.mybigcommerce.com' + blog.thumbnail_path}
                          className="object-cover object-center w-[100%] h-[100%]"
                          alt="blog thumbnail"
                        />
                      </div>
                      <div className="px-4 pb-4 pt-2">
                        <p className="text-white-900 text-body-md mb-1">
                          {new Date(blog.published_date_iso8601).toDateString()}
                        </p>
                        <p className="text-body-lg font-thin leading-7 text-blue-900">
                          {blog.title}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:block w-[300px]">
            <h3 className="text-heading-sm">Latest Articles</h3>
            <div className="flex flex-col justify-start px-4 sm:px-0">
              {blogs.map((blog, index) => {
                return (
                  <div className="text-left w-[300px] my-1" key={index}>
                    <Link href={'blog/' + blog.id} width="100%" className="flex items-center">
                      <div className="relative w-[180px] h-[80px]">
                        <img
                          src={'https://store-jo3a1dt1.mybigcommerce.com' + blog.thumbnail_path}
                          className="object-cover object-center min-w-[100%] h-[100%]"
                          alt="blog thumbnail"
                        />
                      </div>
                      <div className="px-4 pb-4 pt-2 w-[250px]">
                        <p className="text-white-900 text-body-sm leading-6">
                          {new Date(blog.published_date_iso8601).toDateString()}
                        </p>
                        <p className="text-body-md font-thin leading-6 text-blue-900">
                          {blog.title}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axiosInstance.get('/v2/blog/posts', {
    params: {
      is_published: true,
    },
  });

  const blogs = res.data;

  // Pass data to the page via props
  return { props: { blogs } };
}
