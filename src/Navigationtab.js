import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  PencilSquareIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChatbubbleBottomCenterIcon,
  AcademicCapIcon,
  BellAlertIcon,
} from '@heroicons/react';
import Home from './Home';
import About from './About';
import Therapy from './Therapy';
import Review from './Review';
import Booking from './Booking';

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#7B61FF',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          height: 55,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => {
            return <HomeIcon color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({color, size}) => {
            return <BellAlertIcon color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="Therapy"
        component={Therapy}
        options={{
          tabBarIcon: ({color, size}) => {
            return <PencilSquareIcon color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="Review"
        component={Review}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AcademicCapIcon color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AcademicCapIcon color={color} size={size} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});