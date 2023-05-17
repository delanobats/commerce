import Head from 'next/head';
import { team } from './index';

export default function TeamDetail({ teamMember, slug }) {
  return (
    <>
      <Head>
        <title>Delano Bats - Team Details</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="ARKH" key="title" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.webp" />
      </Head>

      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center h-[250px] md:h-[300px] lg:h-[400px] relative overflow-hidden">
          <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
            <img
              src="/blog-1.webp"
              className="object-cover object-center w-[100%] h-[100%]"
              alt="hero background"
            />
          </div>
          <div className="z-[1] text-heading-lg h-[400px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <div className="flex flex-col items-center py-2">
              <h1 className="text-center text-heading-sm sm:text-heading-md md:text-heading-lg font-sans md:pb-2 leading-[3rem]">
                <span className="text-heading-sm font-cursive md:text-heading-md lg:text-heading-lg font-bold">
                  {teamMember.firstname} {teamMember.lastname}
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] flex justify-center flex-col-reverse md:flex-row md:space-x-8 w-[100%] px-4 py-8 text-left">
          <div className="md:max-w-[550px] lg:max-w-[800px] w-[100%] flex flex-col">
            <h1 className="text-heading-lg leading-[3.5rem]">
              {teamMember.firstname} {teamMember.lastname}
            </h1>
            <p className="text-body-lg">{teamMember.job}</p>
            <div
              className="font-thin mt-4 mb-20 blog-body"
              dangerouslySetInnerHTML={{ __html: teamMember.description }}
            ></div>
          </div>
          <div className="w-[280px] pb-8 md:pb-0 sm:w-[400px] md:w-[300px] lg:w-[400px]">
            <img src={teamMember.image} className="w-[100%]" alt="hero background" />
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSidePaths = async () => {
  const paths = [];

  team.forEach((t) => {
    paths.push(t.url);
  });

  return {
    paths,
    fallback: false,
  };
};

export const getServerSideProps = async ({ params }) => {
  let slug = params.slug;

  const teamMember = team.filter((t) => t.url == `/${slug}`)[0];

  return {
    props: {
      slug,
      teamMember,
    },
  };
};
