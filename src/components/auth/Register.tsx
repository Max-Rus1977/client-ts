import { FC, useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxTypesHooks';
import { registerUser } from '../../store/auth/registerThunks';

import { IDataRegister } from '../../@types/auth';
import { registerSchema } from '../../schemas/authSchema';
import styles from './auth.module.css';

const Register: FC = () => {
  const [avatar, setAvatar] = useState<IDataRegister['avatar']>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<IDataRegister>({ resolver: yupResolver(registerSchema) });

  const dispatch = useAppDispatch();

  // const newUser = useAppSelector(state => state.authReducer.user);
  const isLoading = useAppSelector(state => state.registerReducer.isLoading);
  // const isAuthenticated = useAppSelector(state => state.authReducer.isAuthenticated);
  const error = useAppSelector(state => state.registerReducer.error);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Добавляем знак ?, чтобы избежать ошибок, если files === null
    const file = event.target.files?.[0];
    setAvatar(file);
  }

  const onSubmit: SubmitHandler<IDataRegister> = (data) => {
    const { fullName, email, password } = data;
    const validImageTypes =
      ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

    if (avatar instanceof File) {
      if (!validImageTypes.includes(avatar.type)) {
        setError(
          'avatar',
          { message: 'Файл должен быть изображением (jpeg, png, jpg, webp)' })
        return;
      }
      if (avatar.size > 2 * 1024 * 1024) {
        setError('avatar', { message: 'Размер файла не должен превышать 2MB' })
        return;
      }
    }

    registerUser({ fullName, email, password, avatar })
  };

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <p>Error: {error}</p>;

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
      <input type='file' onChange={handleFileChange} placeholder='Avatar' />
      {errors.avatar && <p>{errors.avatar.message}</p>}
      <button type="submit">Submit</button>
    </form >
  );
};

export default Register;
