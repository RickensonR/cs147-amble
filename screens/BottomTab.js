import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";import React , {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from './animations';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {FAB, List} from "react-native-paper";
import AddNotes from '../screens/AddNotes';
import ViewNotes from '../screens/ViewNotes';
import ForYou from '../screens/ForYou';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomTab = () => {

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Requests"component={ViewNotes}  options={{
          // tabBarLabel: 'Requests',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment-question" color={"#9BA773"} size={size} />
          )
        }} />
            <Tab.Screen name="Favorites" component={AddNotes} options={{
          //tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={"#9BA773"} size={size} />
          )
        }} />
         <Tab.Screen name="Shop" component={AddNotes} options={{
         // tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={"#9BA773"} size={size} />
          )
        }} />
         <Tab.Screen name="Chats" component={AddNotes} options={{
        //  tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={"#9BA773"} size={size} />
          )
        }} />
         <Tab.Screen name="Profile" component={AddNotes} options={{
         // tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={"#9BA773"} size={size} />
          )
        }} />
           
        </Tab.Navigator>
    )
}

export default BottomTab;

