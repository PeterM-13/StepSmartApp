import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ButtonIcon({navigation, navPage, navProps={}, text, img}) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(navPage, navProps)}>
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
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffset: { width: 0, height: 0 }, 
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 4,
      width: 75,
      height: 75,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 70,
      height: 70,
      marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 18,
    },
  });