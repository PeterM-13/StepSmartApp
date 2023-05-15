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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
    },
    input: {
        height: 50,
        width: '80%',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
        marginTop: 18,
        marginBottom: 18,
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: '#ddd',
        borderRadius: 8,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    buttonText: {
        fontSize: 18,
    },
});
