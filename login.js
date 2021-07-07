import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Login = () => {
  return (
      <>
    <View style={styles.background}> 
    <Image
      style={styles.print}
      source={require('./assets/print.jpg')}
    />
    </View>
      <View style={styles.container}>
          <View style={styles.viewLogo}> 
           <Image
      style={styles.logo}
      source={require('./assets/pinterest.png')}
    />
    </View>
          <View style={styles.welcome}> 
          <Text style={styles.msg}>Bem-vindo(a) ao Pinterest</Text> 
          </View>
    <TouchableOpacity style={styles.barra}>
      <Text style={styles.text}>Inscreva-se</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.barra2}>
          <Text style={styles.text2}>Entrar</Text> 
      </TouchableOpacity>
      </View>
      </>
  )
};