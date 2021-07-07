import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';

export const Images = () => {
  return (
      <>
      <Image
        style={styles.images}
        source={require('./assets/arte1.jpg')}
      />
      <View style={styles.descView}> 
      <Text style={styles.desc}>Brazil Cyberpunk</Text>
      <Entypo name="dots-three-horizontal" size={15} color="black" style={{paddingTop: 6}} />
      </View>
      <Image
      style={styles.images}
      source={require('./assets/arte2.jpg')}
    />
      <View style={styles.descView}> 
      <Text style={styles.desc}>Colagem a lua</Text>
      <Entypo name="dots-three-horizontal" size={15} color="black" style={{paddingTop: 6}} />
      </View>
     <Image
      style={styles.images}
      source={require('./assets/arte3.jpg')}
    />
     <View style={styles.descView}> 
      <Text style={styles.desc}>Conhecendo o espaço</Text>
      <Entypo name="dots-three-horizontal" size={15} color="black" style={{paddingTop: 6}} />
      </View>
      <Image
      style={styles.images}
      source={require('./assets/arte4.jpg')}
    />
      <Text style={styles.desc}> Estrada para o infinito</Text>
    </>
  )
}