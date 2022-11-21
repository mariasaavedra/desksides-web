import * as React from 'react';

import { useAuthContext } from '@/hooks/useAuthContext';

import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function MatchesPage() {
  const { user } = useAuthContext();

  const heroJSX = (
    <>
      <Heading>{user?.first_name + ' ' + user?.last_name}</Heading>
      <p className='leading-relaxed text-white'>Your connections</p>
    </>
  );

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}>
        <h1>Connections</h1>
      </LayoutDefault>
    </>
  );
}
