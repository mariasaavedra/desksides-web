import * as React from 'react';

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

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}></LayoutDefault>
    </>
  );
}
