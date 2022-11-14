import React from 'react';

import styles from './Tag.module.css';

export interface TagProps {}

export default function Tag(props: TagProps) {
  return <div className={styles.TagComponent}></div>;
}
