import axios from "axios";
import { apiHost } from "../../../config";

export const postTweet = async (token: string, text: string) => {
  await axios({
    method: "POST",
    url: `${apiHost}/tweets`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      text,
    },
  });
};
