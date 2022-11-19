import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button/Button';
import EmailConfirmation from '@/components/EmailConfirmation/EmailConfirmation';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function ResetPassword() {
  const heroJSX = (
    <>
      <Heading>
        Oops! Let's <br /> start over.
      </Heading>
      <p className='text-white'>
        Enter your email below to reset your password.
      </p>
    </>
  );

  const [checkEmail, setCheckEmail] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}>
        {checkEmail ?
          <EmailConfirmation /> :
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='block'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='email'
                  {...register('email')}
                />
              </div>
              <Button type='submit'>Submit</Button>
            </form>
          </div>
        }
      </LayoutDefault>
    </>
  );
}
