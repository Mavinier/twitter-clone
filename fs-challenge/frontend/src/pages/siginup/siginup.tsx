import { useFormik } from "formik";
import { siginup } from "./api";
import { useUpdateAtom } from "jotai/utils";
import {
  initialValues,
  validationSchema,
} from "./formik-validations/validations";
import { Input } from "../../components/input/input";
import { LoggedUserAtom } from "../../atoms/login-atom";

export const Siginup = () => {
  const setUser = useUpdateAtom(LoggedUserAtom);

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await siginup(values);
      setUser(res.data);
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
          <h1 className="text-3xl">Create your account</h1>

          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="space-y-2">
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
            </div>
            <div className="space-y-2">
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
            </div>
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
            Already have an account?{" "}
            <a href="/login" className="text-birdBlue">
              Log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
