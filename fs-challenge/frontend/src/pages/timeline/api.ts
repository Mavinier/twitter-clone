import axios from "axios";

export const getTweets = async (token: string) => {
  const response = await axios.get("http://localhost:6010/tweets", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
