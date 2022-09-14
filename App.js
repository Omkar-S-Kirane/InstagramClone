
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/components/screens/Home';
import Search from './source/components/screens/Search';
import Reels from './source/components/screens/Reels';
import Activity from './source/components/screens/Activity';
import Profile from './source/components/screens/Profile';

import send from "./source/assets/icons/send.png";
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          height: 50
        },
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Reels" component={Reels}/>
        <Tab.Screen name="Activity" component={Activity}/>
        <Tab.Screen name="Profile" component={Profile}/>

      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <stack.Screen
          name="Bottom"
          component={bottomTabScreen}
          // options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
