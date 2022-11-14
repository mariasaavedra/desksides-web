import React from 'react';

import styles from './Header.module.css';

import NextImage from '@/components/NextImage';

export default function Header() {
  return (
    <div className={styles.HeaderComponent}>
      <NextImage
        useSkeleton
        className='w-32 md:w-40'
        src='/images/desksides-logo.svg'
        width='180'
        height='180'
        alt='Icon'
      />
      <nav></nav>
    </div>
  );
}
