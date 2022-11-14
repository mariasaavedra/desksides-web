import * as React from 'react';

import Footer from '@/components/Footer/Footer';
import GuestHeader from '@/components/GuestHeader/GuestHeader';
import NextImage from '@/components/NextImage';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <GuestHeader></GuestHeader>
      <div className='mx-auto h-[50vh] bg-[#F6F3E3] text-center'>
        <NextImage
          useSkeleton
          className='mx-auto pt-10 md:w-40'
          src='/images/desksides-logo.svg'
          width='180'
          height='180'
          alt='Icon'
        />
      </div>
      <Footer></Footer>
    </>
  );
}
