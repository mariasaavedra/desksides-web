import Link from 'next/link';
import * as React from 'react';

import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';
import NextImage from '@/components/NextImage';

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
        <div>
          <Link href='/'>
            <NextImage
              useSkeleton
              className='w-32'
              src='/images/calendar-icon-orange.svg'
              width='180'
              height='180'
              alt='Icon'
            />
          </Link>
        </div>
        <div>
          <Link href='/contact'>
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/images/mail.svg'
              width='180'
              height='180'
              alt='Icon'
            />
          </Link>
        </div>
        <div>
          <Link href='/'>
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/images/folder-icon-orange.svg'
              width='180'
              height='180'
              alt='Icon'
            />
          </Link>
        </div>
        <div>
          <Link href='/matches'>
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/images/people.svg'
              width='180'
              height='180'
              alt='Icon'
            />
          </Link>
        </div>
        <div>
          <Link href='/'>
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/images/settings.svg'
              width='180'
              height='180'
              alt='Icon'
            />
          </Link>
        </div>
      </LayoutDefault>
    </>
  );
}
