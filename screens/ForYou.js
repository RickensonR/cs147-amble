import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function ForYou(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>for you</Text>
      <View style={styles.rect2}>
        <View style={styles.iconRow}>
          <Icon name="round-brush" style={styles.icon}></Icon>
          <Text style={styles.pleinAirPaint}>plein air paint</Text>
        </View>
        <View style={styles.rect5}>
          <Text style={styles.loremIpsum2}>
            bring your painting skills to the next {"\n"}level with outdoor
            landscape painting
          </Text>
        </View>
      </View>
      <Text style={styles.loremIpsum}>because you liked paint...</Text>
      <View style={styles.imageStackStack}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../screens/image_KYCS..png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Text style={styles.weekly}>02/16-02/23</Text>
            <View style={styles.m5Row}>
              <Text style={styles.m5}>m</Text>
              <Text style={styles.t6}>t</Text>
              <Text style={styles.w}>w</Text>
              <Text style={styles.t7}>t</Text>
              <Text style={styles.f2}>f</Text>
              <Text style={styles.s4}>s</Text>
              <Text style={styles.s5}>s</Text>
            </View>
          </ImageBackground>
          <Text style={styles.loremIpsum3}>your activity for paint...</Text>
        </View>
        <Text style={styles.timeSpent}>time {"\n"}spent</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 40,
    marginTop: 99,
    marginLeft: 120
  },
  rect2: {
    width: 339,
    height: 160,
    backgroundColor: "rgba(255,149,165,1)",
    borderRadius: 22,
    marginTop: 52,
    marginLeft: 18
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 33,
    height: 36,
    width: 34
  },
  pleinAirPaint: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 22,
    marginLeft: 5,
    marginTop: 5
  },
  iconRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 79,
    marginRight: 79
  },
  rect5: {
    width: 307,
    height: 92,
    backgroundColor: "rgba(253,247,198,1)",
    borderRadius: 16,
    marginTop: 11,
    marginLeft: 16
  },
  loremIpsum2: {
    fontFamily: "righteous-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    marginTop: 26,
    marginLeft: 16
  },
  loremIpsum: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: -182,
    marginLeft: 24
  },
  image: {
    position: "absolute",
    top: 0,
    left: 34,
    height: 251,
    width: 296
  },
  image_imageStyle: {},
  weekly: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14,
    marginTop: 24,
    marginLeft: 198
  },
  m5: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14
  },
  t6: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14,
    marginLeft: 34
  },
  w: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14,
    marginLeft: 36
  },
  t7: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14,
    marginLeft: 32
  },
  f2: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14,
    marginLeft: 35,
    marginTop: 1
  },
  s4: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14,
    marginLeft: 31
  },
  s5: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14,
    marginLeft: 30
  },
  m5Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 161,
    marginLeft: 19,
    marginRight: 16
  },
  loremIpsum3: {
    top: 20,
    left: 0,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18
  },
  imageStack: {
    top: 0,
    left: 15,
    width: 330,
    height: 251,
    position: "absolute"
  },
  timeSpent: {
    top: 115,
    left: -1,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 16,
    lineHeight: 14
  },
  imageStackStack: {
    width: 345,
    height: 251,
    marginTop: 218,
    marginLeft: 15
  }
});

export default ForYou;
