import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import ButtonIcon from './ButtonIcon';

export default function LostPage({navigation}) {
    const [userLeftButton, setUserLeftButton] = useState(styles.button);
    const [userRightButton, setUserRightButton] = useState(styles.button);
    const [lost, setLost] = useState(false);

    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await fetch(`https://stepsmartapi.onrender.com/StepSmart/api/lost?code=${global.code}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({lost: lost})
                });
            if (response.ok) {
                console.log('Lost data sent successfully!');
            } else {
                console.error('Failed to send lost data. Status:', response.status);
            }
            } catch (error) {
                console.error('Error occurred while sending lost data:', error);
            }
        };

        if(typeof lost === "boolean"){
            if (lost) {
                setUserLeftButton(styles.buttonPressed)
                setUserRightButton(styles.button)
            }else if (!lost){
                setUserLeftButton(styles.button)
                setUserRightButton(styles.buttonPressed)
            }
            console.log('Sending data: ', {lost: lost});
            sendData();
        }
      }, [lost]);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Remotely turn your stick's lights and buzzer on to help you locate it.</Text>
            </View>
            <View style={styles.buttonContainer2}>
                <ButtonIcon navigation={navigation} text='On' style={userLeftButton} action={setLost} navProps={{user:true}} img={require('../assets/on.png')}/>
                <ButtonIcon navigation={navigation} text='Off' style={userRightButton} action={setLost} navProps={{user:false}} img={require('../assets/off.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        textAlign: 'center',
    },
    textContainer: {
        width: '80%',
        paddingTop: 100,
        paddingBottom: 15,
    },
    text:{ fontSize: 18,},
    buttonContainer2: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        marginBottom: 75,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
      },
      button: {
        backgroundColor: '#fff',
        width: 160,
        height: 160,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 8,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      buttonPressed: {
        backgroundColor: '#fff',
        width: 160,
        height: 160,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 8,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        opacity: 0.4,
      },
});