import * as React from 'react';

import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import InputTextArea from '@/components/InputTextArea/InputTextArea';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

const heroJSX = (
  <>
    <Heading>Contact Page</Heading>
  </>
);

export default function ContactPage() {
  return (
    <>
      <LayoutDefault heroJSX={heroJSX}>
        <InputTextArea></InputTextArea>
        <Button></Button>
      </LayoutDefault>
    </>
  );
}
