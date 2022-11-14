import * as React from 'react';

import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function LoginPage() {
  const heroJSX = (
    <>
      <Heading>Login</Heading>
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
