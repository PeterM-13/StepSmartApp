import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import ButtonIcon from './ButtonIcon';

export default function UserHomePage({navigation, route}) {
  const [batteryImage, setBatteryImage] = useState('50');
  const {userData} = route.params;

  const levels = [0, 10, 20, 50, 80, 100];
  useEffect(() => {
    const setBatteryImageBasedOnUserData = () => {
      if(userData == 'null' || userData == null || userData == undefined){
        setBatteryImage('200');
        return;
      }
      let closestLevel = '100'; // Initialize with the maximum level
      let minDiff = Math.abs(100 - userData); // Initialize with the difference between 100 and userData

      for (const level of levels) {
        const diff = Math.abs(level - userData);
        if (diff <= minDiff) {
          minDiff = diff;
          closestLevel = level.toString();
        }
      }
      setBatteryImage(closestLevel);
    };
    setBatteryImageBasedOnUserData();
  }, []);

  // Map battery levels to their corresponding image paths
  const batteryImageMap = {
    '0': require('../assets/0-percent.png'),
    '10': require('../assets/10-percent.png'),
    '20': require('../assets/20-percent.png'),
    '50': require('../assets/50-percent.png'),
    '80': require('../assets/80-percent.png'),
    '100': require('../assets/100-percent.png'),
    '200': require('../assets/battery-info.png'),
  };
  
  return (
    <View style={styles.container}>
      <ButtonIcon
        navigation={navigation}
        navPage='AlertPage'
        text="Set Alert"
        img={require('../assets/alarm.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage='ContactsPage'
        text="Contacts"
        img={require('../assets/emergency-contact.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage='LostPage'
        text="Lost Smart Stick"
        img={require('../assets/location.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage='HeartPage'
        text="Heart Rate Log"
        img={require('../assets/heart-rate.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage='UserHomePage'
        text="Battery Level"
        img={batteryImageMap[batteryImage]}
      />
      <ButtonIcon
        navigation={navigation}
        navPage='SettingsPage'
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
