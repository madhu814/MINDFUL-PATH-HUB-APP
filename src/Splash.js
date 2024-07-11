import {StyleSheet, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="zoomInUp"
        duration={1500}
        source={require('../assets/images/Mindful_Bckgrd_Img.jpg')}
        style={styles.image}
      />
      </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Make the image take up the full width
    height: '100%', // Make the image take up the full height
    resizeMode: 'contain', // Ensure the image maintains its aspect ratio and fits within the container
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'violet',
    marginBottom: 5,
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: 16,
    color: 'yellow',
  },
});

export default Splash;
