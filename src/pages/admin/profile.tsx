import * as React from 'react';

import AssesmentForm from '@/components/AssesmentForm/AssesmentForm';
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
      <LayoutDefault justify='left' heroJSX={heroJSX}>
        <AssesmentForm></AssesmentForm>
      </LayoutDefault>
    </>
  );
}
