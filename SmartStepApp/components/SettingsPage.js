import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';

export default function SettingsPage({navigation}) {
    const [textValue, setTextValue] = useState(global.textSize+12);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <Text style={{fontSize:22+global.textSize}}>Dark mode</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={darkMode ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{setDarkMode(!darkMode)}}
                    value={darkMode}
                />
            </View>
            <Text style={{fontSize:15+global.textSize, width:'70%',marginTop:15,marginBottom:10,color:'#8e8e8e'}}>Update the apps visual style and apply a darker colour scheme. (future update)</Text>
            

            <Text style={[styles.volumeText, {fontSize:22+global.textSize}]}>Text Size</Text>
            <View style={styles.toggleContainer}>
                <Slider
                    style={{width: '80%', height: 40}}
                    minimumValue={8}
                    maximumValue={20}
                    minimumTrackTintColor="#007AFF"
                    maximumTrackTintColor="#8e8e8e"
                    onValueChange={(value)=>{setTextValue(value.toFixed(0));global.textSize=(value.toFixed(0))-12}}
                    //onSlidingComplete={(value)=>{global.textSize=(value.toFixed(0))-12}}
                    step={0.01}
                    value={global.textSize+12}
                />
                <Text style={{fontSize:22+global.textSize, width:'20%',textAlign:'right', paddingRight:5}}>{(textValue)?textValue:12}</Text>
            </View>
            <Text style={{fontSize:15+global.textSize, width:'70%',marginBottom:15,color:'#8e8e8e'}}>Change the text size to your preference.</Text>
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
volumeText: {
    textAlign: 'left',
    width: '70%',
    marginTop: 85,
    marginBottom: 5,
},
});
