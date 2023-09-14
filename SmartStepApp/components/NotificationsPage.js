import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function NotificationsPage(){
    const [darkMode, setDarkMode] = useState(true);
    const [haptics, setHaptics] = useState(true);
    const [settings, setSettings] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <Text style={{fontSize:22+global.textSize}}>Notifications</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={darkMode ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{setDarkMode(!darkMode)}}
                    value={darkMode}
                />
            </View>
            <Text style={{fontSize:15+global.textSize, width:'70%',marginTop:15,marginBottom:10,color:'#8e8e8e'}}>Toggle receiving notifications from users of a smart stick</Text>
            <View style={[styles.toggleContainer, {paddingTop:50}]}>
                <Text style={{fontSize:22+global.textSize}}>Haptics</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={darkMode ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{setHaptics(!haptics)}}
                    value={haptics}
                />
            </View>
            <Text style={{fontSize:15+global.textSize, width:'70%',marginTop:15,marginBottom:10,color:'#8e8e8e'}}>Enable haptic feedback when receiving notifications</Text>
            <View style={[styles.toggleContainer, {paddingTop:50}]}>
                <Text style={{fontSize:22+global.textSize}}>Settings</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={darkMode ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{setSettings(!settings)}}
                    value={settings}
                />
            </View>
            <Text style={{fontSize:15+global.textSize, width:'70%',marginTop:15,marginBottom:10,color:'#8e8e8e'}}>More settings can be located here</Text>
        </View>
    );
};


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
  });
  