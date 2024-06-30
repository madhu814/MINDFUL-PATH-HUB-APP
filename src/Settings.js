import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Onboarding = ({ navigation }) => {
    return (
        <Animatable.View animation="fadeIn" delay={500} style={styles.textContainer}>
            <Text style={styles.mainText}>
                Welcome
            </Text>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "center",
        marginTop: 0,  // Remove any top margin
        paddingTop: 0,
    },
    mainText: {
        fontSize: 20,
        color: '#FFBF00',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginTop: 0,
    }
});

export default Onboarding;
