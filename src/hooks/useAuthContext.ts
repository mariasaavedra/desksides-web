import { useContext } from 'react';

import { AuthContext } from '@/context/auth-context';

export const useAuthContext = () => {
  const context: { user: any; dispatch: any } = useContext(AuthContext);
  if (!context) {
    throw Error('useAuthContext must be used inside of AuthContextProvider');
  }
  return context;
};
