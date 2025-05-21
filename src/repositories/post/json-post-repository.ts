import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();

// ...src\db\seed\posts.json
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);

    const { posts } = parsedJson;

    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    // Finding the unique post with the string ID
    const posts = await this.findAll();

    // Using find method to match the id parameter with the post.id string
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }
}
