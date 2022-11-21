import Link from 'next/link';
import React from 'react';

import styles from './Header.module.css';

import { useAuthContext } from '@/hooks/useAuthContext';

import NextImage from '@/components/NextImage';

export default function Header() {
  const { user } = useAuthContext();
  return (
    <div className={styles.HeaderComponent + ' justify-between'}>
      <Link href='/'>
        <NextImage
          useSkeleton
          className='w-32 md:w-40'
          src='/images/desksides-logo.svg'
          width='180'
          height='180'
          alt='Icon'
        />
      </Link>
      <div className='mr-0 flex'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
        <p>{user?.first_name}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
          />
        </svg>
        <p>Logout</p>
      </div>
    </div>
  );
}
