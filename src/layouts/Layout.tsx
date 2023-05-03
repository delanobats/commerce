
import { Header } from '@/components/header/header';

export default function Layout({ children }: any) {
  return (
    <main className='flex flex-col items-center w-[100%] bg-white-50'>
      <Header />
      <div className='min-h-[calc(100vh-60px)] max-w-[1440px] w-[100%] p-4'>{children}</div>
    </main>
  );
}
