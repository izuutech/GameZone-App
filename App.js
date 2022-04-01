import * as Font from 'expo-font';
//import { registerRootComponent } from 'expo';
import { useState } from 'react';

//import { AppLoading } from "expo";
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

const getFonts=()=>{
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded]=useState(false)

  if(fontsLoaded){
    return (
      <Navigator />
    );
  }else{
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
        onError={()=>console.log(err)}
      />
    )
  }
}
//registerRootComponent(App);
