import Head from 'next/head';
import axiosInstance from '../../utils/axios';
import Link from 'next/link';

export default function BlogDetail({ blog, blogs }) {
  return (
    <>
      <Head>
        <title>{blog.title} - Delano Bats</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Delano Bats" key="title" />
        <meta name="description" content={blog.summary} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.svg" />
      </Head>

      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        {blog && (
          <>
            <div className="w-[100%] flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden">
              <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
                <img
                  src={'https://store-jo3a1dt1.mybigcommerce.com' + blog.thumbnail_path}
                  className="object-cover object-center w-[100%] h-[100%]"
                  alt="hero background"
                />
              </div>
              <div className="z-[1] text-heading-lg h-[400px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
                <div className="flex flex-col items-center py-2">
                  <h1 className="text-center text-heading-sm sm:text-heading-md md:text-heading-lg font-sans md:pb-2 leading-[3rem]">
                    <span className="text-heading-sm md:text-heading-md lg:text-heading-lg font-bold">
                      {blog.title}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="max-w-[1440px] flex justify-center lg:space-x-8 w-[100%] px-4 py-8 text-left">
              <div className="max-w-[800px] w-[100%] flex flex-col text-blue-900">
                <h1 className="text-heading-lg leading-[3.5rem]">{blog.title}</h1>
                <p className="text-body-lg">
                  By: {blog.author.split(',')[0]} /{' '}
                  {new Date(blog.published_date_iso8601).toDateString()}
                </p>
                <div
                  className="font-thin mt-4 mb-20 blog-body text-blue-900"
                  dangerouslySetInnerHTML={{ __html: blog.body }}
                ></div>
              </div>
              <div className="hidden lg:block w-[300px]">
                <h3 className="text-heading-sm">Latest Articles</h3>
                <div className="flex flex-col justify-start">
                  {blogs.map((blog, index) => {
                    return (
                      <div className="text-left w-[300px] my-1" key={index}>
                        <Link href={'/blog/' + blog.id} width="100%" className="flex items-center">
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
          </>
        )}
      </div>
    </>
  );
}

export const getServerSidePaths = async () => {
  const paths = [];
  const resBlogs = await axiosInstance.get('/v2/blog/posts', {
    params: {
      is_published: true,
    },
  });

  const blogs = resBlogs.data;

  blogs.forEach((blog) => {
    paths.push('/blog/' + blog.id);
  });

  return {
    paths,
    fallback: false,
  };
};

export const getServerSideProps = async ({ params }) => {
  let slug = params.id;

  const res = await axiosInstance.get(`/v2/blog/posts/${slug}`, {
    params: {
      is_published: true,
    },
  });

  const blog = res.data;

  const resBlogs = await axiosInstance.get('/v2/blog/posts', {
    params: {
      is_published: true,
    },
  });

  const blogs = resBlogs.data;

  return {
    props: {
      blog,
      blogs,
    },
  };
};
