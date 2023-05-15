import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ButtonIcon from './ButtonIcon';

export default function StartPage({navigation}) {
    // ToDo
    // Combine LogIn and start pages into one page (no need for both)
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22}}>Would you like to</Text>
            <View style={styles.buttonContainer}>
                <ButtonIcon navigation={navigation} text='User a stick' navPage='UserHomePage' navProps={{user:'user'}} img={require('../assets/stick.png')}/>
                <ButtonIcon navigation={navigation} text='Monitor a stick' navPage='CarerHomePage' navProps={{user:'carer'}} img={require('../assets/search.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
