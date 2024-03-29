import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function ButtonIcon({navigation, navPage, navProps={}, text, img, style, action}) {
  const [buttonPressed, setButtonPressed] = useState(false);
  if(!style){
    style = styles.button;
  }

  function buttonPress(){
    if(action){
      action(navProps.user);
    }else{
      navigation.navigate(navPage, { screen: navPage, params: navProps });
    }
    setButtonPressed(!buttonPressed)
  }

  return (
    <TouchableOpacity style={style} onPress={buttonPress}>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.image}/>
        </View>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    imageContainer: {
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 0 }, 
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 4,
      width: 75,
      height: 75,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 70,
      height: 70,
      marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 18,
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
  });