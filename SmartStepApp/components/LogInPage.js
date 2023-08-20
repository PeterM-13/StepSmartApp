import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, {useState, useEffect } from 'react';

import ButtonIcon from './ButtonIcon';

export default function LogInPage({navigation}) {
    const [code, setCode] = useState('');
    const [user, setUser] = useState('');
    const [userLeftButton, setUserLeftButton] = useState(styles.button);
    const [userRightButton, setUserRightButton] = useState(styles.button);

    const [userData, setUserData] = useState('null'); // battery level

    useEffect(() => {
        if (user == 'user') {
          setUserLeftButton(styles.button)
          setUserRightButton(styles.buttonPressed)
        }else if (user == 'carer'){
            setUserLeftButton(styles.buttonPressed)
            setUserRightButton(styles.button)
        }
      }, [user]);

    async function fetchData(code){
        try {
            const url = `https://stepsmartapi.onrender.com/StepSmart/api?code=${code}`;
            const response = await fetch(url);
            if (!response.ok) {
                console.log(`Failed to fetch data. Status: ${response.status}`);
                return false;
            }
            const data = await response.json();
            console.log('Received Data: ', data);
            setUserData(data);
            return true;
        } catch (error) {
            console.error('Error fetching data:', error);
            return false;
        }
    }

    async function validateCode(){
        if(code.length != 8){
            if(code.length == 0){
                Alert.alert('Error', `Please enter a valid code`);
            }else{
                Alert.alert('Error', `'${code}' is invalid\nPlease try again`);
            }
            return;
        }
        let response = await fetchData(code);
        if(!response){
            Alert.alert('Error', 'Failded to fetch data\nCheck the code is valid');
            return;
        }

        if(JSON.stringify(userLeftButton)==JSON.stringify(styles.button) && JSON.stringify(userRightButton)==JSON.stringify(styles.button)){
            Alert.alert('Error', 'Please select a user type');
            return;
        }
        global.code = code;
        if(user == 'carer'){
            navigation.navigate('CarerHomePage', {userData});
        }else{
            navigation.navigate('UserHomePage', {userData});    
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22}}>Enter the code on the smart stick</Text>
            <TextInput
                style={styles.input}
                placeholder='12345678'
                maxLength={8}
                keyboardType='numeric' //defult
                returnKeyType='done'
                onChangeText={newText => setCode(newText)}
                //onSubmitEditing={validateCode}
            />

            <Text style={{fontSize: 22}}>Would you like to</Text>
            <View style={styles.buttonContainer2}>
                <ButtonIcon navigation={navigation} text='Use a stick' style={userLeftButton} action={setUser} navProps={{user:'user'}} img={require('../assets/cane.png')}/>
                <ButtonIcon navigation={navigation} text='Monitor a stick' style={userRightButton} action={setUser} navProps={{user:'carer'}} img={require('../assets/search.png')}/>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={validateCode}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        marginTop: 15,
        marginBottom: 75,
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
    buttonContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    buttonText: {
        fontSize: 18,
    },
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
