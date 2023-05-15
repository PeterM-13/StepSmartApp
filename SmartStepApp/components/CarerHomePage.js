import { StyleSheet, Text, View, Button } from 'react-native';

export default function CarerHomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="Notifications"
        onPress={() => navigation.navigate('StartPage')}
      />
      <Button
        title="Heart Rate Log"
        onPress={() => navigation.navigate('StartPage')}
      />
    </View>
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
