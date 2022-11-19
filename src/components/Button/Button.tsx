import React from 'react';

import styles from './Button.module.css';

import { ParentComponentProps } from '@/interfaces/ParentComponentProps';

export interface ButtonProps extends ParentComponentProps {
  id?: string,
  type: 'button' | 'submit',
  color: 'green' | 'red' | 'yellow' | 'purple';
  variant: 'outline' | 'solid',
  size: 'sm' | 'md' | 'lg'
  url?: string,
  onClick?: () => void,
}

export default function Button(props: ButtonProps) {

  const getClasses = () => {
    const classes = [];
    if (props.variant === 'solid') {
      classes.push(`text-white underline bg-brand-${props.color} bolder font-lg font-heading`);
    }
    if (props.variant == 'outline') {
      if (props.color === 'red') {
        classes.push(`text-brand-red border-brand-red`);
      }
      if (props.color === 'yellow') {
        classes.push(`text-brand-yellow border-brand-yellow`);
      }
      if (props.color === 'green') {
        classes.push(`text-brand-green border-brand-green`);
      }
      if (props.color === 'purple') {
        classes.push(`text-brand-purple border-brand-purple`);
      }
      classes.push(`border border-1 text-xs rounded-[28px] tracking-wide uppercase`);
    }
    if (props.size === 'sm') {
      classes.push(`p-2 px-4`);
    }
    if (props.size === 'md') {
      classes.push(`p-4 px-6`);
    }
    if (props.size === 'lg') {
      classes.push(`p-8 px-10`);
    }
    return classes.join(' ');
  }

  return (
    <button
      id={props.id}
      type={props.type}
      className={styles.ButtonComponent + ' ' + getClasses()
      }>
      {props.children}
    </button >
  );
}

Button.defaultProps = {
  variant: 'solid',
  type: 'button',
  size: 'md',
  color: 'red',
}