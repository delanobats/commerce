import Image from 'next/image';
import Head from 'next/head';
import { BasicButton } from '../components/button/BasicButton';
import Link from 'next/link';
import axiosInstance from '../utils/axios';

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Delano Bats</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="ARKH" key="title" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.webp" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden">
          <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
            <img
              src="/weather-wood.webp"
              className="object-cover object-center w-[100%] h-[100%]"
              alt="hero background"
            />
          </div>
          <div className="z-[1] text-heading-lg h-[250px]  md:h-[300px] lg:h-[350px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <div className="flex flex-col items-center py-2">
              <Image src="/db-logo.webp" alt="Delano Bat" width="600" height="300" />
            </div>
          </div>
        </div>
        {/* <div className="max-w-[1440px] flex flex-col items-center py-16 text-center px-4">
          <p className="text-body-lg font-cursive text-orange-500">Revolution of the bat</p>
          <h2 className="text-heading-lg text-blue-900">The Original Gamer</h2>
          <p className="max-w-[600px] py-4 text-blue-900">
            The OG is a <span className="font-semibold">true wood bat</span> that gives hitters the
            unrivaled feel, classic sound and clean look of a traditional stick. It also delivers
            MAX trampoline effect allowed by BBCOR across a HUGE sweet spot of the 2 5/8’ barrel.
          </p>
          <Image
            src="/bat-image.webp"
            width="800"
            height="90"
            alt="baseball bat"
            className="py-20"
          />
          <BasicButton label="Shop now" />
        </div> */}
        {/* <div className="w-[100%] flex justify-center bg-light-bg">
          <div className="max-w-[1440px] flex flex-col items-center py-12 text-center">
            <p className="text-body-lg font-cursive text-orange-500">Features</p>
            <h2 className="text-heading-lg text-blue-900">Thoughtfully Designed</h2>
            <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-6 justify-center py-12">
              <div className="flex flex-col items-center w-[300px] space-y-2">
                <Image src="/surface.webp" width="300" height="300" alt="Hitting surface" />
                <h3 className="font-bold pt-2 text-body-md text-blue-900">Hitting Surface</h3>
                <p className="text-blue-900">
                  Massive hitting surface area and sweet spot with a 2-5/8{'"'} diameter barrel and
                  continuous internal carbon fiber fusion barrel.
                </p>
              </div>
              <div className="flex flex-col items-center w-[300px] space-y-2">
                <Image src="/vibration.webp" width="300" height="300" alt="Vibration" />
                <h3 className="font-bold pt-2 text-body-md text-blue-900">Vibration</h3>
                <p className="text-blue-900">
                  changing this copy
                </p>
              </div>
              <div className="flex flex-col items-center w-[300px] space-y-2">
                <Image src="/performance.webp" width="300" height="300" alt="Performance" />
                <h3 className="font-bold pt-2 text-body-md text-blue-900">Performance</h3>
                <p className="text-blue-900">
                  Maximized performance with look, sound and feel of wood. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="max-w-[1440px] flex flex-col items-center py-12 text-center px-4">
          <p className="text-heading-sm font-cursive text-orange-500">Coming this summer</p>
          <h2 className="text-heading-lg text-blue-900">FZN Technology</h2>
          <p className="max-w-[600px] pt-2 text-blue-900">
            For the first time ever, hitters can have a bat in their bag that delivers MAXIMUM BBCOR
            performance without sacrificing the unrivaled feel, classic sound and clean look of a
            true wood stick. All thanks to FZN Technology.
          </p>
          <Image
            src="/fzn-tech-patent.webp"
            width="450"
            height="330"
            alt="baseball bat"
            className="py-20"
          />
          <BasicButton label="Learn more" href="/technology" />
        </div>
        <div className="w-[100%] flex justify-center items-center bg-light-bg bg-cover py-0">
          <div className="max-w-[1440px] flex flex-col items-center py-12 text-center">
            <p className="text-heading-sm font-cursive text-orange-500">Blog</p>
            <h2 className="text-heading-lg text-blue-900">Get on Deck</h2>
            <div className="flex space-y-8 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row justify-center py-6">
              {blogs.map((blog, index) => {
                return (
                  <div
                    className="flex flex-col flex-start text-left w-[300px] md:w-[500px] lg:w-[300px] space-y-4 box-shadow--4 rounded-lg overflow-hidden"
                    key={index}
                  >
                    <Link href={'blog/' + blog.id} width="100%">
                      <div className="relative w-[300px] h-[210px] md:w-[500px] md:h-[300px] lg:w-[300px] lg:h-[210px]">
                        <img
                          src={'https://delanobats.com' + blog.thumbnail_path}
                          className="object-cover object-center w-[100%] h-[100%]"
                          alt="Hitting surface"
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
        </div>
        <div className="max-w-[1440px] flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 py-12 pb-40 text-center px-4">
          <div className=" relative">
            <Image src="/magazine.webp" width={400} height={100} alt="delano bat magazine" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-heading-sm font-cursive text-orange-500">Our Story</p>
            <h2 className="text-heading-lg text-blue-900">Delano Bat Company</h2>
            <p className="max-w-[600px] py-4 text-blue-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <BasicButton label="Read our story" href="/about" />
          </div>
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await axiosInstance.get('/v2/blog/posts', {
    params: {
      is_published: true,
      limit: 3,
    },
  });

  // const productRes = await axiosInstance.get('/v3/catalog/products', {
  //   params: {
  //     sku: 'THX-1138',
  //     include: 'images',
  //   },
  // });

  const blogs = res.data;
  // const product = productRes.data.data[0];

  // Pass data to the page via props
  return { props: { blogs } };
}
