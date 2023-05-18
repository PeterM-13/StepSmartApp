import { StyleSheet, Text, View, Switch, TextInput, Slider } from 'react-native';
import React, { useState } from 'react';

export default function AlertPage({navigation}) {
    const [isEnabled, setIsEnabled] = useState(true);
    const [volume, setVolume] = useState(8);
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
            <Text style={{fontSize:15, width:'70%',marginTop:15,marginBottom:80,color:'#8e8e8e'}}>Alert your emergency contacts when a fall is detected.</Text>
            
            <View style={styles.toggleContainer}>
                <Text style={styles.text}>Fall - Alarm</Text>
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
            </View>
            <Text style={{fontSize:15, width:'70%',marginBottom:15,color:'#8e8e8e'}}>The time between detecting a fall and sounding the stick's alarm, in seconds.</Text>
            
            <View style={styles.toggleContainer}>
                <Text style={styles.text}>Alarm - Contacts</Text>
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
            </View>
            <Text style={{fontSize:15, width:'70%',marginBottom:15,color:'#8e8e8e'}}>The time between sounding the alarm and notifying your emergency.</Text>

            {/*https://www.npmjs.com/package/@react-native-community/slider*/}
            <Text style={styles.volumeText}>Buzzer Volume</Text>
            <View style={styles.toggleContainer}>
                <Slider
                    style={{width: '80%', height: 40}}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#007AFF"
                    maximumTrackTintColor="#8e8e8e"
                    onValueChange={(value)=>setVolume(value.toFixed(0))}
                    step={0.01}
                    value={volume}
                />
                <Text style={{fontSize: 22,width:'20%',textAlign:'right', paddingRight:5}}>{volume}</Text>
            </View>
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
    width: '70%',
  },
  input: {
    width: '20%',
    marginTop: 12,
    marginBottom: 12,
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
    textAlign: 'left',
    width: '70%',
},
volumeText: {
    fontSize: 22,
    textAlign: 'left',
    width: '70%',
    marginTop: 100,
},
});
