import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import {IconButton} from "react-native-paper";

import HomeStack from "./homeStack";
import InfoStack from "./infoStack";
import ProfileStack from "./profileStack";
import DiscoverStack from "./discoverStack";
import {StyleSheet} from "react-native";

const drawer = createDrawerNavigator();

export default function Navigator() {

 
    return (
        <NavigationContainer style = {styles.container}>
        <drawer.Navigator screenOptions= {{
          headerShown: false,
          drawerActiveBackgroundColor: "#FDF074",
          drawerActiveTintColor: "black",
          drawerLabelStyle:{
            marginLeft: -30
          }
    }}
    >
        <drawer.Screen name="Home" component={HomeStack} options = {{drawerIcon: ({color}) => (<IconButton
                icon="home"
                size={25}
                color='black'/>)}}/>
        <drawer.Screen name="My Notes" component={InfoStack} options = {{drawerIcon: ({color}) => (<IconButton
                icon="lead-pencil"
                size={25}
                color='black'/>)}}/>
        <drawer.Screen name="My amble" component={ProfileStack} options = {{drawerIcon: ({color}) => (<IconButton
                icon="account"
                size={25}
                color='black'/>)}}/>
        <drawer.Screen name="Discover" component={DiscoverStack} options = {{drawerIcon: ({color}) => (<IconButton
                icon="earth"
                size={25}
                color='black'/>)}} />
        </drawer.Navigator>
      </NavigationContainer>
    );

    


}

const styles = StyleSheet.create({

  container:{
    backgroundColor: "red",
    fontWeight: "bold"

  }


})