import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook
import { Icon } from 'react-native-elements';
import {icons} from 'react-native-vector-icons';
import Home from './Home';
import About from './About';
import Therapy from './Therapy';
import Review from './Review';
import Booking from './Booking';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const isFocused = useIsFocused();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white', paddingBottom: 4
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }
                })}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <AboutIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }
                })}
            />
            <Tab.Screen
                name="Therapy"
                component={Therapy}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <TherapyIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }

                })}
            />
            <Tab.Screen
                name="Review"
                component={Review}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <ReviewIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }

                })}
            />
            <Tab.Screen
                name="Booking"
                component={Booking}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <BookingIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }

                })}
            />
        </Tab.Navigator>
    );
}

// Define separate components for each icon to handle focused styling
function HomeIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='Homeicon'
            type='font-awesome'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}

function AboutIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='home'
            type='font-awesome'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}

function TherapyIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='therapy'
            type='ionicon'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}

function ReviewIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='reveiw'
            type='ionicon'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}
function BookingIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='booking'
            type='ionicon'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}