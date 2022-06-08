import { atom } from "jotai";
import { Tweets } from "../types";

const userTweetsAtomBase: Tweets = {
  id: "",
  text: "",
  userId: "",
  user: {
    id: "",
    name: "",
    userName: "",
    email: "",
  },
};

export const UserTweetsAtom = atom([userTweetsAtomBase]);
