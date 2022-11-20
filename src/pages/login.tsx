import * as React from 'react';
import { useForm } from 'react-hook-form';

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
  const onSubmit = async ({ email, password }) => {
    const response = await fetch(`http://localhost:3333/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const jwt = await response.json();
    console.log(await jwt);
    localStorage.setItem('access_token', await jwt.access_token)
  };

  return (
    <>
      <LayoutDefault justify='left' heroJSX={heroJSX}>
        <form className="pl-12" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col my-4'>
            <label>email</label>
            <input type='text' placeholder='email' {...register('email', {})} />
          </div>
          <div className='flex flex-col my-4'>
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
