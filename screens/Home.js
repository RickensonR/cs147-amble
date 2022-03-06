import React , {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home({navigation}){


    //navigation button handler
    const pressHandler = () => {
        navigation.navigate('Paint')


    }

    const [activities, setActivity] = useState([
        {title: "Paint", body: "Here are some instructions on how to paint"},
        {title: "Cook", body: "Here are some instructions on how to cook"}


    ]);

   return (
        <View style = {styles.container}>
            <FlatList
                data = {activities}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress = {() => navigation.navigate('Paint',item )}>
                    <Text style = {globalStyles.titleText}>{item.title} </Text>
                    </TouchableOpacity>
                )}
            />
           
        </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
          backgroundColor: 'white',
      }
})

//for pressing a button to navigate
// <Text style={globalStyles.titleText}>
// Home screen
// </Text>
// <Button title = "My button" onPress ={pressHandler} />


// const styles = StyleSheet.create({
//     container: {
//         padding:24
//     }
// });