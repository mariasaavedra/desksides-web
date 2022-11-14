import React from 'react';

import styles from './Hero.module.css';

import { ParentComponentProps } from '@/interfaces/ParentComponentProps';

export default function Hero(props: ParentComponentProps) {
  return <div className={styles.HeroComponent}>{props.children}</div>;
}
