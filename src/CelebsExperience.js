import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  navigation,
} from 'react-native';

const CelebsExperience = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.header}>
          Celebs Experience with Bach Flower Therapy
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/images/khushi.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>JENNIFER ANISTON ACTOR</Text>
            <Text style={styles.subtitle}>
              Reportedly Jennifer Aniston uses Bach Flower Remedies to keep cool
              under pressure. She uses it before movies and premiers to relieve
              stress and anxiety.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/images/goat.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>LIONEL MESSI, FOOTBALLER</Text>
            <Text style={styles.subtitle}>
              As per ESPN, Nutritionist Giuliano Poser’s helped Messi upturn his
              form in 2015 by methods including the use of Bach flower remedies,
              emotional therapy and a balanced diet.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/images/crush.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>EMMA WATSON, ACTOR</Text>
            <Text style={styles.subtitle}>
              Emma Watson says about Rescue Remedy, “A few drops of it under my
              tongue before I go out calms me down. It is in my makeup bag all
              the time.”
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    overflow: 'scroll',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
  },
  card: {
    overflow: 'scroll',
    margin: 6,
    padding: 16,
    maxWidth: '90%',
    backgroundColor: '#03DAC6',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    marginRight: 16,
  },
  loginButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: '#3333',
    shadowOpacity: 1,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 60,
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#6200EE',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'purple',
    width: '100%',
  },
  footerText: {
    color: 'white',
  },
});

export default CelebsExperience;
