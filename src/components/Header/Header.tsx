import Link from 'next/link';
import React from 'react';

import styles from './Header.module.css';

import { useAuthContext } from '@/hooks/useAuthContext';

import NextImage from '@/components/NextImage';

export default function Header() {
  const { user } = useAuthContext()
  return (
    <div className={styles.HeaderComponent}>
      <Link href='/'>
        <NextImage
          useSkeleton
          className='w-32 md:w-40'
          src='/images/desksides-logo.svg'
          width='180'
          height='180'
          alt='Icon'
        /></Link>
      <p>{user.first_name}</p>
    </div>
  );
}
