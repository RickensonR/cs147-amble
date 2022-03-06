// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from '../screens/Info';
import Header from '../shared/header';
import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';

const InfoStack = createNativeStackNavigator();

// const screens = {
//     Home: {
//         screen: Home
//     }, 
//     Paint: {
//         screen: Paint
//     }
// }


export default function infoStack() {
    return (
      <InfoStack.Navigator>
      <InfoStack.Screen name="Info" component={Info} options = {({navigation}) => {
        return {
          headerTitle: ()=> <Header navigation = {navigation}/>
        }

      }
      
      
      } />
      <InfoStack.Screen name = "ViewNotes" component={ViewNotes} />
      <InfoStack.Screen name = "AddNotes" component={AddNotes} />
      </InfoStack.Navigator>
      
    );
  }



//export default NavigationContainer(HomeStack); 