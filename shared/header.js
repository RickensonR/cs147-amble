import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation}){

    const openMenu = () =>{
        navigation.openDrawer()

    }

    return(
        <View style = {styles.header}>
            {
                <MaterialIcons name = 'menu' size={28} onPress={openMenu} style={styles.icon}>

                </MaterialIcons>
            }
            <View> 
                <Text style= {styles.headerText}> amble</Text>
            </View>
            
        </View>


    )
}

const styles = StyleSheet.create({
    header:{
        width: '110%',
        height: '180%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ADD8E6"

    }, 
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,

    },
    icon:{
        position: 'absolute', 
        left: 16

    }

}

)