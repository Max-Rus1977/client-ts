import * as yup from 'yup';

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .min(3, 'Минимальная длина имени не менее 3 символов')
    .required('Введете имя, обязательное поле'),
  email: yup
    .string()
    .email('Неверный формат email')
    .required('Введете email, обязательное поле'),
  password: yup
    .string()
    .min(3, 'Минимальная длина имени не менее 3 символов')
    .required('Введете пароль, обязательное поле'),
}).required();

export const loginSchema = yup.object({
  email: yup
  .string()
  .email('Неверный формат email')
  .required('Это обязательное поле'),
  password: yup
  .string()
  .required('Не введён пароль')
}).required();