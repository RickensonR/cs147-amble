import React , {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from './animations';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {FAB, List} from "react-native-paper";
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const ITEM_LENGTH = Math.max(ITEM_WIDTH, ITEM_HEIGHT);


const data = [
  {
      title:"bake",
      icon: "cake",
      source: "Entypo",
      completion: "90%",
  },
  {
      title:"paint",
      icon: "paint-brush",
      source: "FontAwesome",
      completion: "0%",
  },
  {
      title:"write",
      icon: "book",
      source: "FontAwesome",
      completion: "10%",
  },
  {
      title:"garden",
      icon: "flower",
      source: "Entypo",
      completion: "30%",
  },
  {
      title:"photograph",
      icon: "camera-retro",
      source: "FontAwesome",
      completion: "0%",
  },
];


const components = {
    Entypo: EntypoIcon,
    FontAwesome: FontAwesomeIcon
};


export default function Home({navigation}){


    // //navigation button handler
    // const pressHandler = () => {
    //     navigation.navigate('Paint')


    // }

    // const _renderItem = ({ item }) => {
    //     const IconComponent = components[item.source];
    //     return (

    //       <TouchableOpacity onPress = {() => navigation.navigate('Paint',item )} style={styles.itemContainer}>
    //         <Text style={styles.itemLabel}>{item.title}</Text>
    //         <IconComponent
    //                 name={item.icon}
    //                 style={styles.icon6}
    //         ></IconComponent>
    //         <Text style={styles.itemCompletion}>{item.completion} completed</Text>
    //       </TouchableOpacity>
    //     );
    // }

    // const [activities, setActivity] = useState([
    //     {title: "Paint", body: "Here are some instructions on how to paint"},
    //     {title: "Cook", body: "Here are some instructions on how to cook"}


    // ]);

    //const [index, setIndex] = useState(1);

    return (
      
        <View style = {styles.container}>
            <BottomTab />
         

         {/* <FAB
                small
                icon = 'plus'
                label = 'Add new note'
                onPress = {()=> navigation.navigate("ViewNotes" )}

            />
             <FAB
                small
                icon = 'plus'
                label = 'Add new note'
                onPress = {()=> navigation.navigate("Home" )}

            />
             <FAB
                small
                icon = 'plus'
                label = 'Add new note'
                onPress = {()=> navigation.navigate("ForYou" )}

            /> */}
           
        </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
          backgroundColor: 'white',
      },

    carouselContainer: {
      marginTop: .5 * ITEM_LENGTH,
    },
    itemContainer: {
      width: ITEM_LENGTH,
      height: ITEM_LENGTH,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b8e6ee',
      borderRadius: 500,
    },
    itemLabel: {
      color: 'black',
      fontSize: 24,
      fontFamily: "righteous-regular",
    },
    itemCompletion: {
      color: 'black',
      fontSize: 16,
      fontFamily: "righteous-regular",
    },
    icon6: {
      color: "rgba(0,0,0,1)",
      fontSize: 66,
      marginTop: 4
    },
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