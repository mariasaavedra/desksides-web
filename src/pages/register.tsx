import * as React from 'react';

import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function RegisterPage() {
  const heroJSX = (
    <>
      <Heading>Register</Heading>
    </>
  );

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}></LayoutDefault>
    </>
  );
}
