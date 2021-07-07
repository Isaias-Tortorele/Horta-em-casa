import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { AdMobBanner, setTestDeviceIDAsync} from 'expo-ads-admob';
import Routes from './src/routes';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black, } from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({ 
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold, 
    Roboto_900Black 
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
    <NavigationContainer >
      <StatusBar hidden={false}/>
      <Routes/> 
      
    </NavigationContainer>

  );
}
}
