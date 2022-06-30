import { Link, useNavigate } from 'react-router-dom';

import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { useUpdateAtom } from 'jotai/utils';

import { AreUserLoggedAtom, LoggedUserAtom } from '../../atoms/login-atom';
import { signup } from './api';
import {
  initialValues,
  validationSchema,
} from './formik-validations/validations';

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
    <div className="h-full flex justify-center">
      <div className="bg-birdBlue lg:flex-1" />
      <div className="flex flex-1 items-center justify-center p-14 space-y-6">
        <div className="max-w-md flex-1 space-y-2">
          <h1 className="text-3xl">Create your account</h1>

          <Form className="space-y-6" onFinish={formik.handleSubmit}>
            <div className="space-y-2">
              <Input
                className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"
                id="name"
                type="text"
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
                className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"
                id="userName"
                type="text"
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
              {formik.isSubmitting ? 'Signing up' : 'Sign up'}
            </Button>
          </Form>

          <span className="text-sm text-silver text-center">
            Already have an account?{' '}
            <Link to="/" className="text-birdBlue">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
