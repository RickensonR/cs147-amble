import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {globalStyles} from '../styles/global';

function Supplies(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect13}>
        <View style={styles.rect11Row}>
          <View style={styles.rect11}></View>
          <Text style={styles.paintPalette}>paint palette</Text>
          <EntypoIcon name="chevron-right" style={styles.icon11}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect12}>
        <View style={styles.rect10Row}>
          <View style={styles.rect10}></View>
          <Text style={styles.sketchPaper}>sketch paper</Text>
          <EntypoIcon name="chevron-right" style={styles.icon10}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect9}>
        <View style={styles.rect6Row}>
          <View style={styles.rect6}></View>
          <Text style={styles.paintBrushes}>paint brushes</Text>
          <EntypoIcon name="chevron-right" style={styles.icon8}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect8}>
        <View style={styles.rect7Row}>
          <View style={styles.rect7}></View>
          <Text style={styles.acrylicPaints}>acrylic paints</Text>
          <EntypoIcon name="chevron-right" style={styles.icon9}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.rect4Row}>
          <View style={styles.rect4}></View>
          <Text style={styles.canvas}>canvas</Text>
          <EntypoIcon name="chevron-right" style={styles.icon7}></EntypoIcon>
        </View>
      </View>
      <View style={styles.icon1StackStack}>
        <View style={styles.icon1Stack}>
          <EntypoIcon name="menu" style={styles.icon1}></EntypoIcon>
          <View style={styles.rect1}>
            <View style={styles.button1StackRow}>
              <View style={styles.button1Stack}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Untitled1")}
                  style={styles.button1}
                ></TouchableOpacity>
                <EntypoIcon name="menu" style={styles.icon4}></EntypoIcon>
              </View>
              <Text style={styles.amble2}>amble</Text>
              <EntypoIcon name="home" style={styles.icon3}></EntypoIcon>
            </View>
          </View>
        </View>
        <Text style={styles.amble1}>amble</Text>
        <EntypoIcon name="home" style={styles.icon2}></EntypoIcon>
      </View>
      <View style={styles.icon5StackStackRow}>
        <View style={styles.icon5StackStack}>
          <View style={styles.icon5Stack}>
            <EntypoIcon name="chevron-left" style={styles.icon5}></EntypoIcon>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.button2}
            ></TouchableOpacity>
          </View>
          <Text style={styles.back1}>Back</Text>
        </View>
        <Text style={styles.text}>supplies</Text>
      </View>
      <Text style={styles.whatYoullNeed}>what you&#39;ll need...</Text>
      <View style={styles.rect2}>
        <View style={styles.rect3Row}>
          <View style={styles.rect3}></View>
          <Text style={styles.sketchingPencils}>sketching pencils</Text>
          <EntypoIcon name="chevron-right" style={styles.icon6}></EntypoIcon>
        </View>
      </View>
      <Text style={styles.whatWeRecommend}>what we recommend...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect13: {
    width: 295,
    height: 47,
    backgroundColor: "rgba(255,246,185,1)",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: 579,
    marginLeft: 43
  },
  rect11: {
    width: 26,
    height: 22,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    marginTop: 6
  },
  paintPalette: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginLeft: 12,
    marginTop: 9
  },
  icon11: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 114
  },
  rect11Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 15,
    marginTop: 6
  },
  rect12: {
    width: 295,
    height: 47,
    backgroundColor: "rgba(255,246,185,1)",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: -99,
    marginLeft: 43
  },
  rect10: {
    width: 26,
    height: 22,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    marginTop: 6
  },
  sketchPaper: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginLeft: 12,
    marginTop: 9
  },
  icon10: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 114
  },
  rect10Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 16,
    marginTop: 6
  },
  rect9: {
    width: 295,
    height: 47,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: -176,
    marginLeft: 41
  },
  rect6: {
    width: 26,
    height: 22,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    marginTop: 5
  },
  paintBrushes: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginLeft: 12,
    marginTop: 8
  },
  icon8: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 109
  },
  rect6Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 15,
    marginTop: 6
  },
  rect8: {
    width: 295,
    height: 47,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: -100,
    marginLeft: 41
  },
  rect7: {
    width: 26,
    height: 22,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    marginTop: 6
  },
  acrylicPaints: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginLeft: 12,
    marginTop: 9
  },
  icon9: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 110
  },
  rect7Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 16,
    marginTop: 6
  },
  rect5: {
    width: 295,
    height: 47,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: -100,
    marginLeft: 41
  },
  rect4: {
    width: 26,
    height: 22,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    marginTop: 6
  },
  canvas: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginLeft: 12,
    marginTop: 9
  },
  icon7: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 152
  },
  rect4Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 15,
    marginTop: 6
  },
  icon1: {
    top: 10,
    left: 9,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48
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
  button1: {
    top: 9,
    left: 0,
    width: 48,
    height: 35,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48,
    height: 55,
    width: 48
  },
  button1Stack: {
    width: 48,
    height: 55
  },
  amble2: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 28,
    marginLeft: 9,
    marginTop: 10
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 40,
    marginLeft: 173,
    marginTop: 4
  },
  button1StackRow: {
    height: 55,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 9,
    marginTop: 10
  },
  icon1Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 74,
    position: "absolute"
  },
  amble1: {
    top: 20,
    left: 66,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 28
  },
  icon2: {
    top: 14,
    left: 316,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  icon1StackStack: {
    width: 375,
    height: 74,
    marginTop: -306
  },
  icon5: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 32
  },
  button2: {
    top: 7,
    left: 8,
    width: 71,
    height: 22,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon5Stack: {
    top: 0,
    left: 0,
    width: 79,
    height: 36,
    position: "absolute"
  },
  back1: {
    top: 7,
    left: 32,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18
  },
  icon5StackStack: {
    width: 79,
    height: 36
  },
  text: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 30,
    marginLeft: 42,
    marginTop: 29
  },
  icon5StackStackRow: {
    height: 66,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 9,
    marginRight: 130
  },
  whatYoullNeed: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 31,
    marginLeft: 41
  },
  rect2: {
    width: 295,
    height: 47,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 41
  },
  rect3: {
    width: 26,
    height: 22,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    marginTop: 6
  },
  sketchingPencils: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginLeft: 12,
    marginTop: 8
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 87
  },
  rect3Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 16,
    marginTop: 7
  },
  whatWeRecommend: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 207,
    marginLeft: 41
  }
});

export default Supplies;
