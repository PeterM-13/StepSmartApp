import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonIcon from './ButtonIcon2';

export default function UserHomePage({navigation}) {
  return (
    <View style={styles.container}>
      <ButtonIcon
        navigation={navigation}
        navPage={''}
        text="Set Alert"
        img={require('../assets/alarm.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={''}
        text="Emergency Contacts"
        img={require('../assets/ambulance.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={''}
        text="Lost Smart Stick"
        img={require('../assets/signal.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={''}
        text="Heart Rate Log"
        img={require('../assets/heart.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={''}
        text="App Settings"
        img={require('../assets/setting.png')}
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 50,

  },
});
