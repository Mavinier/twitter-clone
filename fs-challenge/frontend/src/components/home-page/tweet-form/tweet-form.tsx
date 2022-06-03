import { useState } from "react";

const MAX_TWEET_CHAR = 250;

export const TweetForm = () => {
  const [textCounter, setTextCounter] = useState("");

  return (
    <div className="border-b border-silver p-4 space-y6">
      <div className="flex space-x-5">
        <img src="/src/assets/icons/avatar.svg" className="w-7" />
        <h1 className="font-bold text-xl">Página Inicial</h1>
      </div>

      <form className="pl-12 text-lg flex flex-col">
        <textarea
          value={textCounter}
          onChange={(event) => {
            setTextCounter(event.target.value);
          }}
          name="text-tweet"
          className="bg-transparent outline-none"
          placeholder="O que está acontecendo?"
        />

        <div className="flex justify-end items-center space-x-3">
          <span className="text-sm">
            <span>{textCounter.length}</span> /{" "}
            <span className="text-birdBlue">{MAX_TWEET_CHAR}</span>
          </span>
          <button
            disabled={textCounter.length > MAX_TWEET_CHAR}
            className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};
