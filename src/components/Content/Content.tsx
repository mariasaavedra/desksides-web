import React from 'react';

import styles from './Content.module.css';

import { ParentComponentProps } from '@/interfaces/ParentComponentProps';

interface ContentProps extends ParentComponentProps {
  justify: 'center' | 'left' | 'right'
}

export default function Content(props: ContentProps) {
  return <div className={styles.ContentComponent + ` justify-${props.justify}`}>{props.children}</div>;
}

Content.defaultProps = {
  justify: 'center'
}