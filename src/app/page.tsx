import { Container } from '@/components/Container';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { ThemeButton } from '@/components/ThemeButton';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Essa é a HEADER</h1>
      </header>

      <div className='flex items-center justify-center'>
        <ThemeButton />
      </div>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Essa é o FOOTER</h1>
      </footer>
    </Container>
  );
}
