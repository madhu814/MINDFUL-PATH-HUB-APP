import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const subjects = [
    { key: 'Breathing Therapy', title: 'Breathing Therapy' },
    { key: 'Hypnotherapy', title: 'Hypnotherapy' },
    { key: 'Bach Therapy', title: 'Bach Therapy' },
    { key: 'Psychodynamic Therapies', title: 'Psychodynamic Therapies' },
    { key: 'Cognitive Behavioral Therapy (CBT)', title: 'Cognitive Behavioral Therapy (CBT)' },
  ];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Therapies</Text>
        </View>
        {subjects.map(subject => (
          <View key={subject.key} style={styles.card}>
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{subject.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
   
    
 

<View style={styles.footer}>
  <Text style={styles.footerText}>Home</Text>
  <Text style={styles.footerText}>Search</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
    <Text style={styles.footerText}>Booking</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('PersonalDetails')}>
    <Text style={styles.footerText}>Account</Text>
  </TouchableOpacity>
</View>
</View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'purple',
    padding: 20,
    margin :20,
    alignItems: 'center',
    borderRadius :20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '',
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    margin :10,
    backgroundColor: '#FFBF00',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
    },
  buttonText: {
    color: 'black',
    fontSize: 16,
    
  },
  notesText: {
    color: 'white',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'purple',
  },
  footerText: {
    color: 'white',
  },
});

export default App;
