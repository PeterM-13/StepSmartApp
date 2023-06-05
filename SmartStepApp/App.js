import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInPage from './components/LogInPage';
import UserHomePage from './components/UserHomePage';
import CarerHomePage from './components/CarerHomePage';
import WelcomeScreen from './components/WelcomeScreen';
import AlertPage from './components/AlertPage';
import LostPage from './components/LostPage';

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
        <Stack.Screen name="AlertPage" component={AlertPage} options={{title: 'Alert'}}></Stack.Screen>
        <Stack.Screen name="LostPage" component={LostPage} options={{title: 'Lost Stick'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}