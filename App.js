import React from 'react';
import { Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/components/screens/Home';
import Search from './source/components/screens/Search';
import Reels from './source/components/screens/Reels';
import Activity from './source/components/screens/Activity';
import Profile from './source/components/screens/Profile';

const home = require('./source/assets/icons/home.png');
const chat = require('./source/assets/icons/search.png');
const video = require('./source/assets/icons/video.png');
const heart = require('./source/assets/icons/heart.png');
const girl = require('./source/assets/icons/girl.png');

const App = () => {
  const stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return (
      <Tab.Navigator
          screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
          height: 50,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = (
                <Image source={home} style={{height: 14, width: 14}} />
              );
            } else if (route.name === 'Search') {
              iconName = (
                <Image source={chat} style={{height: 14, width: 14}} />
              );
            } else if (route.name === 'Reels') {
              iconName = (
                <Image source={video} style={{height: 14, width: 14}} />
              );
            } else if (route.name === 'Activity') {
              iconName = (
                <Image source={heart} style={{height: 14, width: 14}} />
              );
            } else if (route.name === 'Profile') {
              iconName = (
                <Image source={girl} style={{height: 14, width: 14}} />
              );
            }
            return iconName;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="Bottom" component={bottomTabScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
