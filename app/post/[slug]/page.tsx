import { getComments, getPost } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import PostCard from '@/components/post-card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await getPost(+slug);
  const comments = await getComments(+slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link
          href="/feed"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Feed</span>
        </Link>
      </div>

      <PostCard post={post} showFullContent={true} />

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comments</h3>
        <div className="space-y-2">
          {Array.isArray(comments) && comments.length <= 0 && (
            <div className="text-gray-500 text-center py-2">
            No comments yet. Be the first to share your thoughts!
          </div>
        )}
        {Array.isArray(comments) && comments.length > 0  && comments.map((comment) => (
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 max-w-xl mx-auto my-4">
            <p className="text-gray-800 text-sm leading-relaxed mb-2">{comment.body}</p>
            <span className="text-xs text-gray-500 block text-right">— {comment.email}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}