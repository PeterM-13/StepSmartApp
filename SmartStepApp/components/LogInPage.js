import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function LogInPage({navigation, route}) {
    const [code, setCode] = useState('');

    function validateCode(){
        if(code.length != 8){
            alert(`'${code}' is invalid\nPlease try again`);
            return;
        }
        global.code = code;
        navigation.navigate('StartPage');
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22}}>Enter the code on the smart stick</Text>
            <TextInput
                style={styles.input}
                placeholder='1234 5678'
                maxLength={8}
                keyboardType='numeric' //defult
                returnKeyType='done'
                onChangeText={newText => setCode(newText)}
                onSubmitEditing={validateCode}
            />
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
        marginTop: 18,
        marginBottom: 18,
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
        marginBottom: 100,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    buttonText: {
        fontSize: 18,
    },
});
