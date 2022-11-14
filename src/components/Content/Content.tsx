import React from 'react';

import styles from './Content.module.css';

import { ParentComponentProps } from '@/interfaces/ParentComponentProps';

export default function Content(props: ParentComponentProps) {
  return <div className={styles.ContentComponent}>{props.children}</div>;
}
