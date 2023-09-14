import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LogInPage from './components/LogInPage';
import UserHomePage from './components/UserHomePage';
import CarerHomePage from './components/CarerHomePage';
import WelcomeScreen from './components/WelcomeScreen';
import AlertPage from './components/AlertPage';
import ContactsPage from './components/ContactsPage';
import LostPage from './components/LostPage';
import HeartPage from './components/HeartPage';
import SettingsPage from './components/SettingsPage';
import NotificationsPage from './components/NotificationsPage';

import { Alert } from 'react-native';
  
const Stack = createNativeStackNavigator();

export default function App() {
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
        <Stack.Screen name="NotificationsPage" component={NotificationsPage} options={{title: 'Notifications'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}