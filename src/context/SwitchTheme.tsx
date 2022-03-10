/**
 * This context is used to toggle the theme of the application,
 * and create the ThemeProvider from styled-components.
 * The current selected theme is stored in AppContext.
 */
 import React, { createContext, ReactNode, useCallback, useContext } from 'react';
 import { ThemeProvider } from 'styled-components/native';

 import { useStorage } from '../hooks/useStorage';
 import { useAppContext } from './App';

 import themes from '../global/styles/theme';

 interface SwitchThemeContextProps {
   toggleTheme: () => Promise<void>;
 }

 interface SwitchThemeProviderProps {
   children: ReactNode;
 }

 const SwitchThemeContext = createContext({} as SwitchThemeContextProps);

 function SwitchThemeProvider({ children }: SwitchThemeProviderProps) {
   const { currentTheme, setCurrentTheme } = useAppContext();
   const storage = useStorage();

   const toggleTheme = useCallback(async () => {
     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
     await storage.setItem('mykey@theme', newTheme);
     setCurrentTheme(newTheme);
   }, [currentTheme, setCurrentTheme, storage]);

   return (
     <SwitchThemeContext.Provider value={{ toggleTheme }}>
       <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
     </SwitchThemeContext.Provider>
   );
 }

 function useSwitchTheme() {
   const context = useContext(SwitchThemeContext);

   return context;
 }

 export { SwitchThemeProvider, useSwitchTheme };
