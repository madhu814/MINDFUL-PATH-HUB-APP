import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import Onboarding from './Onboarding';
import About from './About';
import Register from './Register';
import Review from './Review';
import Booking from './Booking';
import PersonalDetails from './PersonalDetails';
import Login from './Login';
import Navigationtab from './Navigationtab';
import Therapy from './Therapy';
import Tabs from './Navigationtab';
const Route = () => {
  const Stack = createNativeStackNavigator();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Splash />;
   
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Therapy" component={Therapy} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;