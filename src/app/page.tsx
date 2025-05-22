import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { ThemeButton } from '@/components/ThemeButton';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <div className='flex items-end justify-center'>
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
