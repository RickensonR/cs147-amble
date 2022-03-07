import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Tutorials(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect6}>
        <View style={styles.modules6Row}>
          <Text style={styles.modules6}>4. conclusion</Text>
          <EntypoIcon name="chevron-right" style={styles.icon9}></EntypoIcon>
        </View>
      </View>
      <View style={styles.button1StackRow}>
        <View style={styles.button1Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Paint")}
            style={styles.button1}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Paint")}
              style={styles.button3}
            ></TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.back1}>Back</Text>
          <EntypoIcon name="chevron-left" style={styles.icon1}></EntypoIcon>
        </View>
        <Text style={styles.tutorials}>tutorials</Text>
      </View>
      <View style={styles.icon2StackStack}>
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
      </View>
      <View style={styles.rect3}>
        <View style={styles.modules3Row}>
          <Text style={styles.modules3}>1. fundamentals</Text>
          <EntypoIcon name="chevron-right" style={styles.icon6}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.modules4Row}>
          <Text style={styles.modules4}>1. direct painting</Text>
          <EntypoIcon name="chevron-right" style={styles.icon7}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.modules5Row}>
          <Text style={styles.modules5}>3. portrait study</Text>
          <EntypoIcon name="chevron-right" style={styles.icon8}></EntypoIcon>
        </View>
      </View>
      <Text style={styles.modules}>modules</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect6: {
    width: 275,
    height: 114,
    backgroundColor: "rgba(255,246,185,1)",
    borderRadius: 16,
    flexDirection: "row",
    marginTop: 631,
    marginLeft: 51
  },
  modules6: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 4
  },
  icon9: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 97
  },
  modules6Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 16,
    marginTop: 19
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
  button3: {
    width: 71,
    height: 22,
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  back1: {
    top: 7,
    left: 32,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18
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
    height: 36
  },
  tutorials: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 30,
    marginLeft: 42,
    marginTop: 29
  },
  button1StackRow: {
    height: 66,
    flexDirection: "row",
    marginTop: -633,
    marginLeft: 9,
    marginRight: 124
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
    marginTop: -145
  },
  rect3: {
    width: 275,
    height: 114,
    backgroundColor: "rgba(255,246,185,1)",
    borderRadius: 16,
    flexDirection: "row",
    marginTop: 121,
    marginLeft: 50
  },
  modules3: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 5
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 73
  },
  modules3Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 14,
    marginTop: 16
  },
  rect4: {
    width: 275,
    height: 114,
    backgroundColor: "rgba(255,246,185,1)",
    borderRadius: 16,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 51
  },
  modules4: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 4
  },
  icon7: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 63
  },
  modules4Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 16,
    marginTop: 19
  },
  rect5: {
    width: 275,
    height: 114,
    backgroundColor: "rgba(255,246,185,1)",
    borderRadius: 16,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 51
  },
  modules5: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 5
  },
  icon8: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 61
  },
  modules5Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 16,
    marginTop: 18
  },
  modules: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: -408,
    marginLeft: 54
  }
});

export default Tutorials;
