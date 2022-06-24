import { useFormik } from 'formik';
import { useUpdateAtom } from 'jotai/utils';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from 'antd';
import { login } from './api';
import { AreUserLoggedAtom, LoggedUserAtom } from '../../atoms/login-atom';
import {
  initialValues,
  validationSchema,
} from './formik-validations/validations';

export const Login = () => {
  const setUser = useUpdateAtom(LoggedUserAtom);
  const setAreUserLogged = useUpdateAtom(AreUserLoggedAtom);
  const navigate = useNavigate();

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await login(values);
      setUser(res.data);
      setAreUserLogged(true);
      navigate('/timeline');
    },
    initialValues,
    validateOnMount: true,
    validationSchema,
  });

  return (
    <div className="h-full flex justify-center">
      <div className="bg-birdBlue lg:flex-1" />
      <div className="flex flex-1 items-center justify-center p-14 space-y-6">
        <div className="max-w-md flex-1">
          <h1 className="text-3xl">Log in to Twitter.</h1>

          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="space-y-2">
              <Input
                className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"
                id="email"
                type="text"
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
            </div>
            <div className="space-y-2">
              <Input
                className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"
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
            </div>
            <Button
              htmlType="submit"
              className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {formik.isSubmitting ? 'Logging in' : 'Enter'}
            </Button>
          </form>

          <span className="text-sm text-silver text-center">
            Don&apost have an account?{' '}
            <Link to="/signup" className="text-birdBlue">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
