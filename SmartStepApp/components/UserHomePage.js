import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonIcon from './ButtonIcon';

export default function UserHomePage({navigation, route}) {
  const {userData} = route.params;

  return (
    <View style={styles.container}>
      <ButtonIcon
        navigation={navigation}
        navPage={'AlertPage'}
        text="Set Alert"
        img={require('../assets/alarm.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="Contacts"
        img={require('../assets/emergency-contact.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="Lost Smart Stick"
        img={require('../assets/location.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'UserHomePage'}
        text="Heart Rate Log"
        img={require('../assets/heart-rate.png')}
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
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 50,
  },
});
