import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image,navigation} from 'react-native';

const CelebsExperience = ({navigation}) => {
  return (
    <ScrollView>
      <View>
      <Image style={styles.image}> source={require('../assets/images/CelebsExperience.jpg')} </Image>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    
    backgroundColor: 'white',
    overflow:"scroll" ,
  },
  image: {
    width: '100%', // Make the image take up the full width
    height: '100%', // Make the image take up the full height
    resizeMode: 'contain', // Ensure the image maintains its aspect ratio and fits within the container
  },
  header: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#b000020',
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:1,
  },
});

export default CelebsExperience;