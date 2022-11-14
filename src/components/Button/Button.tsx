import React from 'react';

import styles from './Button.module.css';

export interface ButtonProps {}

export default function Button(props: ButtonProps) {
  return <div className={styles.ButtonComponent}></div>;
}
