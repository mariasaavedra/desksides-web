import React from 'react';

import styles from './Button.module.css';

import { ParentComponentProps } from '@/interfaces/ParentComponentProps';

export interface ButtonProps extends ParentComponentProps {
  id?: string,
  type: 'button' | 'submit',
  color: 'yellow' | 'red' | 'purple',
  variant: 'outline' | 'solid',
  url?: string,
  onClick?: () => void,
}

export default function Button(props: ButtonProps) {
  return (
    <button id={props.id} type={props.type} className={styles.ButtonComponent}>
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'solid',
  type: 'button',
  color: 'red',
}