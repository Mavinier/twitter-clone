import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Inform your name'),
  userName: Yup.string().required('Inform an Username'),
  email: Yup.string().required('Inform an email').email('Inform a valid email'),
  password: Yup.string().required('Inform a password'),
});

export const initialValues = {
  name: '',
  userName: '',
  email: '',
  password: '',
};
