import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//new imports 
import React from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';
import Navigator from './routes/drawer';
import AppLoading from 'expo-app-loading';
import {useState} from 'react';
import 'react-native-gesture-handler';

const getFonts = () =>Font.loadAsync({
  'nunito-sans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
  'nunito-sans-bold': require('./assets/fonts/NunitoSans-Bold.ttf')

});


export default function App() {
  
  //var useState;
  const [fontsLoaded, setFontsLoaded] = useState(false); 

  if (fontsLoaded){
      return (
        <Navigator />
      );

  }else{
  return (

    //for getting fonts
     <AppLoading
    startAsync = {getFonts}
    onFinish= {()=> setFontsLoaded(true)}
    onError = {console.warn}
     />

    //<Home />
)


  }
}


