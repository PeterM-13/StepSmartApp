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
    paddingLeft: 50,
    paddingRight: 50,
  },
  image: {
    width: '100%',
    resizeMode: "contain",
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    shadowColor: '#71EDB7',//'rgba(255, 255, 255, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 6,
    elevation: 4
  },
  buttonText: {
    fontSize: 20,
  }
});
