import { ReactNode } from 'react';

export type TweetProps = {
  name: string;
  username: string;
  avatar: string;
  children: ReactNode;
};
