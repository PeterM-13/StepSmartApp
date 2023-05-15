import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


export default function StartPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Would you like to</Text>
      <Button
        title="Use a smart stick"
        onPress={() => navigation.navigate('LogInPage', {user:'user'})}
      />
      <Button
        title="Monitor a smart stick"
        onPress={() => navigation.navigate('LogInPage', {user:'carer'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
