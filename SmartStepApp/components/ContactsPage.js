import { StyleSheet, TextInput, View, Button, SectionList, SafeAreaView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as Contacts from "expo-contacts";

export default function ContactsPage({navigation}) {
    const [contacts, setContacts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // const requestContactsPermission = async () => {
    //     const { status } = await Contacts.requestPermissionsAsync();
    //     return status === 'granted';
    // };
    // const getContacts = async () => {
    //     const hasPermission = await requestContactsPermission();
      
    //     if (hasPermission) {
    //         // Access contacts
    //         const { data } = await Contacts.getContactsAsync();
    //         if (data.length > 0) {
    //             const formattedContacts = data.map((contact) => ({
    //                 name: contact.name,
    //                 phoneNumbers: contact.phoneNumbers ? contact.phoneNumbers.map((phoneNumber) => phoneNumber.number) : [],
    //             }));
    //             setContacts(formattedContacts);
    //         }
    //     } else {
    //         console.log('Contacts permission denied.');
    //     }
    // };
    // useEffect(() => {getContacts()}, [])
    // useEffect(() => {console.log(contacts);}, [contacts])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://stepsmartapi.onrender.com/StepSmart/api/contacts?code=${global.code}`;
                const response = await fetch(url);
                const responseData = await response.json();
                if (Array.isArray(responseData.contacts)) {
                    const data = responseData.contacts.map((contact) => JSON.parse(contact));
                    //console.log('Received Data:', data);
                    setLoaded(true);
                    setContacts(data);
                } else {
                    console.log('Error: Invalid response data forma for contacts');
                }
            } catch (error) {
                console.error('Error fetching contacts data:', error);
                alert('Error', 'Failed to fetch data');
            }
        }
        fetchData();
      }, []);

    useEffect(() => {
        const sendData = async () => {
            try {
                const contactsPayload = JSON.stringify({
                    contacts: contacts.map((contact) => JSON.stringify(contact))
                });
                const response = await fetch(`https://stepsmartapi.onrender.com/StepSmart/api/contacts?code=${global.code}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: contactsPayload
                });
                if (response.ok) {
                    console.log('Contacts sent successfully!');
                } else {
                    console.error('Failed to send contacts data. Status:', response.status, ', Response:', response.body);
                }
            } catch (error) {
                console.error('Error occurred while sending contacts data:', error);
            }
        };
        if(loaded){
            //console.log('Sending data: ', contacts);
            sendData();
        }
    }, [contacts]);


    const handleNameChange = (index, name) => {
        const updatedContacts = [...contacts];
        updatedContacts[index].name = name;
        setContacts(updatedContacts);
      };
    
      const handlePhoneNumberChange = (index, phoneNumber) => {
        const updatedContacts = [...contacts];
        updatedContacts[index].phoneNumber = phoneNumber;
        setContacts(updatedContacts);
      };
    
      const addContact = () => {
        if (contacts.length < 8) {
          setContacts([...contacts, { name: '', phoneNumber: '' }]);
        }
      };
    
      const removeContact = (index) => {
        const updatedContacts = [...contacts];
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
      };
    
      const renderContactItem = ({ item, index }) => {
        return (
          <View style={styles.contactContainer}>
            <TextInput
              style={styles.nameInput}
              placeholder="Name"
              value={item.name}
              maxLength={20}
              onChangeText={(text) => handleNameChange(index, text)}
            />
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Phone Number"
              value={item.phoneNumber}
              maxLength={11}
              onChangeText={(text) => handlePhoneNumberChange(index, text)}
              keyboardType="numeric"
            />
            <Button title="Remove" onPress={() => removeContact(index)} />
          </View>
        );
      };
    
    const sections = [{ data: contacts }];
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={sections}
                renderItem={renderContactItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.addButtonContainer}>
                <Button
                    title="Add Contact"
                    onPress={addContact}
                    disabled={contacts.length === 8}
                    color={contacts.length === 8 ? '#ccc' : undefined}
                />
            </View>
        </SafeAreaView>
    );
}
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#fff',
      },
      contactContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
      },
      nameInput: {
        flex: 1,
        height: 50,
        marginRight: 10,
      },
      phoneNumberInput: {
        flex: 1,
        height: 50,
        marginRight: 10,
      },
      addButtonContainer: {
        marginBottom: 50,
      },
    });