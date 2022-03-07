// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from '../screens/Info';
import Header from '../shared/header';

const DiscoverStack = createNativeStackNavigator();

// const screens = {
//     Home: {
//         screen: Home
//     }, 
//     Paint: {
//         screen: Paint
//     }
// }


export default function discoverStack() {
    return (
      <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="Profile" component={Info} options = {({navigation}) => {
        return {
         headerTitle: ()=> <Header navigation = {navigation}/>
        }

      }
      
      
      } />
      </DiscoverStack.Navigator>
      
    );
  }



//export default NavigationContainer(HomeStack); 