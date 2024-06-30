import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const PersonalInformation = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Personal Information</Text>
      
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" />

      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.input} placeholder="Enter your phone number" />

      <Text style={styles.label}>Date Of Birth</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" />

      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity style={styles.radio}>
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radio}>
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radio}>
          <Text style={styles.radioText}>Other</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>What best describes your role?</Text>
      <TextInput style={styles.input} placeholder="Select Role" />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  radio: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  radioText: {
    color: '#fff',
  },
});

export default PersonalInformation;
