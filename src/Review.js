import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

const Placements = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.header}>
      <Text style={styles.header}>Reviews</Text>
        </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('./assets/images/Mindful_Bckgrd_Img.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Shuchi Gupta</Text>
            <Text style={styles.subtitle}>
              Intially i was very skeptical of visiting ma'am..As i don't want
              to take any medicines , was concerned about privacy thing too..
              And , to be true , I didn't even knew what I am gonna say when
              I'll visit ma'am... But , Now I feel so proud of my decision of
              visiting ma'am.. the medicine, she provides are so mild and yet so
              effective.. It's just been more than 1 month and I am observing so
              many changes in my day to day life.. I am feeling emotionally
              balanced and happier than before.. You don't need to be in a state
              of utter pain to visit a therapist, you can go there to make your
              life more productive and happier too.. In my case, these therapy
              sessions with Shefali ma'am is my healing and blessings both.. You
              can surely give it a try for once.. I am sure you gonna found
              these sessions worthy too.. wish you the healing my friend{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('./assets/images/Mindful_Bckgrd_Img.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>shally bhatia </Text>
            <Text style={styles.subtitle}>
              I really don't have words,it's just like a miracle happened to me
              ,Its a pain relief and i used it for the first time and my problem
              get solved ,I am really surprised by the results #recommended to
              each and every one,it's like one solution therapy for each and
              every problem.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('./assets/images/Mindful_Bckgrd_Img.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>shikha nigam</Text>
            <Text style={styles.subtitle}>
              It's really helping ne out and feels good after every therapy.
              Hope this stays the same and help everyone ❤
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('./assets/images/Mindful_Bckgrd_Img.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Neeti Garg </Text>
            <Text style={styles.subtitle}>
              This remedy is mild nd natural way to treat u n a great way to
              help ur mind nd emotions to improve you
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/images/Mindful_Bckgrd_Img.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Umesh Saxena</Text>
            <Text style={styles.subtitle}>
              The therapy is slow but steady and as usual SLOW AND STEADY ALWAYS
              WINS THE RACE
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    overflow:"scroll" ,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
    
  },
  card: {
    overflow:"scroll",
    margin:6,
    padding: 16,
    maxWidth: '90%',
    backgroundColor: '#03DAC6',
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
  imageWrapper: {
    marginRight: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#3700B3',
  },
  header: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#b000020',
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:1,
  },
  subtitle: {
    fontSize: 14,
    color: '#6200EE',
  },
});

export default Placements;