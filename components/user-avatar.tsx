import { User } from '@/types';
import { cn } from '@/lib/utils';

interface UserAvatarProps {
  user: User;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function UserAvatar({ user, size = 'md', className }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  return (
    <div className={cn(sizeClasses[size], 'relative', className)}>
      <img
        src={`https://gravatar.com/avatar/26eb18d2d385b7587c695722bc025f88?s=400&d=robohash&r=x`}
        alt={''}
        className="w-full h-full object-cover rounded-full border-2 border-white shadow-sm"
      />
    </div>
  );
}