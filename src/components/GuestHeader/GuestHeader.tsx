import Link from 'next/link';
import React from 'react';

import styles from './GuestHeader.module.css';

import NextImage from '@/components/NextImage';

export default function GuestHeader() {
  return (
    <div className={styles.GuestHeaderComponent}>
      <Link href='/about'>ABOUT</Link>
      <Link href='/how-it-works'>HOW IT WORKS</Link>
      <Link href='/'>
        <NextImage
          useSkeleton
          className='w-32 md:w-40'
          src='/images/desksides-logo.svg'
          width='180'
          height='180'
          alt='Icon'
        />{' '}
      </Link>
      <Link href='/register'>GET STARTED</Link>
      <Link href='/login'>SIGN IN</Link>
    </div>
  );
}
