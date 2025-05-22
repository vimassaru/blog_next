import { postRepository } from '@/repositories/post';

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
