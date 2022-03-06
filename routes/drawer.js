import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

import homeStack from "./homeStack";
import infoStack from "./infoStack";
import profileStack from "./profileStack";
import discoverStack from "./discoverStack";

const drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
        <drawer.Navigator screenOptions= {{headerShown: false}}>
        <drawer.Screen name="Home" component={homeStack} />
        <drawer.Screen name="Notes" component={infoStack} />
        <drawer.Screen name="Profile" component={profileStack} />
        <drawer.Screen name="Discover" component={profileStack} />
        </drawer.Navigator>
      </NavigationContainer>
    );


}