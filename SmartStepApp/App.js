import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';

import LogInPage from './components/LogInPage';
import UserHomePage from './components/UserHomePage';
import CarerHomePage from './components/CarerHomePage';
import WelcomeScreen from './components/WelcomeScreen';
import AlertPage from './components/AlertPage';
import ContactsPage from './components/ContactsPage';
import LostPage from './components/LostPage';
import HeartPage from './components/HeartPage';
import SettingsPage from './components/SettingsPage';

import {sendPushNotification, registerForPushNotificationsAsync} from './components/NotificationsHandler';

const Stack = createNativeStackNavigator();

export default function App() {
  global.textSize = 0;

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    //console.log('myToken: "', expoPushToken, '"');

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
    
  }, []);

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