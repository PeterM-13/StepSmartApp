import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState, useEffect } from 'react';

export default function AlertPage({navigation}) {
    const [textValue, setTextValue] = useState();
    const [alertData, setAlertData] = useState({ });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://stepsmartapi.onrender.com/StepSmart/api/alert?code=${global.code}`;
                const response = await fetch(url);
                const data = await response.json();
                //console.log('Received Data: ', data);
                setAlertData(data);
                setTextValue(data.volume);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Error', 'Failed to fetch data');   //Alert.alert()
            }
        }
        fetchData();
      }, []);

      useEffect(() => {
        const sendData = async () => {
          try {
              const response = await fetch(`https://stepsmartapi.onrender.com/StepSmart/api/alert?code=${global.code}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(alertData)
            });
            if (response.ok) {
              console.log('Alert data sent successfully!');
            } else {
              console.error('Failed to send alert data. Status:', response.status);
            }
          } catch (error) {
            console.error('Error occurred while sending alert data:', error);
          }
        };
        if(Object.keys(alertData).length !== 0){
            //console.log('Sending data: ', alertData);
            sendData();
        }
    }, [alertData]);      
    

    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <Text style={{fontSize:22}}>Alerting</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={alertData.alert ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>setAlertData({...alertData, alert: (alertData.alert==1)?'0':'1'})}
                    value={(alertData)?alertData.alert=='1':1}
                />
            </View>
            <Text style={{fontSize:15, width:'70%',marginTop:15,marginBottom:80,color:'#8e8e8e'}}>Alert your emergency contacts when a fall is detected.</Text>
            
            <View style={styles.toggleContainer}>
                <Text style={styles.text}>Fall - Alarm</Text>
                <TextInput
                    style={styles.input}
                    placeholder='60'
                    keyboardType='numeric' //defult
                    maxLength={3}
                    returnKeyType='done'
                    defaultValue={(alertData)?String(alertData.fall):'60'}
                    onSubmitEditing={(event) => {setAlertData({ ...alertData, fall: event.nativeEvent.text });}}
                />
            </View>
            <Text style={{fontSize:15, width:'70%',marginBottom:15,color:'#8e8e8e'}}>The time between detecting a fall and sounding the stick's alarm, in seconds.</Text>
            
            <View style={styles.toggleContainer}>
                <Text style={styles.text}>Alarm - Contacts</Text>
                <TextInput
                    style={styles.input}
                    placeholder='60'
                    keyboardType='numeric' //defult
                    maxLength={3}
                    returnKeyType='done'
                    defaultValue={(alertData)?String(alertData.alarm):'60'}
                    onSubmitEditing={(event) => {setAlertData({ ...alertData, alarm: event.nativeEvent.text });}}
                />
            </View>
            <Text style={{fontSize:15, width:'70%',marginBottom:15,color:'#8e8e8e'}}>The time between sounding the alarm and notifying your emergency contacts.</Text>

            {/*https://www.npmjs.com/package/@react-native-community/slider*/}
            <Text style={styles.volumeText}>Buzzer Volume</Text>
            <View style={styles.toggleContainer}>
                <Slider
                    style={{width: '80%', height: 40}}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#007AFF"
                    maximumTrackTintColor="#8e8e8e"
                    onValueChange={(value)=>{setTextValue(value.toFixed(0))}}
                    onSlidingComplete={(value)=>setAlertData({...alertData, volume: value.toFixed(0)})}
                    step={0.01}
                    value={(alertData)?alertData.volume:5}
                />
                <Text style={{fontSize: 22,width:'20%',textAlign:'right', paddingRight:5}}>{(textValue)?textValue:5}</Text>
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
