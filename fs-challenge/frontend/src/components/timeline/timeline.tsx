import { useEffect } from 'react';

import { useAtom, useAtomValue } from 'jotai';

import avatar from '../../assets/icons/avatar.svg';
import { LoggedUserAtom } from '../../atoms/login-atom';
import { RefetchAtom } from '../../atoms/refetch-atom';
import { TweetForm } from '../tweets/tweet-form/tweet-form';
import { Tweet } from '../tweets/tweet/tweet';
import { getTweets } from './api';
import { UserTweetsAtom } from './atom/timeline-atom';

export const Timeline = () => {
  const user = useAtomValue(LoggedUserAtom);
  const refetch = useAtomValue(RefetchAtom);
  const [userTweets, setUserTweets] = useAtom(UserTweetsAtom);

  const loadTweets = async () => {
    const response = await getTweets(user.accessToken);
    setUserTweets(response.data);
  };

  useEffect(() => {
    loadTweets();
  }, [refetch]);

  return (
    <>
      <TweetForm />
      {userTweets ? (
        <div>
          {userTweets.length &&
            userTweets.map((tweets) => (
              <Tweet
                name={tweets.user.name}
                username={`@${tweets.user.username}`}
                avatar={avatar}
                key={tweets.id}
              >
                {tweets.text}
              </Tweet>
            ))}
        </div>
      ) : (
        <>0</>
      )}
    </>
  );
};
