import React from 'react';

import { Navigation } from './src/routes';

import { AppContextProvider } from './src/context/App';
import { SwitchThemeProvider } from './src/context/SwitchTheme';

const App = () => {
  return (
    <AppContextProvider>
      <SwitchThemeProvider>
        <Navigation />
      </SwitchThemeProvider>
    </AppContextProvider>
  );
};

export default App;
