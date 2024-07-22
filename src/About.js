import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {height} from '@fortawesome/free-solid-svg-icons/fa0';
import * as Animatable from 'react-native-animatable';
const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/maam.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>SHEFALI AGARWAL</Text>
          <Text > Shefali is a Post Graduate and M.Phil in Psychology from CSom
          university. and is a certified "Bach Flower Therapist & Trainer" from
          VIORNATURALS, Banglore. She is Annamala a certified counselor from
          university Chidambaram in Chennai and practicing successfully over 13
          years She is a certified "clinical Mypnotherapist from California
          Hypnosis Institule, USA She is a qualified professional with 5 years
          of experience in Defence as a Marital Discord Counselor" and honoured
          to be in the Selection Panel of various Institutions of Thansi as a
          psychologists CALIFORNIA It was sofali's empowerment and a own journey
          of quest to seek to life's deepest mysteries. which brought her on to
          the path of "Alternative Realing practices. She firmly believes that
          these therapies are scientific and can transform any individual intent
          to do so as long مه there is S a mother A successful professional a
          homemaker and a therapist she plays all her roles with clan. What
          makes her stand out from others ès her compassion, an immaculate sense
          of intet intrustion and her ability to connect with people from all
          walks of life, helping them to overcome their challenges. Shefali
          Vaish agarwal@gmail.com Mob-+919450980124</Text>
        </View>
      </View>
      <View style={styles.container}>
        
         <Image
          source={require('../assets/images/cap.png')}
          style={styles.cap}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Education and Qualification </Text>
          <Text >
            M.A., M.Phil in Psychology from OSIM University. Guidance
            "Counselling Diploma in psychology from Annamalai University,
            Chennai B.Ed from Bundelkhand University. and holds the 2nd top
            position in the whole Bundelkhand region. Ciploma in clinical
            Hypnotherapy, CHI, USA, Advance Bach Plower Practiones Practitioner
            and Trainer, VIOR NAZ NATO NATURALS, Bangalore She has already
            carved place for herself with her clients. Mer interest and
            dedication to help and empower people around her has led her to
            embrace "Bach Flower Therapy, Hypnotherapy and alternative methods
            not just as a fool but as a companion,which she now feels confident to introduce and share with them 
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'scroll',
    marginHorizontal:10,
    maxHeight:"auto",
  },

  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    maxWidth: '100%',
    marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: '#03DAC6',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:10,
    alignItems: 'top',
    justifyContent: 'space-between',

    flexWrap: 'nowrap',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
   alignSelf:"center",
  },
  cap: {
    width: 100,
    height: 100,
   resizeMode:"contain",
   alignSelf:"center",
  },
  textContainer: {
    flex: 1,
    justifyContent: 'top',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3700B3',
    textAlign: 'center',
  },
 

});

export default About;
