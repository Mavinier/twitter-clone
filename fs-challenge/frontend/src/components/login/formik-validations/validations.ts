import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string().required('Type your email').email('Inform a valid email'),
  password: Yup.string().required('Type your password'),
});

export const initialValues = {
  email: '',
  password: '',
};
