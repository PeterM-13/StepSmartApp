import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonIcon from './ButtonIcon';

export default function UserHomePage({navigation}) {
  return (
    <View style={styles.container}>
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="Set Alert"
        img={require('../assets/alarm.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="Emergency Contacts"
        img={require('../assets/ambulance.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="Lost Smart Stick"
        img={require('../assets/signal.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="Heart Rate Log"
        img={require('../assets/heart.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="App Settings"
        img={require('../assets/setting.png')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 50,
  },
});
