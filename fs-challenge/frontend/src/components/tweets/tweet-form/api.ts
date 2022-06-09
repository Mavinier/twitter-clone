import axios from "axios";

export const postTweet = async (token: string, text: string) => {
  await axios({
    method: "POST",
    url: "http://localhost:6010/tweets",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      text,
    },
  });
};
