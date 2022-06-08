import { atom } from "jotai";

export type LoggedUserProps = {
  id: string;
  name: string;
  userName: string;
  email: string;
  accessToken: string;
};

const atomBase: LoggedUserProps = {
  id: "",
  name: "",
  userName: "",
  email: "",
  accessToken: "",
};

export const LoggedUserAtom = atom(atomBase);
export const AreUserLoggedAtom = atom(false);
