// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'; 
import Paint from '../screens/Paint'; 
import Header from '../shared/header';
import Supplies from '../screens/Supplies';
import Tutorials from '../screens/Tutorials';

import react from 'react';

const HStack = createNativeStackNavigator();

// const screens = {
//     Home: {
//         screen: Home
//     }, 
//     Paint: {
//         screen: Paint
//     }
// }


export default function HomeStack() {
  return (
        
    <HStack.Navigator>
    <HStack.Screen name="Home" component={Home} options = {({navigation}) => {
        return {
          headerTitle: ()=> <Header navigation = {navigation}/>
        }

      }
      
      
      } />
      
      <HStack.Screen name="Paint" component={Paint}  />
      <HStack.Screen name="Supplies" component={Supplies}  />
      <HStack.Screen name="Tutorials" component={Tutorials}  />
    </HStack.Navigator>
  );
  }



//export default NavigationContainer(HomeStack); 