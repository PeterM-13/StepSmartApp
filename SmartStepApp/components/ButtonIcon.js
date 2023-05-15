import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ButtonIcon({navigation, text, img}) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogInPage', { user: 'user' })}>
            <View style={styles.imageContainer}>
              <Image source={img} style={styles.image}/>
            </View>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#fff',
      width: 160,
      height: 160,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 8,
      paddingLeft: 5,
      paddingRight: 5,
      margin: 10,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
    },
    imageContainer: {
      width: 70,
      height: 70,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: { width: 0, height: 0 }, 
      shadowOpacity: 0.8,
      shadowRadius: 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 60,
      height: 60,
      marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 19,
    },
  });