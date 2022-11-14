import * as React from 'react';

import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function PaymentGateway() {
  const heroJSX = (
    <>
      <Heading>Payments</Heading>
    </>
  );

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}></LayoutDefault>
    </>
  );
}
