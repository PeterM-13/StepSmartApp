import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect, useRef } from 'react';

import LogInPage from './components/LogInPage';
import UserHomePage from './components/UserHomePage';
import CarerHomePage from './components/CarerHomePage';
import WelcomeScreen from './components/WelcomeScreen';
import AlertPage from './components/AlertPage';
import ContactsPage from './components/ContactsPage';
import LostPage from './components/LostPage';
import HeartPage from './components/HeartPage';
import SettingsPage from './components/SettingsPage';

import { Alert } from 'react-native';
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
  
const Stack = createNativeStackNavigator();

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
    // This listener is fired whenever a notification is received while the app is foregrounded.
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log("got gere !!!!")
      Alert.alert(
        notification.request.content.title,
        notification.request.content.body,
        [
          { text: 'OK', onPress: () => console.log('Alert dismissed.') }
        ]
        );
        setNotification(notification);
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

  useEffect(()=>{
    const fetchData = async () => {
      try {
          const url = `https://stepsmartapi.onrender.com/StepSmart/api/emergency?code=${global.code}`;
          const response = await fetch(url);
          const data = await response.json();
          //console.log('Received Data: ', data);
          if(data.emergency){
            Alert.alert("Emergency")
          }
      } catch (error) {
          console.error('Error fetching data:', error);
          Alert.alert('Error', 'Failed to fetch data');   //Alert.alert()
      }
  }
  fetchData();
  }, [])

  // useEffect(()=>{
  //   const sendData = async () => {
  //     try {
  //         const response = await fetch(`https://stepsmartapi.onrender.com/StepSmart/api/devices?code=${global.code}`, {
  //             method: 'PATCH',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({lost: lost})
  //         });
  //     if (response.ok) {
  //         console.log('Lost data sent successfully!');
  //     } else {
  //         console.error('Failed to send alert data. Status:', response.status);
  //     }
  //     } catch (error) {
  //         console.error('Error occurred while sending alert data:', error);
  //     }
  // };
  // sendData();
  // }, [expoPushToken])
  

  return (
    // screen navigation stack
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeSceen" component={WelcomeScreen} options={{title: 'Welcome', headerShown: false}}/>
        <Stack.Screen name="LogInPage" component={LogInPage} options={{title: 'Setup', headerBackVisible: false}}></Stack.Screen>
        <Stack.Screen name="UserHomePage" component={UserHomePage} options={{title: 'Home'}}></Stack.Screen>
        <Stack.Screen name="CarerHomePage" component={CarerHomePage} options={{title: 'Home'}}></Stack.Screen>
        <Stack.Screen name="AlertPage" component={AlertPage} options={{title: 'Alerts'}}></Stack.Screen>
        <Stack.Screen name="ContactsPage" component={ContactsPage} options={{title: 'Contacts'}}></Stack.Screen>
        <Stack.Screen name="LostPage" component={LostPage} options={{title: 'Lost Walking Stick'}}></Stack.Screen>
        <Stack.Screen name="HeartPage" component={HeartPage} options={{title: 'Heart Monitoring'}}></Stack.Screen>
        <Stack.Screen name="SettingsPage" component={SettingsPage} options={{title: 'App Settings'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}