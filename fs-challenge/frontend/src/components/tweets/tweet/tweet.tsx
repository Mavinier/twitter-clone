import { HeartIcon } from '@heroicons/react/outline';
import { Container, TweetContainer, TweetFooterContainer } from './styles';
import { TweetProps } from './types';

export const Tweet = ({ name, userName, avatar, children }: TweetProps) => {
  return (
    <Container>
      <div>
        <img alt="Avatar" src={avatar} />
      </div>
      <TweetContainer className="space-y-1">
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-silver text-sm">{userName}</span>
        <p>{children}</p>
        <TweetFooterContainer>
          <HeartIcon className="w-6 stroke-1" />
          <span>2M</span>
        </TweetFooterContainer>
      </TweetContainer>
    </Container>
  );
};
