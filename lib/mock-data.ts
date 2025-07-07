import { User, Post, Comment } from '@/types';

/* Mock API functions */
export const getCurrentUser = async () => {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/8`);
  const user = data.json();
  return user;
};

export const getFriends = async (): Promise<User[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const friends = data.json();

  return friends;
};

export const getUsers = async (): Promise<User[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const users = data.json();

  return users;
};

export const getPosts = async (): Promise<Post[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts = data.json();

  return posts;
};

export const getPost = async (id: number): Promise<Post | null> => {
  if (!process.env.NEXT_PUBLIC_API_URL) return null;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts: Post[] = await data.json();
  return posts.find(post => post.id === id) || null;
};

export const getComments = async (id: number): Promise<Comment[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/comments`);
  const comments: Comment[] = await data.json();
  return comments;
};
