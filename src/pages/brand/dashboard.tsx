import * as React from 'react';

import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function DashboardPage() {

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
        <h1>Dashboard</h1>
      </LayoutDefault>
    </>
  );
}
