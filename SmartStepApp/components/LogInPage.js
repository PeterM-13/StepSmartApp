import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function LogInPage({navigation, route}) {
    const [code, setCode] = useState('');
    const user = route.params?.user || '';

    function validateCode(){
        if(code.length != 8){
            return false;
        }
        return true;
    }

    const navigateToHomePage = () => {
        if(validateCode() == true){
            const nextPage = (user === 'user') ? 'UserHomePage' : 'CarerHomePage';
            navigation.navigate(nextPage);
        }else{
            alert(`'${code}' is an invalid code.\nPlease try again.`);
        }
      };

    return (
        <View style={styles.container}>
            {/*<Text>Ueser: {user}</Text>*/}
            <Text style={styles.title}>Enter the code on the smart stick</Text>
            <TextInput
                style={styles.input}
                placeholder='1234-5678'
                onChangeText={newText => setCode(newText)}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={navigateToHomePage}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        width: '80%',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        borderRadius: 8,
        padding: 8,
        marginTop: 18,
        marginBottom: 18,
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
