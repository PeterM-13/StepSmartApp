import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import ButtonIcon from './ButtonIcon';
import React, { useState } from 'react';

export default function AlertPage({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <Text style={{fontSize:22}}>Alerting</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Text style={{fontSize:15, width:'60%',marginTop:15,marginBottom:80,color:'#8e8e8e'}}>Alert your emergency contacts when a fall is detected</Text>
            <Text style={styles.text}>Detects a fall</Text>
            <TextInput
                style={styles.input}
                placeholder='secs'
                keyboardType='numeric' //defult
                maxLength={3}
                returnKeyType='done'
                defaultValue='30'
                //onChangeText={newText => setCode(newText)}
                //onSubmitEditing={validateCode}
            />
            <Text style={styles.text}>Alarm Sounds</Text>
            <TextInput
                style={styles.input}
                placeholder='secs'
                keyboardType='numeric' //defult
                maxLength={3}
                returnKeyType='done'
                defaultValue='60'
                //onChangeText={newText => setCode(newText)}
                //onSubmitEditing={validateCode}
            />
            <Text style={styles.text}>Contacts notified</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  toggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
  },
  input: {
    width: '20%',
    margin: 15,
    backgroundColor: '#fff',
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    borderRadius: 8,
    padding: 8,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
},
text: {
    fontSize: 22,

},
});
