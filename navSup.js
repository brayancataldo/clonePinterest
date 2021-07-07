import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles';

export const NavSup = () => {
  return (
    <View style={styles.navSuperior}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}> 
      <TouchableOpacity style={styles.bolinha}> 
        <Text style={styles.text}> Para você</Text>
      </TouchableOpacity>
      <View style={styles.bolinha2}> 
      <TouchableOpacity>
      <Text style={styles.text2}>Hoje</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.text2}>Design</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.text2}>Colagens</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.text2}>Futurismo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.text2}>Cyberpunk</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};