import Image from 'next/image';
import Layout from '../layouts/Layout';
import Head from 'next/head';
import { BasicButton } from '../components/button/BasicButton';
import axios from 'axios';

export default function Home({ blogs, product }) {
  return (
    <Layout>
      <Head>
        <title>Delano Bats</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="ARKH" key="title" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.webp" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center relative min-h-[200px] md:min-h-[380px]">
          <div className="absolute top-0 object-cover object-center w-[100%] h-[100%] z-[0]">
            <Image src="/weather-wood.webp" fill={true} alt="hero background" />
          </div>
          <div className="z-[1] text-heading-lg h-[380px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <Image src="/delano-bat.webp" width="380" height="200" alt="Delano Bat Company Logo" />
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-12 text-center">
          <p className="text-body-md">Revolution of Baseball Bat</p>
          <h2 className="text-heading-md">The Original Gamer</h2>
          <p className="max-w-[600px] py-4">
            The OG is a true wood bat that gives hitters the unrivaled feel, classic sound and clean
            look of a traditional stick. It also delivers MAX trampoline effect allowed by BBCOR
            across a HUGE sweet spot of the 2 5/8’ barrel.
          </p>
          <Image
            src="/bat-image.webp"
            width="800"
            height="90"
            alt="baseball bat"
            className="py-20"
          />
          <BasicButton label="Shop now" />
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-12 text-center">
          <p className="text-body-md">Features</p>
          <h2 className="text-heading-md">Thoughtfully Designed</h2>
          <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-6 justify-center py-12">
            <div className="flex flex-col items-center w-[300px] space-y-4">
              <Image src="/surface.webp" width="300" height="300" alt="Hitting surface" />
              <h3 className="font-bold">Hitting Surface</h3>
              <p>
                Massive hitting surface area and sweet spot with a 2-5/8{'"'} diameter barrel and
                continuous internal carbon fiber fusion barrel.
              </p>
            </div>
            <div className="flex flex-col items-center w-[300px] space-y-4">
              <Image src="/vibration.webp" width="300" height="300" alt="Vibration" />
              <h3 className="font-bold">Vibration</h3>
              <p>
                Optimized vibration damping. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
            <div className="flex flex-col items-center w-[300px] space-y-4">
              <Image src="/performance.webp" width="300" height="300" alt="Performance" />
              <h3 className="font-bold">Performance</h3>
              <p>
                Maximized performance with look, sound and feel of wood. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-12 text-center">
          <p className="text-body-md">FZN Teechnology</p>
          <h2 className="text-heading-md">How is it different?</h2>
          <p className="max-w-[600px] py-4">
            Delano Bat Company has invented FZN Technology - a patented bat design and manufacturing
            process that enables the classic lumber to push up to the limit of BBCOR-allowed
            performance.
          </p>
          <p className="max-w-[600px] py-4">
            Max Pop - Massive Barrel - Huge Sweet Spot in a TRUE Wood Stick
          </p>
          <Image
            src="/fzn-tech-patent.webp"
            width="450"
            height="330"
            alt="baseball bat"
            className="py-20"
          />
          <BasicButton label="Learn more" />
        </div>
        <div className="max-w-[1440px] flex flex-col lg:flew-row items-center space-y-8 lg:space-y-0 lg:space-x-12 py-12 text-center relative">
          <div className="w-[320px] md:w-[500px] h-[300px] relative">
            <Image src="/magazine.webp" fill={true} alt="delano bat magazine" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-body-md">Our Story</p>
            <h2 className="text-heading-md">Delano Bat Company</h2>
            <p className="max-w-[600px] py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <BasicButton label="Meet the team" />
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-12 text-center">
          <p className="text-body-md">Blog</p>
          <h2 className="text-heading-md">Our Latest News</h2>
          <div className="flex space-y-8 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row justify-center py-12">
            {blogs.map((blog, index) => {
              return (
                <div
                  className="flex flex-col flex-start text-left w-[300px] space-y-4 box-shadow--4 rounded-lg"
                  key={index}
                >
                  <div className="relative w-[300px] h-[210px]">
                    <Image
                      src={'https://delanobats.com' + blog.thumbnail_path}
                      fill={true}
                      alt="Hitting surface"
                    />
                  </div>
                  <div className="px-4 pb-6">
                    <p className="text-white-900 text-body-md mb-1">{new Date(blog.published_date_iso8601).toDateString()}</p>
                    <p className="text-body-lg font-thin leading-7">{blog.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await axios.get('https://api.bigcommerce.com/stores/jo3a1dt1/v2/blog/posts', {
    headers: {
      'accept': 'application/json',
      'X-Auth-Token': 'axkiw2t6o9us7bcafi83lxcdzl3f65t',
    },
    params: {
      is_published: true,
      limit: 3,
    },
  });

  const productRes = await axios.get('https://api.bigcommerce.com/stores/jo3a1dt1/v3/catalog/products', {
    headers: {
      accept: 'application/json',
      'X-Auth-Token': 'axkiw2t6o9us7bcafi83lxcdzl3f65t'
    },
    params: {
      sku: 'THX-1138',
      include: 'images' 
    }
  })

  const blogs = res.data;
  const product = productRes.data.data[0];

  // Pass data to the page via props
  return { props: { blogs, product } };
}
