import { createContext, useState } from 'react';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
};

const defaultLogOut = () => {};

const AppContext = createContext({ user: defaultUser, logOut: defaultLogOut });

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const logOut = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  return (
    <AppContext.Provider value={{ user, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };