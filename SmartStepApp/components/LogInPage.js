import { StyleSheet, Text, View, Button } from 'react-native';

export default function LogInPage({navigation, route}) {
    const user = route.params?.user || '';

    const navigateToHomePage = () => {
        const nextPage = (user === 'user') ? 'UserHomePage' : 'CarerHomePage';
        navigation.navigate(nextPage);
      };

    return (
        <View style={styles.container}>
            <Text>Ueser: {user}</Text>
            <Text>Enter the code on the smart stick</Text>
            <Button
                title="Enter"
                onPress={navigateToHomePage}
            />
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
});
