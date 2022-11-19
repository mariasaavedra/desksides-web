import * as React from 'react';

import AssesmentForm from '@/components/AssesmentForm/AssesmentForm';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function JournalistProfile() {
  const heroJSX = (
    <>
      <Heading>Journalist Profile</Heading>
      <p className='text-white'>
        Tell us about yourself, so we can help you find the stories you want to
        write.
      </p>
    </>
  );

  return (
    <>
      <LayoutDefault justify='left' heroJSX={heroJSX}>
        <AssesmentForm></AssesmentForm>
      </LayoutDefault>
    </>
  );
}
