import * as React from 'react';

import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function PricingPage() {
  const heroJSX = (
    <>
      <Heading>Packages for every business plan</Heading>
      <p className='text-white'>
        Select your subscription and start getting seen.
      </p>
    </>
  );

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}></LayoutDefault>
    </>
  );
}
