import { HeartIcon } from '@heroicons/react/outline';
import { TweetProps } from './types';

export const Tweet = ({ name, userName, avatar, children }: TweetProps) => {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img alt="Avatar" src={avatar} />
      </div>
      <div className="space-y-1">
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-silver text-sm">{userName}</span>
        <p>{children}</p>
        <div className="flex space-x-1 text-silver text-sm items-center">
          <HeartIcon className="w-6 stroke-1" />
          <span>2M</span>
        </div>
      </div>
    </div>
  );
};
