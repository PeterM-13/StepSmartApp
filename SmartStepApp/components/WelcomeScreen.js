import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/Logo.png')}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogInPage')}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32303E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flew-start',
    height: '100%',
    padding: 50,
    padding: 50,
  },
  image: {
    width: '100%',
    resizeMode: "contain",
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#71EDB7',
    borderRadius: 8,
    width: 175,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    shadowColor: '#71EDB7',//'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 4
  },
  buttonText: {
    fontSize: 22,
    color: '#32303E',
  }
});
