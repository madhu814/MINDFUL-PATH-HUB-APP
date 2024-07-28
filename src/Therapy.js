import React from 'react';

import { StyleSheet, View, Text,  FlatList, TouchableOpacity,Image,navigate,navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const data = [
  { id: '1', title: 'Breathing Therapy', image: require('../assets/images/BreathingTherapy.jpg') },
  { id: '2', title: 'Hypnotherapy', image: require('../assets/images/Hypnotherapyy.jpg') },
  { id: '3', title: 'Bach Therapy', image: require('../assets/images/BachFlowerTherapy.jpg') },
  { id: '4', title: 'Psychosomatic Therapy', image: require('../assets/images/PsychosomaticTherapy.jpg') },
  { id: '5', title: 'Cognitive Behaviourial Therapy (CBT)', image: require('../assets/images/CognitiveBehaviourialTherapy.jpg') },
  { id: '6', title: 'Marriage Counselling', image: require('../assets/images/MarriageCounseling.jpg') },
];

const Therapy = ({navigation}) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
  
     
    <View style={styles.container}>
       <Text style={styles.headingText}>Counselling and Therapies</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />
  
    
  <View style={styles.footer}>
  
  <TouchableOpacity onPress={() => navigation.navigate('Review')}>
    <Text style={styles.footerText}>Reviews</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
    <Text style={styles.footerText}>Booking</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('About')}>
    <Text style={styles.footerText}>About</Text>
  </TouchableOpacity>
</View>
  </View>

   );
  };

const styles = StyleSheet.create({
  headingText:
    {
        fontSize: 24,
        fontWeight:'bold',
       paddingTop:3,
        paddingLeft:50,
        paddingVertical:20
    },
  
    container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
    paddingHorizontal: 10,
    
  },
  flatList: {
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'purple',
    width:"100%"
  },
  footerText: {
    color: 'white',
  },
});

export default Therapy;
