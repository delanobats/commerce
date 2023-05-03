import Image from 'next/image';
import { RiShoppingCartLine } from 'react-icons/ri';

export const Header = ({}) => {
  return (
    <header className="flex justify-center w-[100%] bg-blue-900 text-white-50">
      <div className="flex justify-between items-center w-[100%] max-w-[1440px] h-[60px]">
        <Image src="/db.webp" alt='logo' width="50" height="50" />
        <RiShoppingCartLine className="text-[28px] lg:text-[21px] hover:cursor-pointer" />
      </div>
    </header>
  );
};
