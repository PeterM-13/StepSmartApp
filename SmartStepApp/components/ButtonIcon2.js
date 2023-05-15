import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ButtonIcon2({navigation, navPage, text, img}) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(navPage)}>
            <Image source={img} style={styles.image}/>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ddd',
      width: 160,
      height: 160,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 8,
      paddingLeft: 5,
      paddingRight: 5,
      margin: 10,
    },
    image: {
      width: 60,
      height: 60,
      marginTop: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 19,
    },
  });