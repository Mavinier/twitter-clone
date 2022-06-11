import { useFormik } from "formik";
import { login } from "./api";
import { LoggedUserAtom, AreUserLoggedAtom } from "../../atoms/login-atom";
import { useUpdateAtom } from "jotai/utils";
import {
  initialValues,
  validationSchema,
} from "./formik-validations/validations";
import { Input } from "../../components/input/input";

export const Login = () => {
  const setUser = useUpdateAtom(LoggedUserAtom);
  const setAreUserLogged = useUpdateAtom(AreUserLoggedAtom);

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await login(values);
      setUser(res.data);
      setAreUserLogged(true);
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
            </div>
            <div className="space-y-2">
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
            </div>
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
            >
              {formik.isSubmitting ? "Logging in" : "Enter"}
            </button>
          </form>

          <span className="text-sm text-silver text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-birdBlue">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
