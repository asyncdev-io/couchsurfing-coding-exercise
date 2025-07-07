
import Link from 'next/link';
import { Post } from '@/types';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { cn } from '@/lib/utils';
import UserAvatar from './user-avatar';
import { getUsers } from '@/lib/mock-data';

interface PostCardProps {
  post: Post;
  showFullContent?: boolean;
}

export default async function PostCard({ post, showFullContent = false }: PostCardProps) {
  const users = await getUsers();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <UserAvatar user={users[post.userId]} size="md" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{post.title}</h3>
            <p className="text-sm text-gray-500">@{users.find((user) => post.userId === user.id)?.username}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className={cn("text-gray-800 leading-relaxed", {
            'line-clamp-2': !showFullContent,
            'line-clamp-none': showFullContent
          })}>
            {post.body}
          </p>
        </div>

        {post.imageUrl && (
          <div className="mb-4 -mx-6">
            <img
              src={post.imageUrl}
              alt="Post image"
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        <div className="flex items-center space-x-6 pt-4 border-t border-gray-50">
          <button className={cn(
            'flex items-center space-x-2 text-sm font-medium transition-colors duration-200',
            post.id % 2 === 0 ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
          )}>
            <Heart className={cn('w-5 h-5', post.id % 2 === 0 && 'fill-current')} />
            <span>{Math.round(post.userId * Math.random() * 100)}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200">
            <MessageCircle className="w-5 h-5" />
            <span>{5}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-green-500 transition-colors duration-200">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {!showFullContent && (
        <Link
          href={`/post/${post.id}`}
          className="block px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          View full post
        </Link>
      )}
    </div>
  );
}