import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons for the back arrow
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const CreditsScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const navigation = useNavigation(); // Access navigation

  useEffect(() => {
    // Start the fade-in animation when the component mounts
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate to opacity 1
      duration: 1000, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use the native driver for performance
    }).start();

    // Set up a timer to replace the screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Onboarding'); // Replace with your next screen name
    }, 10000); // 3000 milliseconds = 3 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Header with back arrow */}
      




      {/* University Logo with "PRESENTS" Text Overlay */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/BU_Logo.png')} // Replace with your image path
          style={styles.logo}
        />
        <Text style={styles.presentsText}>PRESENTS</Text>
      </View>

      {/* Mindful Path Hub Section */}
      <View style={styles.mindfulPathContainer}>
        <Image
        source={require('../assets/images/Mindful_Bckgrd_Img.jpg')} // Replace with the actual URL of the Mindful Path Hub logo
          style={styles.mindfulLogo}
          resizeMode="contain"
        />
       
        
        <Text style={styles.guidanceText}>under the guidance of</Text>
        <Text style={styles.professorText}>PROF. MUKESH PANDEY</Text>
        <Text style={styles.positionText}>vice Chancellor</Text>
        <Text style={styles.guidanceText}>Developed by: </Text>
        <Text style={styles.devText}>MADHUBALA SINGH and GARV SHARMA</Text>
      </View>

      {/* Additional Information Section */}
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.additionalText}>DR. LAVKUSH DIWEDI</Text>
        <Text style={styles.coordinatorText}>Co-Coordinator DST-TEC</Text>
        <Text style={styles.additionalText}>DR. SHAMBHU NATH</Text>
        <Text style={styles.departmentText}>Department of economics and finance BU Jhansi</Text>
        <Text style={styles.copyrightText}>
          © Copyright of Bundelkhand University under government of India
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingRight:10,
    paddingLeft:10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative', // Positioning for the overlay
  },
  logo: {
    width: 200, // Set the desired width of the logo
    height: 200, // Set the desired height of the logo
    opacity: 0.3, // Adjust the opacity of the logo image
  },
  presentsText: {
    position: 'absolute', // Overlay on top of the logo
    fontSize: 30,
    fontStyle:'font-face',
    fontWeight: 'bold',
    color: 'black',
   
  },
  mindfulPathContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mindfulText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  guidanceText: {
    fontSize: 16,
  },
  devText:
  {
    fontSize: 15,
    fontWeight: 'bold',
  },
  mindfulLogo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  professorText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  positionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  additionalInfoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom:10,
  },
  additionalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coordinatorText: {
    fontSize: 14,
    marginBottom: 10,
  },
  departmentText: {
    fontSize: 14,
  },
  copyrightText: {
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default CreditsScreen;
