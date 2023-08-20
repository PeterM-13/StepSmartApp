import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import ButtonIcon from './ButtonIcon';
import React, { useState, useEffect, useRef } from 'react';

import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

// This handler determines how your app handles notifications that come in while the app is foregrounded.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
//Notifications.setNotificationHandler(null);

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }
    // token = await Notifications.getExpoPushTokenAsync({
      //   projectId: Constants.expoConfig.extra.eas.projectId,
      // });
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      Alert.alert('Must use physical device for Push Notifications');
    }
    
    return token;
  }

export default function CarerHomePage({navigation, route}) {
  const {userData} = route.params;

  useEffect(()=>{
    if(userData != 'null' && userData.alert.alert == '1' && userData.emergency){
      Alert.alert("EMERGENCY", "The walking stick you are monitoring is in a state of emergency.\nAssisstance my be required.")
    }
  }, [userData])

  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();
  
  useEffect(() => {
    const sendData = async () => {
      try {
          const response = await fetch(`https://stepsmartapi.onrender.com/StepSmart/api/devices?code=${global.code}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({devices: expoPushToken})
          });
      if (response.ok) {
          console.log('Device data sent successfully!');
      } else {
          console.error('Failed to send device data. Status:', response.status);
      }
      } catch (error) {
          console.error('Error occurred while sending device data:', error);
      }
  };
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    sendData();
    
    // This listener is fired whenever a notification is received while the app is foregrounded.
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
      });

      // This listener is fired whenever a user taps on or interacts with a notification (works when an app is foregrounded, backgrounded, or killed).
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
      
    global.textSize = 0;
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  const [batteryImage, setBatteryImage] = useState('50');
  const levels = [0, 10, 20, 50, 80, 100];
  useEffect(() => {
    const setBatteryImageBasedOnUserData = () => {
      if(userData == 'null' || userData == null || userData == undefined){
        setBatteryImage('200');
        return;
      }

      let closestLevel = '100'; // Initialize with the maximum level
      let minDiff = Math.abs(100 - userData.battery); // Initialize with the difference between 100 and userData

      for (const level of levels) {
        const diff = Math.abs(level - userData.battery);
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
        navPage={'SettingsPage'}
        text="Notifications"
        img={require('../assets/alarm.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage={'HeartPage'}
        text="Heart Rate Log"
        img={require('../assets/heart-rate.png')}
      />
      <ButtonIcon
        navigation={navigation}
        navPage='CarerHomePage'
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