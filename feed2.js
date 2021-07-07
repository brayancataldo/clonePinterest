import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Images2 = () => {

function Oi(){
  console.log("oi");
}

  return (
      <>
      <Image
      style={styles.images}
      source={require('./assets/arte5.jpg')}
    />
      <Text style={styles.desc}> Rodovia espacial</Text>
    <Image
      style={styles.images}
      source={require('./assets/arte6.jpg')}
    />
      <Text style={styles.desc}> Accul beatmaker</Text>
      <Image
      style={styles.images}
      source={require('./assets/arte7.png')}
    />
      <Text style={styles.desc}> Sav' joe clean up day</Text>
    <Image
      style={styles.images}
      source={require('./assets/arte6.jpg')}
    />
      <Text style={styles.desc}> Accul beatmaker</Text>
    </>
  )
}