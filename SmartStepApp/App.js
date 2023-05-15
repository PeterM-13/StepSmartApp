import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartPage from './components/StartPage';
import LogInPage from './components/LogInPage';
import UserHomePage from './components/UserHomePage';
import CarerHomePage from './components/CarerHomePage';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // screen navigation stack
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeSceen" component={WelcomeScreen} options={{title: 'Welcome'}}/>
        <Stack.Screen name="LogInPage" component={LogInPage} options={{title: 'Login', headerBackVisible: false}}></Stack.Screen>
        <Stack.Screen name="StartPage" component={StartPage} options={{title: 'Select'}}/>
        <Stack.Screen name="UserHomePage" component={UserHomePage} options={{title: 'Home', headerBackVisible: false}}></Stack.Screen>
        <Stack.Screen name="CarerHomePage" component={CarerHomePage} options={{title: 'Home', headerBackVisible: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}