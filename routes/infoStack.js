// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createAppContainer} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from '../screens/Info';
import Header from '../shared/header';
import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';

const IStack = createNativeStackNavigator();

// const screens = {
//     Home: {
//         screen: Home
//     }, 
//     Paint: {
//         screen: Paint
//     }
// }


export default function InfoStack() {
    return (
      <IStack.Navigator>
      <IStack.Screen name="Notes" component={Info} options = {({navigation}) => {
        return {
          headerTitle: ()=> <Header navigation = {navigation}/>
        }

      }
      
      
      } />
      <IStack.Screen name = "ViewNotes" component={ViewNotes} />
      <IStack.Screen name = "AddNotes" component={AddNotes} />
      
      </IStack.Navigator>
      
    );
  }



//export default NavigationContainer(HomeStack); 