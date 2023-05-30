import Head from 'next/head';
import Image from 'next/image';

export default function Technology() {
  return (
    <>
      <Head>
        <title>Delano Bats - Technology</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Delano Bats" key="title" />
        <meta
          name="description"
          content="Delano Bat Company has invented FZN Technology - a patented bat design and
                manufacturing process that enables the classic lumber to push up to the limit of
                BBCOR-allowed performance. The first of its kind!"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.svg" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden">
          <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
            <img
              src="/fzn-tech.webp"
              className="object-cover object-center w-[100%] h-[100%]"
              alt="hero background"
            />
          </div>
          <div className="z-[1] text-heading-lg h-[400px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <div className="flex flex-col items-center py-2">
              <h1 className="text-center text-heading-sm sm:text-heading-md md:text-heading-lg font-sans md:pb-2 leading-[3rem]">
                <span className="font-cursive text-heading-lg font-bold">FZN Technology</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-16 text-center px-4">
          <p className="text-heading-sm font-cursive text-orange-500">FZN Gives Hitters the Best of Both Worlds</p>
          
          <div className="flex space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row">
            <div className="w-[100%] sm:w-[400px] md:w-[350px] xl:w-[500px] flex justify-center items-center relative overflow-hidden">
              <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
                <img
                  src="/performance.webp"
                  className="object-cover object-center w-[100%] h-[100%]"
                  alt="hero background"
                />
              </div>
              <div className="z-[1] text-heading-lg h-[350px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
                <div className="flex flex-col items-center p-4">
                  <h2 className="text-heading-md leading-8 mb-6">
                    Maximum BBCOR specs and performance
                  </h2>
                  <p className="text-body-lg">
                    FZN delivers MAX trampoline effect allowed by BBCOR across a HUGE sweet spot of
                    a 2 5/8' barrel
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] sm:w-[400px] md:w-[350px] xl:w-[500px] flex justify-center items-center relative overflow-hidden">
              <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
                <img
                  src="/wood.webp"
                  className="object-cover object-center w-[100%] h-[100%]"
                  alt="hero background"
                />
              </div>
              <div className="z-[1] text-heading-lg h-[350px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
                <div className="flex flex-col items-center p-4">
                  <h2 className="text-heading-md leading-8 mb-6">True wood look, feel and sound</h2>
                  <p className="text-body-lg">
                    FZN a true wood bat that gives hitters the unrivaled feel, classic sound and
                    clean look of a traditional stick.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center bg-light-bg bg-cover py-0">
          <div className="max-w-[1440px] flex flex-col-reverse lg:flex-row justify-center lg:space-x-8 items-center pt-12 text-center px-4">
            <Image
              src="/blog-2.webp"
              width="500"
              height="330"
              alt="baseball bat"
              className="py-20"
            />
            <div className="lg:px-12 w-[100%] max-w-[600px]">
              <h2 className="text-heading-lg text-blue-900">The Next Evolution in Baseball Bat Technology</h2>
              <p className="max-w-[650px] pt-2 text-blue-900">
                FZN Technology was invented and patented by Delano Bat Company. FZN is a bat design and
                manufacturing process that enables the classic lumber to push up to the limit of
                BBCOR-allowed performance. The first of its kind!
              </p>
              <p className="max-w-[650px] pt-2 text-blue-900">
                In fact, our first attempt at BBCOR certification failed for TOO MUCH pop!
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-16 text-center px-4">
          <p className="text-heading-sm font-cursive text-orange-500">How is FZN Different?</p>
          <h2 className="text-heading-lg text-blue-900">
            Max Pop - Massive Barrel - HUGE Sweet Spot
          </h2>
          <Image
            src="/table.webp"
            width="800"
            height="90"
            alt="baseball bat"
            className="py-8 px-4"
          />
        </div>
        <div className="max-w-[1440px] bg-blue-50 flex flex-col-reverse lg:flex-row rounded-xl overflow-hidden items-center my-16 text-center mx-4">
          <Image src="/fzn-wood.webp" width="550" height="90" alt="baseball bat" />
          <div className="text-left w-[100%] sm:w-[450px] md:w-[550px] py-16 px-8 lg:py-10 lg:px-10">
            <h4 className="text-heading-lg leading-[3rem] text-blue-900 mb-4">
              Motivated by History to Change
            </h4>
            <p className="text-body-md mb-4 text-blue-900">
              The first alternative to the traditional wood bat gained popularity in the 1970s,
              about 50 years ago. It started with basic aluminum as a more durable option to wood.
              The market incrementally progressed in that direction through today, with aluminum or
              more recently, polymer composite, being primary options.
            </p>
            <p className="text-body-md text-blue-900">
              In that time, wood was slowly disregarded and never seriously considered as a material
              for high performing bats in the youth market. Beyond MLB, wood bats were relegated to wood bat leagues and
              for those that craved the classic feel, look, sound and tradition of wood.  Now FZN brings you the Best of Both Worlds.
            </p>
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col lg:flex-row rounded-lg overflow-hidden items-center my-16 text-center mx-4 pb-12">
          <div className="text-left w-[100%] sm:w-[450px] md:w-[550px] py-16 px-4 lg:py-10 lg:px-10">
            <h4 className="text-heading-lg leading-[3rem] text-blue-900 mb-4">
              Our Heritage & Mission
            </h4>
            <p className="text-body-md mb-4 text-blue-900">
              Delano Bats has been in the bat business for many years. We were in the solid wood
              market and heard many of our loyal customers telling us they didn’t particularly like
              the feel or sound of their alloy or composite bats but had no other options without
              sacrificing performance.
            </p>
            <p className="text-body-md mb-4 text-blue-900">
              We were motivated by our customers and the realization that the history and aesthetic
              design components of the traditional baseball bat were being completely neglected in
              the chase for performance. Baseball bats were still stuck in circa 1970s era thinking.
              There was no product in the market attempting to bridge between classic and new, so that
              became our mission - fuse together the history of baseball (wood) with the
              most modern construction materials (composites) to give hitters the benefits of both.
            </p>
            <p className="text-body-md text-blue-900">
              Without being tied to legacy techniques or technologies, and with a fresh perspective
              and a commitment to baseball’s heritage, we patented FZN Technology - a fusion of
              tradition and technology.
            </p>
          </div>
          <Image src="/bat-blueprints.webp" width="550" height="90" alt="baseball bat" />
        </div>
      </div>
    </>
  );
}
