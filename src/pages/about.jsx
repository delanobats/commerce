import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import axiosInstance from '../utils/axios';
import { BasicButton } from '../components/button/BasicButton';

export default function About() {
  return (
    <>
      <Head>
        <title>Delano Bats - About</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Delano Bats" key="title" />
        <meta
          name="description"
          content="A small company with big plans built in the Midwest, fusing traditional values of hard work, grit and ingenuity with high-tech science & innovation to propel America's pastime into the future."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.svg" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden">
          <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
            <img
              src="/delano-story.webp"
              className="object-cover object-center w-[100%] h-[100%]"
              alt="hero background"
            />
          </div>
          <div className="z-[1] text-heading-lg h-[400px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <div className="flex flex-col items-center py-2">
              <h1 className="text-center text-heading-sm sm:text-heading-md md:text-heading-lg font-sans md:pb-2 leading-[3rem]">
                <span className="font-sans text-heading-lg font-bold">
                  The <span className="font-cursive">Delano</span> Story
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-12 text-center px-4">
          <p className="text-heading-sm font-cursive text-orange-500">About us</p>
          <h2 className="text-heading-lg text-blue-900">The Delano Story</h2>
          <p className="max-w-[650px] pt-2 text-blue-900">
            Delano is a small company with a big vision - to bring innovation to the great game of
            baseball while staying true to the unique roots, traditions and history of America's
            Pastime.
          </p>
          <p className="max-w-[650px] pt-2 text-blue-900">
            Delano’s first bat was spun in 2012. As an 8th grader in Delano, Minnesota, Peter Kruse
            was trying to keep busy during a rainy and cold spring break. Peter had long wanted to
            make his own wood bat. After watching several YouTube videos, Peter and his brother
            Andrew built their own drill-powered lathe. They turned their first bat using a
            screwdriver and a chisel. Delano Bat Company was born.
          </p>
          <Image
            src="/magazine.webp"
            width="450"
            height="330"
            alt="baseball bat"
            className="py-20"
          />
          <p className="max-w-[650px] pt-2 text-blue-900">
            Since then, Peter has become a bat-making craftsman. For almost 10 years, Peter turned
            the highest quality wood bats for thousands of competitive baseball players across the
            country, all from their Minnesota factory.
          </p>
          <p className="max-w-[650px] pt-2 text-blue-900">
            More recently, Peter coupled his bat making expertise with his engineering know-how and
            partnered with a handful of other engineering experts & baseball lifers to change the
            direction of the company, and the future of baseball.
          </p>
        </div>
        <div className="w-[100%] flex justify-center items-center bg-light-bg bg-cover py-0">
          <div className="max-w-[1440px] flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 py-12 text-center px-4">
            <div className=" relative">
              <Image
                src="/fzn-tech-patent.webp"
                width={400}
                height={100}
                alt="delano bat magazine"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-heading-lg text-blue-900">Our Mission</h2>
              <p className="max-w-[600px] pb-8 text-blue-900">
                To take baseball bat technology to the next level.
              </p>
              <BasicButton label="Learn more about FZN" href="/technology" />
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] flex flex-col items-center py-12 text-center px-4 pb-36">
          <h2 className="text-heading-lg text-blue-900">Our Team</h2>
          <p className="max-w-[600px] pb-8 text-blue-900">
            We hope it’s the beginning of a long partnership of providing great products and lasting
            success and memories on the diamond. Learn more about our team!
          </p>
          <BasicButton label="Meet the team" href="/team" />
        </div>
      </div>
    </>
  );
}
