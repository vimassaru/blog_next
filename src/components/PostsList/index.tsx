import { postRepository } from '@/repositories/post';
import { Suspense } from 'react';
import { SpinLoader } from '../SpinLoader';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
