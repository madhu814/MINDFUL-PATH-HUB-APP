import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  navigation,
} from 'react-native';

const Home = navigation => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.header}>Our Gallery</Text>
     </View>
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/a.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/b.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/c.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          
          <Image
            style={styles.itemImage}
            source={require('../assets/images/d.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/e.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/f.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/g.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/h.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/m.jpg')}
            resizeMode="contain"
          />
       
      
      
        
          <Image
            style={styles.itemImage}
            source={require('../assets/images/n.jpg')}
            resizeMode="contain"
          />
       
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    overflow: 'scroll',
  },

  itemImage: {
    width: "100%",
    
    marginBottom: 10,
  },
 
 
  header: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#b000020',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
 
});

export default Home;
