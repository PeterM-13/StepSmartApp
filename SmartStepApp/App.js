import { StyleSheet, Text, View, Button } from 'react-native';
//import Navigator from "./routes/homeStack";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './components/StartPage';
import LogInPage from './components/LogInPage';
import UserHomePage from './components/UserHomePage';
import CarerHomePage from './components/CarerHomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage} options={{title: 'Smart Step'}}/>
        <Stack.Screen name="LogInPage" component={LogInPage} options={{title: 'Login'}}></Stack.Screen>
        <Stack.Screen name="UserHomePage" component={UserHomePage} options={{title: 'Home'}}></Stack.Screen>
        <Stack.Screen name="CarerHomePage" component={CarerHomePage} options={{title: 'Home'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
