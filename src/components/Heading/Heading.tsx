import React from 'react';

import styles from './Heading.module.css';

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.HeadingComponent + ' font-heading'}>{children}</div>
  );
}
