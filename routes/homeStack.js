// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'; 
import Paint from '../screens/Paint'; 
import Header from '../shared/header';
import Supplies from '../screens/Supplies';
import Tutorials from '../screens/Tutorials';
import AddNotes from '../screens/AddNotes';
import ViewNotes from '../screens/ViewNotes';
import ForYou from '../screens/ForYou';

import react from 'react';

const HStack = createNativeStackNavigator();


export default function HomeStack() {
  return (
        
    <HStack.Navigator >
    <HStack.Screen name="Home" component={Home} options = {({navigation}) => {
        return {
        }

      }
      
      
      } />
      
      <HStack.Screen name="Paint" component={Paint}  />
      <HStack.Screen name="Supplies" component={Supplies}  />
      <HStack.Screen name="Tutorials" component={Tutorials}  />


      <HStack.Screen name="ViewNotes" component={ViewNotes}  />
      <HStack.Screen name="AddNotes" component={AddNotes}  />
      <HStack.Screen name="ForYou" component={ForYou}  />
      
    </HStack.Navigator>
  );
  }



//export default NavigationContainer(HomeStack); 