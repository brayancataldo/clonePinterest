import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles';
import { Images } from './feed.js';
import { Images2 } from './feed2.js';

export const HoleFeed = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <View style={styles.feed1}> 
      <Images/>
      <Images/>
      </View>
      <View style={styles.feed2}>
      <Images2/>
      <Images2/>
      </View> 
      </View>
    </ScrollView>

  );
};