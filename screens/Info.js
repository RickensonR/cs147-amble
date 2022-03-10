import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Mynotes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.amble1Stack}>
        {/* <Text style={styles.amble1}>amble</Text> */}
        
        {/* <View style={styles.rect1}>
          <View style={styles.icon2StackRow}>
            <View style={styles.icon2Stack}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Untitled1")}
                style={styles.button1}
              ></TouchableOpacity>
            </View>
            <View style={styles.icon1Stack}>
    
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.button5}
              ></TouchableOpacity>
            </View>
          </View>
        </View> */}
      </View>
      <Text style={styles.text}>my notes</Text>
      <View style={styles.icon3StackStack}>
        <View style={styles.icon3Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ViewNotes")}
            style={styles.button4}
          ></TouchableOpacity>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.rect4}>
          <Text style={styles.notes}>notes</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ViewNotes")}
          style={styles.button2}
        >
          <View style={styles.rect6}></View>
          <View style={styles.rect7}></View>
          <View style={styles.rect8}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect3}>
        <View style={styles.rect5}>
          <Text style={styles.images}>images</Text>
        </View>
        <TouchableOpacity style={styles.button3}>
          <View style={styles.rect9Row}>
            <View style={styles.rect9}></View>
            <View style={styles.rect10}></View>
            <View style={styles.rect11}></View>
            <View style={styles.rect12}></View>
          </View>
          <View style={styles.rect13Row}>
            <View style={styles.rect13}></View>
            <View style={styles.rect14}></View>
            <View style={styles.rect15}></View>
            <View style={styles.rect16}></View>
          </View>
          <View style={styles.rect17Row}>
            <View style={styles.rect17}></View>
            <View style={styles.rect18}></View>
            <View style={styles.rect19}></View>
            <View style={styles.rect20}></View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  amble1: {
    top: 53,
    left: 66,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 28
  },
  rect1: {
    top: 0,
    left: 0,
    width: 375,
    height: 107,
    position: "absolute",
    backgroundColor: "rgba(171,232,240,1)",
    flexDirection: "row"
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48,
    height: 53,
    width: 48
  },
  button1: {
    top: 10,
    left: 0,
    width: 48,
    height: 35,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 48,
    height: 53
  },
  amble2: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 28,
    marginLeft: 9,
    marginTop: 10
  },
  icon1: {
    top: 1,
    left: 12,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  button5: {
    top: 0,
    left: 0,
    width: 63,
    height: 47,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon1Stack: {
    width: 63,
    height: 47,
    marginLeft: 162,
    marginTop: 3
  },
  icon2StackRow: {
    height: 53,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 9,
    marginTop: 43
  },
  amble1Stack: {
    width: 375,
    height: 107
  },
  text: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 40,
    marginTop: 41,
    marginLeft: 103
  },
  icon3: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 32
  },
  button4: {
    top: 7,
    left: 6,
    width: 71,
    height: 22,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    top: 0,
    left: 0,
    width: 77,
    height: 35,
    position: "absolute"
  },
  back: {
    top: 7,
    left: 32,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18
  },
  icon3StackStack: {
    width: 77,
    height: 35,
    marginTop: -86,
    marginLeft: 9
  },
  rect2: {
    width: 254,
    height: 187,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 30,
    marginTop: 86,
    marginLeft: 62
  },
  rect4: {
    width: 140,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    marginTop: 17,
    marginLeft: 54
  },
  notes: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 43
  },
  button2: {
    width: 206,
    height: 100,
    backgroundColor: "rgba(253,247,198,1)",
    borderRadius: 14,
    marginTop: 14,
    marginLeft: 21
  },
  rect6: {
    width: 140,
    height: 17,
    backgroundColor: "#fff",
    marginTop: 12,
    marginLeft: 36
  },
  rect7: {
    width: 140,
    height: 17,
    backgroundColor: "#fff",
    marginTop: 13,
    marginLeft: 36
  },
  rect8: {
    width: 140,
    height: 17,
    backgroundColor: "#fff",
    marginTop: 13,
    marginLeft: 36
  },
  rect3: {
    width: 254,
    height: 187,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 30,
    marginTop: 61,
    marginLeft: 62
  },
  rect5: {
    width: 140,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 57
  },
  images: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 38
  },
  button3: {
    width: 206,
    height: 100,
    backgroundColor: "rgba(253,247,198,1)",
    borderRadius: 14,
    marginTop: 12,
    marginLeft: 23
  },
  rect9: {
    width: 38,
    height: 24,
    backgroundColor: "#fff"
  },
  rect10: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect11: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect12: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect9Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 20,
    marginRight: 22
  },
  rect13: {
    width: 38,
    height: 24,
    backgroundColor: "#fff"
  },
  rect14: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect15: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect16: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect13Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 20,
    marginRight: 22
  },
  rect17: {
    width: 38,
    height: 24,
    backgroundColor: "#fff"
  },
  rect18: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect19: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect20: {
    width: 38,
    height: 24,
    backgroundColor: "#fff",
    marginLeft: 4
  },
  rect17Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 20,
    marginRight: 22
  }
});

export default Mynotes;
