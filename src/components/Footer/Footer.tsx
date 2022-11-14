import Link from 'next/link';
import React from 'react';

import styles from './Footer.module.css';

import NextImage from '@/components/NextImage';

export default function Footer() {
  return (
    <div className={styles.FooterComponent}>
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
    </div>
  );
}
