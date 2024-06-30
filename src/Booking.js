import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList, faClock, faCapsules } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tasks & Appointments</Text>
      <View style={styles.taskContainer}>
        <FontAwesomeIcon icon={faClipboardList} size={24} color="#6200EE" />
        <Text style={styles.taskTitle}>Schedule session with Therapist</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskContainer}>
        <FontAwesomeIcon icon={faClock} size={24} color="#6200EE" />
        <Text style={styles.taskTitle}>Complete your monthly Assesment</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskContainer}>
        <FontAwesomeIcon icon={faCapsules} size={24} color="#6200EE" />
        <Text style={styles.taskTitle}>Meditation</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mark done</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    justifyContent: 'space-between',
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  appointmentContainer: {
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#E8EAF6',
    marginBottom:0,
    flex:1,
  },
  appointmentText: {
    fontSize: 16,
    justifyContent: 'flex-end',
  },
});

export default App;
