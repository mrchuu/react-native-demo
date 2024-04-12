/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import {darkTheme, lightTheme} from "./src/util/Theme.jsx"
const isDarkTheme = true;
const theme = isDarkTheme ? darkTheme : lightTheme
const root = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};
AppRegistry.registerComponent(appName, () => root);
