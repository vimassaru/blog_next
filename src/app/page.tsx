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

      <div className='flex items-end justify-center'>
        <ThemeButton />
      </div>

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do Post'
          />
        </Link>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          consectetur assumenda unde sit perspiciatis ratione fugiat,
          voluptatibus dolor necessitatibus ab laborum veritatis laboriosam sed
          porro obcaecati iure deleniti iusto? Odio.
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Essa é o FOOTER</h1>
      </footer>
    </Container>
  );
}
