import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {height} from '@fortawesome/free-solid-svg-icons/fa0';
import * as Animatable from 'react-native-animatable';
const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.View}>
        <Image
          style={styles.image2}
          source={require('../assets/images/Mindful_Bckgrd_Img.jpg')}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/maam.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Shefali Agarwal</Text>
        <Text style={styles.title}>About Therapist</Text>
        <Text style={styles.detail}>
          Bach flower therapist and trainer, hypnotherapist ,spiritual &
          holistic healer.
        </Text>
        <Text style={styles.title}>Language</Text>
        <Text style={styles.detail}>English,Hindi</Text>
        <Text style={styles.title}>State</Text>
        <Text style={styles.detail}>Uttar Pradesh</Text>
      </View>
      <View style={styles.View2}>
        <Text style={styles.name}>Hi! I'm Shefali Agarwal</Text>
        <Image
          style={styles.image2}
          source={require('../assets/images/wave.jpg')}
          resizeMode="contain"
        />
        <Text style={styles.detail2}>
          {' '}
        Shefali is a Post Graduate and M.Phil in Psychology from CSJM
          university. She is a certified "Bach Flower Therapist & Trainer" from
          VIOR NATURALS, Bangalore.
        </Text>

        <Text style={styles.detail2}>
          She is a certified counselor from Annamalai University Chidambaram in
          Chennai and practicing successfully over 13 years.
        </Text>

        <Text style={styles.detail2}>
          {' '}
          She is a certified "Clinical Hypnotherapist" from California Hypnosis
          Institute, USA.{' '}
        </Text>

        <Text style={styles.detail2}>
          She is a qualified professional with 5 years of experience in Defence
          as a Marital Discord Counselor" and honoured to be in the 'Selection
          Panel' of various Institutions of Jhansi as a psychologist.{' '}
        </Text>

        <Text style={styles.detail2}>
          {' '}
          It was Shefali's own journey of empowerment and a quest to seek answers to
          life's deepest mysteries, which brought her on to the path of
          "Alternative healing practices". She firmly believes that these
          therapies are scientific and can transform any individual as long as
          there is intent to do so.{' '}
        </Text>

        <Text style={styles.detail2}>
          She is a mother, a successful professional, a homemaker and a
          therapist. She plays all her roles with clan. What makes her stand out
          from others is her compassion, an immaculate sense of intution and her
          ability to connect with people from all walks of life, helping them to
          overcome their challenges.
        </Text>
        <Text style={styles.title}>Shefali.Vaish.agarwal@gmail.com</Text>
        <Text style={styles.title}>Mob +919450980124</Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.name3}>Therapy Process</Text>
        <Image
          source={require('../assets/images/explore.png')}
          style={styles.image3}
        />
        <Text style={styles.name2}>Explore Therapy</Text>
        <Text style={styles.detail3}>
          {' '}
          You can reach out to me to inquire about the approach and
          potential benefits of Therapy in accordance with your personal needs.
        </Text>
        <Image
          source={require('../assets/images/consultation.png')}
          style={styles.image3}
        />
        <Text style={styles.name2}>45 min Therapy Consultation</Text>
        <Text style={styles.detail3}>
          The therapist conducts an assessment on video/phone call to know about
          the client's emotional state, health issues, current stressors and the
          clients share their full case history. The comfort and confidentiality
          is taken care of, with our team of experienced psychologists. Explore
          the power of therapy in a safe and non-judgmental space.
        </Text>
        <Image
          source={require('../assets/images/selfcare.png')}
          style={styles.image3}
        />
        <Text style={styles.name2}>Therapies and their Impact</Text>
        <Text style={styles.detail3}>
          Mental health therapy can be done in a variety of settings. Individual
          therapy is for one person and a mental health professional, while
          couples therapy is for intimate partners and a mental health
          professional. The benefits of therapy extend beyond those in
          treatment. For example, one person can go to individual therapy, but
          the other people in their life will likely benefit from that person's
          improved communication and relationship interactions
        </Text>
        <Image
          source={require('../assets/images/progress.png')}
          style={styles.image3}
        />
        <Text style={styles.name2}>Progress & Follow-ups</Text>
        <Text style={styles.detail3}>
        Throughout the treatment period, clients maintain communication with
          the therapist, providing updates on their improvement and any observed
          changes so that the therapist can track the client's progress, offer
          guidance. Follow-up consultations may be scheduled to review the
          client's response to the remedy for the continuous progress in the
          treatment.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    overflow: 'scroll',
    marginHorizontal: 8,
  },
  View2: {
    flex: 1,
    marginHorizontal: 0,
    maxHeight: 'auto',
    backgroundColor: '#daededff',
    marginTop: 50,
    marginBottom: 50,
  },
  View: {
    flex: 1,
    marginHorizontal: 0,
    maxHeight: 'auto',
    backgroundColor: 'white',
  },
  image: {
    marginTop: 50,
    height: 200,
    width: 200,
    borderRadius: 40,
    marginBottom: 21,
  },
  image2: {
    marginTop: 10,
    height: 80,
    width: 200,
    paddingLeft: 100,
    marginLeft: 100,
    position: 'fixed',
  },
  image3: {
    marginTop: 10,
    height: 200,
    width: 200,
    paddingLeft: 100,
    marginLeft: 100,
    position: 'fixed',
  },
  name: {
    fontSize: 40,
    color: '#008080ff',
    fontWeight: '800',
    marginBottom: 21,
  },
  name3: {
    fontSize: 40,
    color: '#008080ff',
    fontWeight: '800',
    marginBottom: 21,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  name2: {
    fontSize: 30,
    color: '#008080ff',
    fontWeight: '800',
    marginBottom: 21,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
  },
  detail3: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  detail: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  detail2: {
    fontSize: 20,
    color: '#171717',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default About;
