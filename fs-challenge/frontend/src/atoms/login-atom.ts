import { atom } from "jotai";

export type LoggedUserProps = {
  id: string;
  name: string;
  userName: string;
  email: string;
  accessToken: string;
};

export const userAtomBase: LoggedUserProps = {
  id: "",
  name: "",
  userName: "",
  email: "",
  accessToken: "",
};

export const LoggedUserAtom = atom(userAtomBase);
export const AreUserLoggedAtom = atom(false);
