import * as React from 'react';

import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function AdminProfile() {
  const heroJSX = (
    <>
      <Heading>Keep it up, boss.</Heading>
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
