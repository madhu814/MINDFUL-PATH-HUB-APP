
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
  } from 'react-native';
  
  import React, {useEffect, useState} from 'react';
  import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
 
  
    const Login = () => {
    
    return (
      <ScrollView>
        <View className="flex flex-col justify-around  px-8 flex-1">
          <View>
            <Image
              source={require('../assets/images/Mindful_Bckgrd_Img.jpg')}
              className="flex m-auto w-28 h-28 mt-5"
            />
  
            <Text className="m-auto text-3xl text-primary font-Regular my-5">
              mindful path 
            </Text>
          </View>
  
          <View className="my-10">
            <TextInput
              className="border-2 px-4 py-2  rounded-lg  my-2  border-[#c4c5c7] font-Regular text-xs "
              placeholder="Enter your Email "
              onChangeText={setemail}
              value={email}
            />
            <TextInput
              className="border-2 px-4 py-2  rounded-lg my-2  border-[#c4c5c7] font-Regular text-xs"
              placeholder="Enter your password "
              onChangeText={setpassword}
              value={password}
              secureTextEntry
            />
            <Text
              className="text-right font-Bold text-primary my-4 text-xs"
              onPress={() => {
                navigation.navigate('Forgot');
              }}>
              Forgot Password ?
            </Text>
            <TouchableOpacity
               className="m-6 rounded-lg py-3 bg-amber-300 mx-8 flex flex-row justify-evenly bg-primary"
              onPress={login}>
              <Text className="text-sm text-center  text-white font-Regular">
                Login
              </Text>
            </TouchableOpacity>
          </View>
  
          <View>
            <Text className="text-center text-sm py-10">
              ------ or continue with ------
            </Text>
  
            <TouchableOpacity
              className="border rounded flex-row  justify-center space-x-4 items-center py-1"
              onPress={signIn}>
              <Image
                source={require('../assets/images/google.png')}
                className=" w-8 h-8"
              />
              <Text className="text-center py-2 text-sm font-Regular">
                Login up with Google
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row py-2 justify-center space-x-2 mt-5">
              <Text className="text-center  font-Regular">
                Don't have an account?
              </Text>
  
              <Text
                className="font-Regular text-primary"
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                Register
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({});
  
  export default Login;
  