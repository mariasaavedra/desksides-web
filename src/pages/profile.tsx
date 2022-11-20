import * as React from 'react';
import { useForm } from 'react-hook-form';

import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function ProfilePage() {
  const heroJSX = (
    <>
      <Heading>Nice to meet you!</Heading>
      <p className='text-xl text-white'>
        Tell us about yourself so that we can work our magic.
      </p>
    </>
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => {
    console.log('on submit', data);
  };

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='block'>
            <label>First name</label>
            <input
              type='text'
              placeholder='first_name'
              {...register('first_name', {})}
            />
          </div>
          <div className='block'>
            <label>Last name</label>
            <input
              type='text'
              placeholder='last_name'
              {...register('last_name', {})}
            />
          </div>

          <div className='block'>
            <label>Role</label>
            <input type='text' placeholder='role' {...register('role', {})} />
          </div>

          <div className='block'>
            <label>Email</label>
            <input type='text' placeholder='email' {...register('email', {})} />
          </div>

          <div className='block'>
            <label>Password</label>
            <input
              type='text'
              placeholder='password'
              {...register('password', {})}
            />
          </div>
          <div className='block'>
            <label>Confirm Password</label>
            <input
              type='text'
              placeholder='confirm_password'
              {...register('confirm_password', {})}
            />
          </div>

          <input
            className='block rounded bg-red-500 py-2 px-2 text-white'
            type='submit'
          />
        </form>
      </LayoutDefault>
    </>
  );
}
