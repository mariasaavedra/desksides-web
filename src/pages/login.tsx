import * as React from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from '@/hooks/useLogin';

import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function LoginPage() {
  const heroJSX = (
    <>
      <Heading>Welcome Back 👋🏼</Heading>
      <p className='text-xl text-white'>Let's get you connected.</p>
    </>
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, error, isLoading } = useLogin();

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await login(email, password);
  };

  return (
    <>
      <LayoutDefault justify='left' heroJSX={heroJSX}>
        <form className='pl-12' onSubmit={handleSubmit(() => onSubmit)}>
          <div className='my-4 flex flex-col'>
            <label>email</label>
            <input type='text' placeholder='email' {...register('email', {})} />
          </div>
          <div className='my-4 flex flex-col'>
            <label>password</label>
            <input
              type='password'
              placeholder='password'
              {...register('password', {})}
            />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </LayoutDefault>
    </>
  );
}
