import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type LoggedUserProps = {
  id: string;
  name: string;
  username: string;
  email: string;
  accessToken: string;
};

const atomBase: LoggedUserProps = {
  id: '',
  name: '',
  username: '',
  email: '',
  accessToken: '',
};

export const LoggedUserAtom = atomWithStorage('user', atomBase);
export const AreUserLoggedAtom = atom(false);
