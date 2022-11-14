import { CSSProperties, ReactNode } from 'react';
import { ComponentProps } from './ComponentProps';
import { SpacingProps } from './SpacingProps';

export interface ParentComponentProps extends ComponentProps {
  children: ReactNode;
}

export interface MaybeParentComponentProps extends ComponentProps {
  children?: ReactNode;
}

export interface SpacingParentComponentProps extends SpacingProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
