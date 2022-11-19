/* eslint-disable */
import Button from '@/components/Button/Button';
import React from 'react';
import styles from './EmailConfirmation.module.css';


export interface EmailConfirmationProps {
}

export default function EmailConfirmation(props: EmailConfirmationProps) {
    return (
        <div className={styles.EmailConfirmationComponent}>
            <p className="font-heading text-xl">Please check your email!</p>
            <p>Please confirm your email, so that we can finish setting up your account.</p>
            <Button>Log in</Button>
        </div>
    );
}