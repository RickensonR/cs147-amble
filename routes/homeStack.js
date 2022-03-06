// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'; 
import Paint from '../screens/Paint'; 
import Header from '../shared/header';
import react from 'react';

const HomeStack = createNativeStackNavigator();

// const screens = {
//     Home: {
//         screen: Home
//     }, 
//     Paint: {
//         screen: Paint
//     }
// }


export default function homeStack() {
  return (
        
    <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options = {({navigation}) => {
        return {
          headerTitle: ()=> <Header navigation = {navigation}/>
        }

      }
      
      
      } />
      
      <HomeStack.Screen name="Paint" component={Paint}  />
    </HomeStack.Navigator>
  );
  }



//export default NavigationContainer(HomeStack); 