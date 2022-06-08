import { TweetForm } from "../../components/tweets/tweet-form/tweet-form";
import { Tweet } from "../../components/tweets/tweet/tweet";

import { useEffect } from "react";
import { getTweets } from "./api";
import { useAtom, useAtomValue } from "jotai";
import { LoggedUserAtom } from "../../atoms/login-atom";
import { UserTweetsAtom } from "./atom/timeline-atom";

export const Timeline = () => {
  const user = useAtomValue(LoggedUserAtom);
  const [userTweets, setUserTweets] = useAtom(UserTweetsAtom);

  const loadTweets = async () => {
    const response = await getTweets(user.accessToken);
    setUserTweets(response.data);
  };

  useEffect(() => {
    loadTweets();
  }, []);

  return (
    <>
      <TweetForm />
      {userTweets ? (
        <div>
          {userTweets.length &&
            userTweets.map((tweets) => (
              <Tweet
                name={tweets.user.name}
                userName={`@${tweets.user.userName}`}
                avatar="/src/assets/icons/avatar.svg"
                key={tweets.id}
              >
                {tweets.text}
              </Tweet>
            ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
