import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';


const Booking = ({ phoneNumber }) => {
 phoneNumber="+919450980124"
  const handlePress = () => {
    const formattedNumber = `tel:${phoneNumber}`;
    console.log(`Attempting to dial: ${formattedNumber}`);
    Linking.openURL(formattedNumber).catch(err => console.error('Error opening URL', err));
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="12" cy="12" r="10" fill="#FFB700"/>
          <Path d="M13 3H16.5C16.8 3 17.1 3.1 17.3 3.3L19.3 5.3C19.5 5.5 19.6 5.7 19.7 6H20C21.1 6 22 6.9 22 8V16C22 17.1 21.1 18 20 18H17V21C17 21.6 16.6 22 16 22H8C7.4 22 7 21.6 7 21V18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6H4.3C4.4 5.7 4.5 5.5 4.7 5.3L6.7 3.3C6.9 3.1 7.2 3 7.5 3H11M12 1C10.3 1 9 2.3 9 4V5H15V4C15 2.3 13.7 1 12 1ZM7 7H5V9H7V7ZM19 7H17V9H19V7ZM7 11H5V13H7V11ZM19 11H17V13H19V11ZM7 15H5V17H7V15ZM19 15H17V17H19V15ZM12 7H8V9H10.7L9.7 12.3C9.5 13 9.7 13.7 10.2 14.2L13 17L14.8 13.8L14.5 12.9L13 15H10L12.3 10H16V8H12.5L12.8 7H12Z" fill="white"/>
        </Svg>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.callText}>Call us now!</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066CC',
    borderRadius: 50,
    padding: 10,
    marginTop:350,
    marginLeft:10,
    marginRight:10,
    paddingHorizontal: 20,

  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  callText: {
    color: '#FFB700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  phoneNumber: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Booking;
