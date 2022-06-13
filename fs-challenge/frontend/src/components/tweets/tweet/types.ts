import { ReactNode } from 'react';

export type TweetProps = {
  name: string;
  userName: string;
  avatar: string;
  children: ReactNode;
};
