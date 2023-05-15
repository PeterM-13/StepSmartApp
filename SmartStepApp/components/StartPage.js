import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ButtonIcon from './ButtonIcon';

export default function StartPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22}}>Would you like to</Text>
      <View style={styles.buttonContainer}>
        <ButtonIcon navigation={navigation} text='User a smart stick' navPage='LogInPage' navProps={{user:'user'}} img={require('../assets/stick.png')}/>
        <ButtonIcon navigation={navigation} text='Monitor a smart stick' navPage='LogInPage' navProps={{user:'carer'}} img={require('../assets/search.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  }
});
