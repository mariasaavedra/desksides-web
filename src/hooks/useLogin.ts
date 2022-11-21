import { useRouter } from 'next/router';
import { useState } from 'react';

import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState<object>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const { dispatch } = useAuthContext();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError({});

    const response = await fetch('http://localhost:3333/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      // update loading state
      setIsLoading(false);

      // is approved?

      // is verfied?

      switch (json.role) {
        case 'ADMIN':
          router.push('admin/dashboard');
          break;
        case 'JOURNALIST':
          router.push('brand/dashboard');
          break;
        case 'BRAND':
          router.push('dashboard');
          break;
        default:
          console.log(`Sorry, an error occued`);
      }
    }
  };

  return { login, isLoading, error };
};
