import React from 'react';

import { AppContextProvider } from './src/context/App';
import { SwitchThemeProvider } from './src/context/SwitchTheme';

import { Home } from './src/screens/Home';

const App = () => {
  return (
    <AppContextProvider>
      <SwitchThemeProvider>
        <Home />
      </SwitchThemeProvider>
    </AppContextProvider>
  );
};

export default App;
