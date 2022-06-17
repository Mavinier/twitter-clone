import { useFormik } from 'formik';
import { useUpdateAtom } from 'jotai/utils';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from './api';
import {
  initialValues,
  validationSchema,
} from './formik-validations/validations';
import { Input } from '../input/input';
import { AreUserLoggedAtom, LoggedUserAtom } from '../../atoms/login-atom';
import {
  Container,
  InputContainer,
  JustfyContainer,
  StyledForm,
} from './styles';

export const Signup = () => {
  const setUser = useUpdateAtom(LoggedUserAtom);
  const setAreUserLogged = useUpdateAtom(AreUserLoggedAtom);
  const navigate = useNavigate();

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await signup(values);
      setUser(res.data);
      setAreUserLogged(true);
      navigate('/timeline');
    },
    initialValues,
    validateOnMount: true,
    validationSchema,
  });

  return (
    <Container>
      <div className="bg-birdBlue lg:flex-1" />
      <JustfyContainer>
        <div className="max-w-md flex-1 space-y-2">
          <h1 className="text-3xl">Create your account</h1>

          <StyledForm onSubmit={formik.handleSubmit}>
            <InputContainer>
              <Input
                id="name"
                type="tetx"
                name="name"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              )}
              <Input
                id="userName"
                type="tetx"
                name="userName"
                placeholder="Username"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              {formik.touched.userName && formik.errors.userName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.userName}
                </div>
              )}
              <Input
                id="email"
                type="tetx"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              )}
            </InputContainer>
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
            >
              {formik.isSubmitting ? 'Logging in' : 'Sign up'}
            </button>
          </StyledForm>

          <span className="text-sm text-silver text-center">
            Already have an account?{' '}
            <Link to="/" className="text-birdBlue">
              Log in
            </Link>
          </span>
        </div>
      </JustfyContainer>
    </Container>
  );
};
