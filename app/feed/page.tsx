import { getPosts } from '@/lib/mock-data';
import PostCard from '@/components/post-card';

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Feed</h1>
        <p className="text-gray-600">Stay connected with your friends and their latest updates</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts to show. Start following friends to see their updates!</p>
        </div>
      )}
    </div>
  );
}