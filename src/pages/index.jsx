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
        <meta property="og:title" content="Delano Bats" key="title" />
        <meta
          name="description"
          content="For the first time ever, hitters can have a bat in their bag that delivers MAXIMUM BBCOR
          performance without sacrificing the unrivaled feel, classic sound and clean look of a
          true wood stick. All thanks to FZN Technology."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.svg" />
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
              <Image src="/db-logo.webp" alt="Delano Bat Company" width="600" height="300" />
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
          <p className="text-heading-sm lg:text-heading-md font-cursive text-orange-500">
            Coming Soon
          </p>
          <h2 className="text-heading-lg lg:text-[56px] text-blue-900 max-w-[600px] mb-3 mt-1">
            FZN Technology
          </h2>
          <p className="max-w-[700px] pt-2 text-blue-900">
            For the first time ever, hitters can enjoy the unrivaled feel, classic sound and clean
            look of a true wood stick that also delivers MAXIMUM BBCOR performance.
          </p>
          <p className="max-w-[600px] pt-2 text-blue-900">All thanks to FZN Technology.</p>
          <Image
            src="/fzn-tech-patent.webp"
            width="600"
            height="330"
            alt="picking from a selection of bats"
            className="py-12"
          />
          <BasicButton label="Read about FZN" href="/technology" />
        </div>
        <div className="w-[100%] flex justify-center items-center bg-light-bg bg-cover py-0">
          <div className="max-w-[1440px] flex flex-col items-center py-12 text-center">
            <p className="text-heading-sm lg:text-heading-md font-cursive text-orange-500">
              Our Blog
            </p>
            <h2 className="text-heading-lg lg:text-[56px] text-blue-900  max-w-[600px] mb-3 mt-1">
              On Deck
            </h2>
            <div className="flex space-y-8 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row justify-center py-6">
              {blogs.map((blog, index) => {
                return (
                  <div
                    className="flex flex-col flex-start text-left w-[300px] md:w-[500px] bg-white-50 lg:w-[300px] space-y-4 box-shadow--4 rounded-lg overflow-hidden"
                    key={index}
                  >
                    <Link href={'blog/' + blog.id} width="100%">
                      <div className="relative w-[300px] h-[210px] md:w-[500px] md:h-[300px] lg:w-[300px] lg:h-[210px]">
                        <img
                          src={'https://store-jo3a1dt1.mybigcommerce.com' + blog.thumbnail_path}
                          className="object-cover object-center w-[100%] h-[100%]"
                          alt="blog thumnbnail"
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
        <div className="max-w-[1440px] flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 py-12  text-center px-4">
          <div className=" relative">
            <Image src="/magazine.webp" width={400} height={100} alt="delano bat magazine" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-heading-sm lg:text-heading-md font-cursive text-orange-500">
              Our Story
            </p>
            <h2 className="text-heading-lg lg:text-[56px] text-blue-900  max-w-[600px] mb-3 mt-1">
              Delano Bat Company
            </h2>
            <p className="max-w-[600px] pb-6 text-blue-900">
              Delano is a small company with a big vision - to bring innovation to the great game of
              baseball while staying true to the unique roots, traditions and history of America's
              Pastime.
            </p>
            <BasicButton label="Read our story" href="/about" />
          </div>
        </div>
        <div className="w-[100%] py-20 px-8 flex flex-col items-center justify-center">
          <p className="text-heading-sm lg:text-heading-md font-cursive text-orange-500">
            Follow us
          </p>
          <h2 className="text-heading-lg lg:text-[56px] text-blue-900 mb-4 text-center max-w-[600px] mt-1">
            Check us out on Instagram
          </h2>
          <iframe
            src="https://cdn.lightwidget.com/widgets/967a43eed19e5442b19367e737f23d52.html"
            title="Instagram posts"
            allowtransparency="true"
            className="w-[100%] h-[420px] sm:w-[480px] sm:h-[580px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] xl:w-[1200px] xl:h-[1300px]"
          ></iframe>
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
