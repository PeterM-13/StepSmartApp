import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ButtonIcon({navigation, text, img}) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogInPage', { user: 'user' })}>
            <Image source={img} style={styles.image}/>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ddd',
      width: 140,
      height: 140,
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 10,
      borderRadius: 8,
    },
    image: {
      width: 60,
      height: 60,
      marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 17,
    },
  });