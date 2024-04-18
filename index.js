import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import {darkTheme, lightTheme} from './src/util/Theme.jsx';
import {name as appName} from './app.json';
import App from './App';
import {ThemeContext} from './src/context/ThemeContext.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Root = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const themeContext = useMemo(() => {
    return {
      isDarkTheme,
      setIsDarkTheme,
    };
  });
  useEffect(()=>{
    const loadTheme = async () =>{
      const currentTheme = await AsyncStorage.getItem("isDarkTheme");
      if(currentTheme === "true"){
        setIsDarkTheme(true)
      }else{
        setIsDarkTheme(false)
      }
    }
    loadTheme();
  }, [])
  return (
    <ThemeContext.Provider value={themeContext}>
      <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <App />
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
