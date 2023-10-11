import React from 'react';

interface AppContextProps {
  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextProps>({
  headerHeight: 0,
  setHeaderHeight: () => null,
});

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  return (
    <AppContext.Provider value={{ headerHeight, setHeaderHeight }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
