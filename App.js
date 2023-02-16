import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView , TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

function Header() {
  return (
    <View style={{ paddingTop: 40, flexDirection: 'row' }}>
      <Text style={{ fontWeight: '800', fontSize: 30, marginLeft: 35, marginTop: 15, color: 'green' }}>huzzle</Text>
    </View>
  )
}

function Home({ navigation }) {

  const [progressValue, setProgressValue] = useState(20)

  useLayoutEffect(() => {
    navigation.setOptions({
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F1F0' }}>
      <Header />
      <ScrollView>
        <View style={{
          marginHorizontal: 20,
          height: 255,
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.20,
          shadowRadius: 3.84,
          elevation: 5,
          marginTop: 20,
          padding: 20
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Set completed! 💪</Text>
          <View style={{ backgroundColor: "#E4E5E8", height: 10, borderRadius: 20, marginTop: 20 }}>
            {/* <View style={{
             maxWidth: progressValue,
              height: '100%',
              backgroundColor: "green",
              borderRadius: 20
            }}>

            </View> */}
          </View>
          <Text style={{ marginTop: 20, color: "#738FA7" }}>Congratulations! You've completed 100% of your matches.</Text>
          <TouchableOpacity 
          onPress={() => {
            setProgressValue(progressValue + 20)
          }}
          style={{
            height: 50,
            width: '95%',
            alignSelf: "center",
            backgroundColor: "#009491",
            justifyContent: 'center',
            marginTop: 28,
            borderRadius: 20
          }}>
            <Text style={{textAlign: "center", color: "#FFFFFF", fontWeight: 'bold', fontSize: 16}}>{`View More Matches`}</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 15, textAlign: "center", fontSize: 12, color: '#0E86D4', fontWeight: '600' }}>Change Prefrences</Text>
        </View>
        <Text style={{ marginLeft: 30, marginTop: 30, fontSize: 15, fontWeight: 'bold' }}>Top matches for you</Text>
      </ScrollView>
    </View>
  )
}

function Notifications() {
  return (
    <View>

    </View>
  )
}

function Profile() {
  return (
    <View>

    </View>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#34363b',
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#F2F1F0',
          position: 'absolute',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Notifications}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="search" color={color} size={44} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}