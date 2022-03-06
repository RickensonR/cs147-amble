// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from '../screens/Info';
import Header from '../shared/header';

const ProfileStack = createNativeStackNavigator();

// const screens = {
//     Home: {
//         screen: Home
//     }, 
//     Paint: {
//         screen: Paint
//     }
// }


export default function profileStack() {
    return (
      <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Info} options = {({navigation}) => {
        return {
          headerTitle: ()=> <Header navigation = {navigation}/>
        }

      }
      
      
      } />
      </ProfileStack.Navigator>
      
    );
  }



//export default NavigationContainer(HomeStack); 