import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Onboarding = ({navigation}) => {
  return (


    <View style={styles.container}>
      <Animatable.Image
        animation="zoomIn" // Adding a zoom-in animation
        duration={2000}   // Duration of the animation
        source={require('../assets/images//Mindful_Bckgrd_Img.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
      
      <Animatable.View animation="fadeIn" delay={500} style={styles.textContainer}>
        <Text style={styles.mainText}>
        Welcomes 
        </Text>
        <Text style={styles.secondaryText}> <Text>You to your safe space.Let's navigate your path to mental clarity together.</Text></Text>
        <Text style={styles.subtitle}>
        
        </Text>
      </Animatable.View>
      

      <View style={styles.buttonContainer}>
        <Animatable.View animation="bounceInUp" delay={1000}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Therapy')}>
            <Text style={styles.buttonText}>Let's Start healing today</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft:20,
    paddingRight:20,
  },
  image: {
    position: 'relative',
    justifyContent: 'flex-start',
    paddingBottom:3,
    height: 150,
    width: 200,
    opacity: 0.8,
    marginTop: 0,  // Ensure no top margin on the image
    marginBottom: 0,  // Remove bottom margin to allow text to be closer
  },
  textContainer: {
    alignItems:"center",
    marginTop: 0,  // Remove any top margin
    paddingTop: 0,  
  },
  mainText: {
    fontSize: 20,
    color: '#FFBF00',
    fontWeight: 'bold',
    fontFamily:'Roboto',
    marginTop: 0, 
    
  },
  secondaryText: {
    color: 'black',
    textAlign:'center',
    marginTop: 0, 
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 1,  // This makes the container grow and fill available space
    width: '100%',  // Ensure the container spans the width of the screen
    justifyContent: 'flex-end',  // Aligns the button to the bottom
    paddingBottom: 30,  // Adds some padding at the bottom
  },
  button: {
    backgroundColor: '#FFBF00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginBottom: 5,
    justifyContent:'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Onboarding;
