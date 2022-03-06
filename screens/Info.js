import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Info(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ViewNotes")}
          style={styles.button}
        >
      <Text style={styles.notes}>Notes</Text></TouchableOpacity>
        <View style={styles.rect2}>
          <View style={styles.rect4}></View>
          <View style={styles.rect5}></View>
          <View style={styles.rect6}></View>
        </View>
      </View>
      <View style={styles.rect7StackStack}>
        <View style={styles.rect7Stack}>
          <View style={styles.rect7}></View>
          <View style={styles.rect11}></View>
          <View style={styles.rect12}>
            <View style={styles.rect14}></View>
            <View style={styles.rect13}></View>
          </View>
        </View>
        <View style={styles.rect8}></View>
        <View style={styles.rect9}></View>
        <View style={styles.notes1Stack}>
          <Text style={styles.notes1}>Notes</Text>
          <View style={styles.rect10}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: 'white',
      alignItems: "flex-start"
     
  },
  rect: {
    width: 265,
    height: 273,
    backgroundColor: "rgba(173,216,230,1)",
    borderRadius: 31,
    marginTop: 147,
    marginLeft: 55
  },
  button: {
    width: 177,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 31,
    marginTop: 20,
    marginLeft: 44
  },
  rect2: {
    width: 245,
    height: 164,
    borderRadius: 31,
    backgroundColor: "rgba(253,240,116,1)",
    marginTop: 14,
    marginLeft: 10
  },
  rect4: {
    width: 177,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 29,
    marginLeft: 34
  },
  rect5: {
    width: 177,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 17,
    marginLeft: 34
  },
  rect6: {
    width: 177,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 17,
    marginLeft: 34
  },
  rect7: {
    top: 204,
    left: 44,
    width: 177,
    height: 23,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect11: {
    top: 95,
    left: 10,
    width: 245,
    height: 164,
    position: "absolute",
    borderRadius: 31,
    backgroundColor: "rgba(253,240,116,1)"
  },
  rect12: {
    top: 0,
    width: 265,
    height: 273,
    position: "absolute",
    backgroundColor: "rgba(173,216,230,1)",
    left: 0,
    borderRadius: 31
  },
  rect14: {
    width: 177,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 31,
    marginTop: 18,
    marginLeft: 49
  },
  rect13: {
    width: 245,
    height: 164,
    borderRadius: 31,
    backgroundColor: "rgba(253,240,116,1)",
    marginTop: 14,
    marginLeft: 10
  },
  rect7Stack: {
    top: 0,
    left: 0,
    width: 265,
    height: 273,
    position: "absolute"
  },
  rect8: {
    top: 164,
    left: 44,
    width: 177,
    height: 23,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect9: {
    top: 124,
    left: 44,
    width: 177,
    height: 23,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  notes1: {
    top: 22,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 18,
    width: 102,
    textAlign: "center",
    fontSize: 20
  },
  rect10: {
    top: 0,
    left: 0,
    width: 177,
    height: 61,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 31
  },
  notes1Stack: {
    top: 20,
    left: 44,
    width: 177,
    height: 61,
    position: "absolute"
  },
  rect7StackStack: {
    width: 265,
    height: 273,
    marginTop: 54,
    marginLeft: 55
  },
  notes: {
    color: "#121212",
    height: 24,
    width: 117,
    fontSize: 24,
    textAlign: "center",
    marginTop: 15,
    marginLeft: 30
  }
});

export default Info;
