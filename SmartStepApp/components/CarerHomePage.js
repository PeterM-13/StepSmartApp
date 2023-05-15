import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonIcon from './ButtonIcon';

export default function CarerHomePage({navigation}) {
  return (
    <View style={styles.container}>
      <ButtonIcon
        navigation={navigation}
        navPage={''}
        text="Notifications"
        img={require('../assets/alarm.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={''}
        text="Heart Rate Log"
        img={require('../assets/heart-rate.png')}
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