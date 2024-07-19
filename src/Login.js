
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

const LoginPage = ({navigation}) => {
  const handleLogin = () => {

    // Handle the login logic here
  };

  const handleSkip = () => {
    // Handle the skip logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/Mindful_Bckgrd_Img.jpg')}  style={styles.image} />
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Mobile Number"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Therapy')}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Therapy')}>
        <Text style={styles.skipButtonText}>SKIP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    padding: 16,
  },
  image: {
    position: 'relative',
    justifyContent: 'flex-start',
    paddingBottom:3,
    paddingTop:0,
    opacity: 0.8,
    marginTop: 0,  // Ensure no top margin on the image
    marginBottom:80,
    width: 350,
    height: 150,
    
  
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor:'#F1E0CC',
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 20,
    elevation:3,
    shadowOffset:{
        width:5,
        height:5,
     },
     shadowColor: '#3333',
     shadowOpacity: 1
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal:80,
  },
  skipButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal:60,
  },
});

export default LoginPage;
