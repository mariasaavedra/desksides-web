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
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('on submit', data);
  };

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='block'>
            <label>email</label>
            <input type='text' placeholder='email' {...register('email', {})} />
          </div>
          <div className='block'>
            <label>password</label>
            <input
              type='text'
              placeholder='password'
              {...register('password', {})}
            />
          </div>
          <Button></Button>
        </form>
      </LayoutDefault>
    </>
  );
}
