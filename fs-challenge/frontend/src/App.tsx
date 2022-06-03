import { TweetForm } from "./components/home-page/tweet-form/tweet-form";
import { Tweet } from "./components/home-page/tweet/tweet";

export const App = () => {
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
