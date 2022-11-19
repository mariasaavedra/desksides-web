import React from 'react';

import styles from './Button.module.css';

import { ParentComponentProps } from '@/interfaces/ParentComponentProps';

export interface ButtonProps extends ParentComponentProps {
  type: 'button' | 'submit',
  color: 'yellow' | 'red' | 'purple',
  variant: 'outline' | 'solid',
  onClick?: () => void,
}

export default function Button(props: ButtonProps) {
  return (
    <div className={styles.ButtonComponent}>
      {props.children}
    </div>
  );
}

Button.defaultProps = {
  variant: 'solid',
  type: 'button',
  color: 'red',
}