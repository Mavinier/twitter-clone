export interface Tweets {
  id: string;
  text: string;
  userId: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
}
