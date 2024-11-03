import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IDataRegister } from '../../@types/auth';
import styles from './auth.module.css';


const schema = yup.object({
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

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<IDataRegister>({ resolver: yupResolver(schema) });


  const onSubmit: SubmitHandler<IDataRegister> = (data) => {
    const { fullName, email, password, avatar } = data;
    const validImageTypes =
      ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    let file;
    if (avatar && avatar[0]) {
      file = avatar[0];
      if (!validImageTypes.includes(file.type)) {
        setError(
          'avatar',
          { message: 'Файл должен быть изображением (jpeg, png, gif, webp)' })
        return;
      }
      console.log(file);
    }
    console.log({ fullName, email, password, file });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Регистрация</h3>
      <input {...register('fullName')} placeholder='FullName' />
      {errors.fullName && <p>{errors.fullName.message}</p>}
      <input {...register('email')} placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register('password')} type='password' placeholder='Password' />
      {errors.password && <p>{errors.password.message}</p>}
      <input {...register('avatar')} type='file' placeholder='Avatar' />
      {errors.avatar && <p>{errors.avatar.message}</p>}
      <button type="submit">Submit</button>
    </form >
  );
};

export default Register;
