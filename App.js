import React, {useContext, useEffect, useState,StyleSheet} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/Splash';
import Onboarding from './src/Onboarding';
import About from './src/About';
import Route from './src/Route';
import Review from './src/Review';
import Booking  from './src/Booking';
import PersonalDetails from './src/PersonalDetails';
import Login from './src/Login';
import Navigationtab from './src/Navigationtab';
import Therapy from './src/Therapy';
import Tabs from './src/Navigationtab';

const App = () => {
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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Therapy" component={Therapy} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;