import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxTypesHooks';
import { loginUser } from '../../store/auth/loginThunks';

import { IDataLogin } from '../../@types/auth';
import { loginSchema } from '../../schemas/authSchema';
import styles from './auth.module.css';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<IDataLogin>({ resolver: yupResolver(loginSchema) })

  const dispatch = useAppDispatch();

  // const isLoading = useAppSelector(state => state)

  const submit: SubmitHandler<IDataLogin> = (data) => {
    console.log(data);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(submit)}
    >
      <h3>Авторизация</h3>
      <input {...register('email')} placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register('password')} placeholder='Password' />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Submit</button>
    </form>
  )

};
export default Login;
