import React from 'react';

import styles from './LayoutDefault.module.css';

import Content from '@/components/Content/Content';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

import { MaybeParentComponentProps } from '@/interfaces/ParentComponentProps';

export interface LayoutDefaultProps extends MaybeParentComponentProps {
  heroJSX?: string | JSX.Element,
  hideHero?: boolean
}

export default function LayoutDefault(props: LayoutDefaultProps) {
  return (
    <div className={styles.LayoutDefaultComponent}>
      <Header></Header>
      {!props.hideHero && <Hero>{props.heroJSX}</Hero>}
      <Content>{props.children}</Content>
      <Footer></Footer>
    </div>
  );
}
