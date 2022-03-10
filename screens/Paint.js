import {globalStyles} from '../styles/global';
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Paint(props) {
    return (
    // <ImageBackground source = {require("../screens/background.jpg") }style = {styles.container}> 
      <View style={styles.container}>
        {/* <View style={styles.button1Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button1}
          >
            <Text style={styles.back1}>Back</Text>
          </TouchableOpacity>
          {<EntypoIcon name="chevron-left" style={styles.icon1}></EntypoIcon>}
        </View> */}
        {/* <View style={styles.icon2StackStack}>
          <View style={styles.icon2Stack}>
            <EntypoIcon name="menu" style={styles.icon2}></EntypoIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Untitled1")}
              style={styles.button2}
            ></TouchableOpacity>
            <View style={styles.rect1}>
              <View style={styles.icon5Row}>
                <EntypoIcon name="menu" style={styles.icon5}></EntypoIcon>
                <Text style={styles.amble2}>amble</Text>
                <EntypoIcon name="home" style={styles.icon4}></EntypoIcon>
              </View>
            </View>
          </View>
          <EntypoIcon name="home" style={styles.icon3}></EntypoIcon>
          <Text style={styles.amble1}>amble</Text>
        </View> */}
        <View style={styles.icon6Row}>
          <FontAwesomeIcon
            name="paint-brush"
            style={styles.icon6}
          ></FontAwesomeIcon>
          <Text style={styles.text}>paint</Text>
        </View>
        <View style={styles.button3Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Supplies")}
            style={styles.button3}
          >
            <Text style={styles.supplies}>supplies</Text>
          </TouchableOpacity>
          <View style={styles.rect5}>
            <Text style={styles.startHere}>start {"\n"}here!</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Tutorials")}
          style={styles.button4}
        >
          <View style={styles.tutorialsStack}>
            <Text style={styles.tutorials}>tutorials</Text>
            <Text style={styles.loremIpsum}></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button5}>
          <Text style={styles.examples}>examples</Text>
        </TouchableOpacity>
      </View>
    // </ImageBackground>
    );

  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center"
      
    },
    button1: {
      top: 7,
      left: 8,
      width: 71,
      height: 22,
      position: "absolute",
      backgroundColor: "#E6E6E6",
      opacity: 0
    },
    back1: {
      fontFamily: "righteous-regular",
      color: "#121212",
      fontSize: 18,
      marginLeft: 24
    },
    icon1: {
      top: 0,
      left: 0,
      position: "absolute",
      color: "rgba(0,0,0,1)",
      fontSize: 32
    },
    button1Stack: {
      width: 79,
      height: 36,
      marginTop: 112,
      marginLeft: 9
    },
    icon2: {
      top: 10,
      left: 9,
      position: "absolute",
      color: "rgba(0,0,0,1)",
      fontSize: 48
    },
    button2: {
      top: 19,
      left: 9,
      width: 48,
      height: 35,
      position: "absolute",
      backgroundColor: "#E6E6E6",
      opacity: 0
    },
    rect1: {
      top: 0,
      left: 0,
      width: 375,
      height: 74,
      position: "absolute",
      backgroundColor: "rgba(171,232,240,1)",
      flexDirection: "row"
    },
    icon5: {
      color: "rgba(0,0,0,1)",
      fontSize: 48,
      height: 55,
      width: 48
    },
    amble2: {
      fontFamily: "righteous-regular",
      color: "#121212",
      fontSize: 28,
      marginLeft: 9,
      marginTop: 10
    },
    icon4: {
      color: "rgba(0,0,0,1)",
      fontSize: 40,
      height: 45,
      width: 40,
      marginLeft: 173,
      marginTop: 4
    },
    icon5Row: {
      height: 55,
      flexDirection: "row",
      flex: 1,
      marginRight: 19,
      marginLeft: 9,
      marginTop: 10
    },
    icon2Stack: {
      top: 0,
      left: 0,
      width: 375,
      height: 74,
      position: "absolute"
    },
    icon3: {
      top: 14,
      left: 316,
      position: "absolute",
      color: "rgba(0,0,0,1)",
      fontSize: 40
    },
    amble1: {
      top: 20,
      left: 66,
      position: "absolute",
      fontFamily: "righteous-regular",
      color: "#121212",
      fontSize: 28
    },
    icon2StackStack: {
      width: 375,
      height: 74,
      marginTop: -115
    },
    icon6: {
      color: "rgba(0,0,0,1)",
      fontSize: 33,
      marginTop: 4
    },
    text: {
      fontFamily: "righteous-regular",
      color: "#121212",
      fontSize: 30,
      marginLeft: 8
    },
    icon6Row: {
      height: 37,
      flexDirection: "row",
      marginTop: 0,
      marginLeft: 130,
      marginRight: 130
    },
    button3: {
      width: 167,
      height: 114,
      backgroundColor: "rgba(255,149,165,1)",
      borderRadius: 23,
      marginTop: 22
    },
    supplies: {
      fontFamily: "righteous-regular",
      color: "#121212",
      fontSize: 22,
      marginTop: 43,
      marginLeft: 40
    },
    rect5: {
      width: 71,
      height: 51,
      backgroundColor: "rgba(253,253,253,0)",
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 12,
      marginLeft: 25
    },
    startHere: {
      fontFamily: "roboto-regular",
      color: "#121212",
      fontSize: 18,
      marginTop: 5,
      marginLeft: 14
    },
    button3Row: {
      height: 136,
      flexDirection: "row",
      marginTop: 36,
      marginLeft: 41,
      marginRight: 71
    },
    button4: {
      width: 167,
      height: 114,
      backgroundColor: "rgba(255,246,185,1)",
      borderRadius: 23,
      marginTop: 53,
      marginLeft: 149
    },
    tutorials: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "righteous-regular",
      color: "#121212",
      fontSize: 22
    },
    loremIpsum: {
      top: 16,
      left: 50,
      position: "absolute",
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    tutorialsStack: {
      width: 89,
      height: 27,
      marginTop: 43,
      marginLeft: 38
    },
    button5: {
      width: 167,
      height: 114,
      backgroundColor: "rgba(255,149,165,1)",
      borderRadius: 23,
      marginTop: 53,
      marginLeft: 41
    },
    examples: {
      fontFamily: "righteous-regular",
      color: "#121212",
      fontSize: 22,
      marginTop: 44,
      marginLeft: 35
    }
  });
  
  export default Paint;