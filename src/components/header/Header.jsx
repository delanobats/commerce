import Image from 'next/image';
import Link from 'next/link';
import { RiShoppingCartLine } from 'react-icons/ri';
import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import { useState } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const [active, setActive] = useState(false);
  const links = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Shop',
      url: '/shop',
    },
    {
      label: 'FZN Technology',
      url: '/technology',
    },
    {
      label: 'Team',
      url: '/team',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
  ];
  return (
    <>
      <header className="flex justify-center w-[100%] bg-blue-900 text-white-50 h-[60px] sticky top-0 z-[10]">
        <div className="flex justify-between items-center w-[100%] max-w-[1440px] px-4 ">
          <div className="block lg:hidden w-[60px]">
            <HamburgerMenu animationType="rotateX" stroke="#FFFFFF" active={active} setActive={setActive}/>
          </div>
          <div className="lg:w-[100px] flex justify-start items-center hover:cursor-pointer">
            <Link href="/">
              <Image src="/db.webp" alt="ARKH logo" width="60" height="60" />
            </Link>
          </div>
          <ul className="hidden lg:flex justify-around items-center space-x-8">
            {links.map((link, i) => {
              return (
                <li key={i} className="text-body-md text-white-600 font-regular hover:text-white-50">
                  <Link href={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-end w-[60px] lg:w-[50]">
            <RiShoppingCartLine className="text-[28px] lg:text-[21px] text-background hover:cursor-pointer" />
          </div>
        </div>
      </header>
      <div
        className={clsx(
          'lg:hidden w-[100%] h-[98vh] overflow-hidden bg-blue-900 fixed top-[55px] opacity-0 transition-opacity duration-500 ease-in-out py-8',
          {
            ['opacity-100']: active,
            ['z-[400]']: active,
          }
        )}
      >
        <ul className="flex flex-col space-y-4">
          {links.map((link, i) => {
            return (
              <li key={i} className="text-body-md text-white-600 px-6 py-1 font-light hover:text-white-50">
                <Link href={link.url} className='w-[100%] h-[100%]'>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
