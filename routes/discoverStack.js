// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Discover from '../screens/discover';
import Info from '../screens/Info';
import Header from '../shared/header';
import ForYou from '../screens/ForYou';


const DStack = createNativeStackNavigator();

// const screens = {
//     Home: {
//         screen: Home
//     }, 
//     Paint: {
//         screen: Paint
//     }
// }


export default function DiscoverStack() {
    return (
      <DStack.Navigator>
      <DStack.Screen name="Discover" component={Discover} options = {({navigation}) => {
        return {
         headerTitle: ()=> <Header navigation = {navigation}/>
        }

      }
      
      
      } />
      <DStack.Screen name="ForYou" component={ForYou} />
      </DStack.Navigator>
      
    );
  }



//export default NavigationContainer(HomeStack); 