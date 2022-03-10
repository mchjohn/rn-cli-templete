/**
 * AppContext is a global context that wraps all the app components
 * including other contexts.
 * It is used to share state and functions that need to be accessible
 * by all the components and context.
 * Ex: Theme, Authentication data, etc.
 * And it is also used to show a splash screen while the app is loading.
 */
 import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
// import ActivityIndicator from 'react-native';
import { ActivityIndicator, useColorScheme } from 'react-native';

import { useStorage } from '../hooks/useStorage';

import { AuthData } from '../interfaces/auth-data';
import { appStorageAuthDataKey } from '../constants/auth';

type Theme = 'light' | 'dark';
/** If there's no theme selected by the user and it is not possible to get the theme
 * from users's phone, the theme will be set to DEFAULT_THEME
 */
const DEFAULT_THEME: Theme = 'light';

interface AppContextProps {
  authData: AuthData;
  currentTheme: Theme;
  isLoadingAuth: boolean;
  loginInProcess: boolean;
  setCurrentTheme: (theme: Theme) => void;
  setAuthData: (authData: AuthData) => void;
  setLoginInProcess: (loginInProcess: boolean) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext({} as AppContextProps);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const deviceTheme = useColorScheme();
  const storage = useStorage();
  /**
   * Loading states starts with true and become false when the action is completed.
   * It is used to show a splash screen while the app is loading.
   */
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);

  const [loginInProcess, setLoginInProcess] = useState(false);
  const [authData, setAuthData] = useState<AuthData>({} as AuthData);

  useEffect(() => {
    async function getCurrentTheme() {
      /** Try to get theme from storage (user's selected theme) */
      let currentTheme = (await storage.getItem('mykey@theme')) as Theme | null;

      if (!currentTheme) {
        /** Try to get theme from user's phone */
        currentTheme = deviceTheme as Theme | null;
      }

      if (!currentTheme) {
        /** Set default theme */
        currentTheme = DEFAULT_THEME;
      }

      setCurrentTheme(currentTheme);
      setIsLoadingTheme(false);
    }
    getCurrentTheme();
  });

  useEffect(() => {
    async function loadAuthData(): Promise<void> {
      /** If user is logged, authData will be stored on phone storage. */
      const response = (await storage.getItem(appStorageAuthDataKey)) as AuthData;

      if (response) {
        setAuthData(response);
      }
      /** else: user is not logged and must be redirected to login screen */

      setIsLoadingAuth(false);
    }

    if (!loginInProcess) {
      loadAuthData();
    }
  }, [loginInProcess]); // eslint-disable-line

  if (isLoadingTheme || isLoadingAuth) {
    /**
     * If something is loading, show app splash screen.
     */
    return <ActivityIndicator size="small" color="#0000ff" />;
  }
  /** else: everything is loaded, so the app can be displayed */

  return (
    <AppContext.Provider
      value={{
        authData,
        currentTheme,
        isLoadingAuth,
        loginInProcess,
        setAuthData,
        setCurrentTheme,
        setLoginInProcess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useAppContext() {
  const context = useContext(AppContext);

  return context;
}

export { AppContextProvider, useAppContext };
