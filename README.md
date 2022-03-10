# Template com React Native CLI e TypeScript

### Libs
- @react-native-async-storage/async-storage;
- @react-navigation/native;
- @react-navigation/native-stack;
- react-native-reanimated;
- react-native-svg;
- react-native-iphone-x-helper;
- react-native-responsive-fontsize;
- react-native-svg-transformer;
- styled-components;

### Context
- App: Context global para centralizar outros context, segura splash screen, recupera tema (dark/light) do storage, carrega dados do storage;
- SwitchTheme alterna entre light e dark, armazenando no storage;

### Hooks
- useStorage: Salva, retornar e deleta dados no storage (@react-native-async-storage/async-storage);

### Interfaces
- use-storage: Tipa as funções do useStorage;

### Constants
- auth: Chave do storage;


### Fonts
- Usando fonte Quicksand, para altera-las basta trocar/adicionar em assets/fonts as fonte desejadas; No arquivo react-native.config.js incluir a fonte desejada;