import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext({ user: {}, dispatch: {} });
export const authReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user') || '';
    const user = JSON.parse(storedUser);
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);
  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
