import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const NavInf = () => {
  return (
      <View style={styles.navInferior}>
      <Foundation name="home" size={27} color="black" />
      <FontAwesome5 name="search" size={21} color="gray" />
      <Ionicons name="chatbubble-ellipses-sharp" size={24} color="gray" />
      <MaterialCommunityIcons name="account" size={29} color="gray" />
      </View>
  )
};