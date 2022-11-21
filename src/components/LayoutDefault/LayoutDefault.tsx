import React from 'react';

import styles from './LayoutDefault.module.css';

import { useAuthContext } from '@/hooks/useAuthContext';

import Content from '@/components/Content/Content';
import Footer from '@/components/Footer/Footer';
import GuestHeader from '@/components/GuestHeader/GuestHeader';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

import { MaybeParentComponentProps } from '@/interfaces/ParentComponentProps';

export interface LayoutDefaultProps extends MaybeParentComponentProps {
  heroJSX?: string | JSX.Element;
  hideHero?: boolean;
  justify: 'center' | 'left' | 'right';
}

export default function LayoutDefault(props: LayoutDefaultProps) {
  const { user } = useAuthContext();
  return (
    <div className={styles.LayoutDefaultComponent}>
      {user ? <Header></Header> : <GuestHeader></GuestHeader>}
      {!props.hideHero && <Hero>{props.heroJSX}</Hero>}
      <Content justify={props.justify}>{props.children}</Content>
      <Footer></Footer>
    </div>
  );
}

LayoutDefault.defaultProps = {
  justify: 'center',
};
