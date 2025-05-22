import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { ThemeButton } from '@/components/ThemeButton';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do Post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-05-22'
          >
            22/05/2025 13:40
          </time>
          <h1 className='text-2xl/tight font-extrabold sm:text-4xl'>
            <Link href='#'>Lorem ipsum dolor sit amet</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            consectetur assumenda unde sit perspiciatis ratione fugiat,
            voluptatibus dolor necessitatibus ab laborum veritatis laboriosam
            sed porro obcaecati iure deleniti iusto? Odio.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className='p-8'>
        <h1 className='text-6xl font-bold text-center py-8'>Essa é o FOOTER</h1>
        <div className='flex items-end justify-center'>
          <ThemeButton />
        </div>
      </footer>
    </Container>
  );
}
