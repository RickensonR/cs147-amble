import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import ForYou from "./ForYou";

function Discover(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect4}>
        <View style={styles.rect2}>
          <Text style={styles.community}>community</Text>
        </View>
        <View style={styles.ellipse3StackRow}>
          <View style={styles.ellipse3Stack}>
            <Svg viewBox="0 0 66.14 66.02" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(253,247,198,1)"
                cx={33}
                cy={33}
                rx={33}
                ry={33}
              ></Ellipse>
            </Svg>
            <EntypoIcon name="add-user" style={styles.icon7}></EntypoIcon>
          </View>
          <View style={styles.ellipse4Stack}>
            <Svg viewBox="0 0 66.14 66.02" style={styles.ellipse4}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(253,247,198,1)"
                cx={33}
                cy={33}
                rx={33}
                ry={33}
              ></Ellipse>
            </Svg>
            <EntypoIcon name="chat" style={styles.icon8}></EntypoIcon>
          </View>
          <View style={styles.ellipse5Stack}>
            <Svg viewBox="0 0 66.14 66.02" style={styles.ellipse5}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(253,247,198,1)"
                cx={33}
                cy={33}
                rx={33}
                ry={33}
              ></Ellipse>
            </Svg>
            <EntypoIcon name="globe" style={styles.icon9}></EntypoIcon>
          </View>
        </View>
        <Text style={styles.loremIpsum1}>
          see what other&#39;s are learning
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ForYou")}
        style={styles.button3}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ForYou")}
          style={styles.button4}
        >
          <Text style={styles.forYou}>for you</Text>
        </TouchableOpacity>
        <View style={styles.ellipseStackRow}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 66.14 66.02" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(253,247,198,1)"
                cx={33}
                cy={33}
                rx={33}
                ry={33}
              ></Ellipse>
            </Svg>
            <FeatherIcon name="bookmark" style={styles.icon6}></FeatherIcon>
          </View>
          <View style={styles.ellipse1Stack}>
            <Svg viewBox="0 0 66.14 66.02" style={styles.ellipse1}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(253,247,198,1)"
                cx={33}
                cy={33}
                rx={33}
                ry={33}
              ></Ellipse>
            </Svg>
            <EntypoIcon name="bar-graph" style={styles.icon4}></EntypoIcon>
          </View>
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 66.14 66.02" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(253,247,198,1)"
                cx={33}
                cy={33}
                rx={33}
                ry={33}
              ></Ellipse>
            </Svg>
            <EntypoIcon name="light-bulb" style={styles.icon5}></EntypoIcon>
          </View>
        </View>
        <Text style={styles.loremIpsum}>explore curated suggestions</Text>
      </TouchableOpacity>
      <Text style={styles.text}>discover</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rect4: {
    width: 254,
    height: 187,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 30,
    marginTop: 451,
    marginLeft: 62
  },
  rect2: {
    width: 140,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 57
  },
  community: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 20
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 66,
    height: 66,
    position: "absolute"
  },
  icon7: {
    top: 13,
    left: 15,
    position: "absolute",
    color: "rgba(16,16,16,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  ellipse3Stack: {
    width: 66,
    height: 66
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 66,
    height: 66,
    position: "absolute"
  },
  icon8: {
    top: 13,
    left: 15,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  ellipse4Stack: {
    width: 66,
    height: 66,
    marginLeft: 4
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 66,
    height: 66,
    position: "absolute"
  },
  icon9: {
    top: 13,
    left: 15,
    position: "absolute",
    color: "rgba(2,2,2,1)",
    fontSize: 35,
    height: 38,
    width: 34
  },
  ellipse5Stack: {
    width: 66,
    height: 66,
    marginLeft: 4
  },
  ellipse3StackRow: {
    height: 66,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 24,
    marginRight: 24
  },
  loremIpsum1: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginTop: 23,
    marginLeft: 32
  },
  button3: {
    width: 254,
    height: 187,
    backgroundColor: "rgba(171,232,240,1)",
    borderRadius: 30,
    marginTop: -452,
    marginLeft: 62
  },
  button4: {
    width: 140,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    marginTop: 17,
    marginLeft: 54
  },
  forYou: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 36
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 66,
    height: 66,
    position: "absolute"
  },
  icon6: {
    top: 15,
    left: 15,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 37,
    height: 37,
    width: 37
  },
  ellipseStack: {
    width: 66,
    height: 66
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 66,
    height: 66,
    position: "absolute"
  },
  icon4: {
    top: 12,
    left: 14,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 37,
    height: 40,
    width: 37
  },
  ellipse1Stack: {
    width: 66,
    height: 66,
    marginLeft: 4
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 66,
    height: 66,
    position: "absolute"
  },
  icon5: {
    top: 12,
    left: 14,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 37,
    height: 40,
    width: 37
  },
  ellipse2Stack: {
    width: 66,
    height: 66,
    marginLeft: 4
  },
  ellipseStackRow: {
    height: 66,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 24,
    marginRight: 24
  },
  loremIpsum: {
    fontFamily: "righteous-regular",
    color: "#121212",
    marginTop: 21,
    marginLeft: 32
  },
  text: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 40,
    marginTop: -271,
    marginLeft: 110
  }
});

export default Discover;
