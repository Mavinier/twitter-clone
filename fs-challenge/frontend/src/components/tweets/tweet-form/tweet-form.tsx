import { useAtom, useAtomValue } from 'jotai';
import { useFormik } from 'formik';
import { LoggedUserAtom } from '../../../atoms/login-atom';
import { postTweet } from './api';
import { RefetchAtom } from '../../../atoms/refetch-atom';
import { Container, FooterFormContainer, StyledForm } from './styles';

const MAX_TWEET_CHAR = 250;

export const TweetForm = () => {
  const user = useAtomValue(LoggedUserAtom);
  const [refetch, setRefetch] = useAtom(RefetchAtom);

  const formik = useFormik({
    onSubmit: async (values, form) => {
      await postTweet(user.accessToken, values.text),
        form.setFieldValue('text', '');
      setRefetch(refetch + 1);
    },
    initialValues: {
      text: '',
    },
  });

  return (
    <Container>
      <div className="flex space-x-5">
        <img alt="Avatar" src="/src/assets/icons/avatar.svg" className="w-7" />
        <h1 className="font-bold text-xl">Página Inicial</h1>
      </div>

      <StyledForm className="" onSubmit={formik.handleSubmit}>
        <textarea
          name="text"
          className="bg-transparent outline-none"
          placeholder="O que está acontecendo?"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
        />

        <FooterFormContainer>
          <span className="text-sm">
            <span>{formik.values.text.length}</span> /{' '}
            <span className="text-birdBlue">{MAX_TWEET_CHAR}</span>
          </span>
          <button
            type="submit"
            disabled={
              formik.values.text.length > MAX_TWEET_CHAR || formik.isSubmitting
            }
            className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
          >
            Tweet
          </button>
        </FooterFormContainer>
      </StyledForm>
    </Container>
  );
};
