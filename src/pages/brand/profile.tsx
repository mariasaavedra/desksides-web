import * as React from 'react';

import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function BrandProfile() {
  const heroJSX = (
    <>
      <Heading>Brand Profile</Heading>
      <p className='text-white'>
        Tell us about your business, so we can find the right people to tell
        everyone else about it!
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
