import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
 
} from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';
const App = () => {
  return (
    <ScrollView className="flex=1, height=200">
      <View style={styles.container}>
        <Animatable.Image
          animation="zoomIn" // Adding a zoom-in animation
          duration={2000} // Duration of the animation
          source={require('../assets/images//Mindful_Bckgrd_Img.jpg')}
          resizeMode="contain"
          style={styles.image}
        />

        <Animatable.View
          animation="fadeIn"
          delay={500}
          style={styles.textContainer}>
          <Text style={styles.mainText}>Shefali Agrawal</Text>
        </Animatable.View>
        <Animatable.Image
          source={require('../assets/images//maam.jpg')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.secondaryText}>
          {' '}
          <Text>
            Shefali is a Post Graduate and M.Phil in Psychology from CSom
            university. and is a certified "Bach Flower Therapist & Trainer"
            from VIORNATURALS, Banglore. She is Annamala a certified counselor
            from university Chidambaram in Chennai and practicing successfully
            over 13 years .She is a certified "clinical Hypnotherapist from
            California Hypnosis Institule, USA She is a qualified professional
            with 5 years of experience in Defence as a Marital Discord
            Counselor" and honoured to be in the Selection Panel of various
            Institutions of Jhansi as a psychologists It was sofali's
            empowerment and a own journey of quest to seek to life's deepest
            mysteries. which brought her on to the path of "Alternative Realing
            practices. She firmly believes that these therapies are scientific
            and can transform any individual intent to do so as long مه there is
            S a mother A successful professional a homemaker and a therapist she
            plays all her roles with clan. What makes her stand out from others
            ès her compassion, an immaculate sense of intet intrustion and her
            ability to connect with people from all walks of life, helping them
            to overcome their challenges. 
            ShefaliVaishagarwal@gmail.com Mob-
            +919450980124
            <Text style={styles.mainText}>education & Qualifications</Text>•
            M.A., M.Phil in Psychology from OSIM University. Guidance
            "Counselling Diploma in psychology from Annamalai University,
            Chennai B.Ed from Bundelkhand University. and holds the 2nd top
            position in the whole Bundelkhand region. Ciploma in clinical
            Hypnotherapy, CHI, USA, Advance Bach Plower Practiones Practitioner
            and Trainer, VIOR NAZ NATO NATURALS, Bangalore She has already
            carved place for herself with her clients. Mer interest and
            dedication to help and empower people around her has led her to
            embrace "Bach Flower Therapy, Hypnotherapy and alternative methods
            not just as a fool but as a companion which she now feels confident
            to introduce and share with them.
          </Text>
        </Text>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1E0CC',
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    position: 'relative',
    justifyContent: 'flex-start',
    paddingBottom: 3,
    height: 250,
    width: 400,
    opacity: 0.8,
    marginTop: 0, // Ensure no top margin on the image
    marginBottom: 0, // Remove bottom margin to allow text to be closer
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 0, // Remove any top margin
    paddingTop: 0,
  },
  mainText: {
    fontSize: 40,
    color: '#6200EE',
    fontWeight: 'light',
    fontStyle:'italic',
    fontFamily: 'Roboto',
    marginTop: 0,
  },
  secondaryText: {
    fontSize: 20,
    color: '#3700B3',
    textAlign: 'center',
    marginTop: 23,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1, // This makes the container grow and fill available space
    width: '100%', // Ensure the container spans the width of the screen
    justifyContent: 'flex-end', // Aligns the button to the bottom
    paddingBottom: 30, // Adds some padding at the bottom
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginBottom: 5,
    justifyContent: 'flex-end',
    boxshadow: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
