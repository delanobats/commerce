import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';

export default function Layout({ children }) {
  const footerLinks = [
    {
      label: 'Quick Links',
      children: [
        {
          label: 'Shop',
          url: '/shop',
        },
        {
          label: 'Technology',
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
      ],
    }
  ];

  const companyDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";

  return (
    <main className='flex flex-col items-center w-[100%] bg-white-50'>
      <Header />
      {children}
      {/* <div className='min-h-[calc(100vh-60px)] max-w-[1440px] w-[100%] p-4'>{children}</div> */}
      <Footer companyDescription={companyDescription} footerLinks={footerLinks} />
    </main>
  );
}
