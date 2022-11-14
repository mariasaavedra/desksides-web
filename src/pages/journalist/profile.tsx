import * as React from 'react';

import Button from '@/components/Button/Button';
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
      <LayoutDefault heroJSX={heroJSX}>
        <Button></Button>
      </LayoutDefault>
    </>
  );
}
