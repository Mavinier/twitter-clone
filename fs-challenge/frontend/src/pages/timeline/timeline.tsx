import { TweetForm } from "../../components/tweets/tweet-form/tweet-form";
import { Tweet } from "../../components/tweets/tweet/tweet";

export const Timeline = () => {
  return (
    <>
      <TweetForm />
      <div>
        <Tweet
          name="Marlon Moura"
          userName="@marlonmoura"
          avatar="/src/assets/icons/avatar.svg"
        >
          Let's make this fun?
        </Tweet>
        <Tweet
          name="Priscilla Gomes"
          userName="@prigomes"
          avatar="/src/assets/icons/avatar.svg"
        >
          Let's go!
        </Tweet>
      </div>
    </>
  );
};
