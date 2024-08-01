import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image,TouchableOpacity,navigation} from 'react-native';
import Therapy from './Therapy';

const Services = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.header}>
      <Text style={styles.header}>Our Services</Text>
        </View>
      <View style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.itemImage}
              source={{uri:'https://cdn.prod.website-files.com/66348f7de7b1e9525647f851/663ddf790423a101b7c12699_image%20(5)-p-500.png'}}
              resizeMode=''         />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>THERAPY FOR MIND & EMOTIONS

            </Text>
            <Text style={styles.subtitle}>
            A place where you understand you feel and we understand how you heal. Regain your focus, enthusiasm, happiness, stress free mind with correction in behavioural patterns through remedies. Stress, Anxiety / Panic attack, Mood swings, Overthinking, Bipolar personality, Exam fear, Loneliness, Sadness, Depression, Low self esteem, Indecision, Lack of interest, Overwhelm, Relationship issues, Grief, Trauma etc.

{' '}
            </Text>
          </View>
        </View>

      <View style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.itemImage}
              source={{uri: 'https://cdn.prod.website-files.com/66348f7de7b1e9525647f851/663df542c5b758722668f31f_image%20(10)-p-1080.png'}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>THERAPY FOR SHORT TERM/ LONG STANDING DISEASES </Text>
            <Text style={styles.subtitle}>
            Your path to wellbeing starts here. Address the root cause to regain your body-mind-soul harmony. With over 1000 testimonials, Vior has helped patients cure several diseases related to Skin & Hair, Respiratory/ Circulatory issues, Digestion, Sleep, Immunity, Joint/muscle, Chronic conditions, Nervous system disorders, Urinary issues, Hormonal regulation etc.
            </Text>
          </View>
          </View>

      <View style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.itemImage}
              source={{uri:'https://cdn.prod.website-files.com/66348f7de7b1e9525647f851/663ddf1c7140fffb197826cf_image%20(4)-p-1600.png'}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>   THERAPY FOR COUPLES-</Text>
            <Text style={styles.subtitle}>
            Two individual Therapy sessions for both partners and ten-hours group session for the couple to understand emotional and behavioural patterns. Enrol to explore deeper understanding of each other's behaviour and emotions and connect with deeper mutual understanding. It’s not the absence of conflict that makes a relationship healthy, it’s the way couples manage the conflict that matters.
            </Text>
          </View>
        </View>
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    
    backgroundColor: 'white',
    overflow:"scroll" ,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
    paddingLeft:20,
    paddingRight:20,
    
  },
  itemImage: {
    width: 500,
    height: 200,
    marginBottom: 10,
  },
  card: {
    overflow:"scroll",
    margin:16,
    padding: 16,
    width:500,
    maxWidth: '95%',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.80,
    shadowRadius: 4.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#3700B3',
    paddingLeft:30,
    paddingRight:10
    
  },
  header: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#b000020',
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:10,
    paddingTop:10,
  },
  subtitle: {
    fontSize: 14,
    color: '#b000020',
    flexDirection:'row',
    justifyContent:'center'
  },
  therapyButton:{
    backgroundColor: '#ff8c00',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 20,
    elevation:3,
    shadowOffset:{
        width:5,
        height:5,
     },
     shadowColor: '#3333',
     shadowOpacity: 1
  },
  therapyButtonText:{
    color: '#fff',
    fontSize: 18,
    marginHorizontal:10,
    fontWeight:'bold'
  }
});

export default Services;