import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Paint({navigation, route}){

   return (
        <View style = {globalStyles.container}>
            <Text> {route.params.title}</Text>
            <Text> {route.params.body}</Text>
            
        </View>
   )
}

// const styles = StyleSheet.create({
//     container: {
//         padding:24
//     }
// });


// //og paint text
// <Text style={globalStyles.titleText}>
// Paint screen
// </Text>