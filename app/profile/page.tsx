import { getCurrentUser, getFriends } from '@/lib/mock-data';
import { Calendar, MapPin } from 'lucide-react';
import UserAvatar from '@/components/user-avatar';

export default async function ProfilePage() {
  const user = await getCurrentUser();
  const friends = await getFriends();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6 -mt-16">
            <div className="relative">
              <UserAvatar user={user} size="xl" className="border-4 border-white shadow-lg" />
            </div>
            
            <div className="flex-1 mt-4 sm:mt-0">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600 text-lg">@{user.username}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 text-lg leading-relaxed">{user.bio}</p>
          </div>

          <div className="mt-6 flex space-x-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{user.postCount}</p>
              <p className="text-sm text-gray-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{user.friendCount}</p>
              <p className="text-sm text-gray-500">Friends</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Friends</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.slice(0, 6).map((friend: any) => (
            <div key={friend.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="relative">
                <UserAvatar user={friend} size="md" />
                {friend.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">{friend.name}</p>
                <p className="text-sm text-gray-500 truncate">@{friend.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}