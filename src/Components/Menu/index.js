import React from 'react';
import fonts from '../../custom/fonts';
import custom from '../../custom/colors'
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

export default function menu({ title }) {
  const navigation = useNavigation();
  return (
    <View >
      <LinearGradient
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0 }}
        colors={['#0C986B', '#0f7353']}
      >

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.openDrawer()} activeOpacity={.5}>
            <Feather name='menu' size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    elevation: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: custom.green,
  },
  containerButton: {
    paddingLeft: '5%',
    paddingRight: '10%'
  },
  text: {
    fontSize: 20,
    color: custom.textWhite,
    fontFamily: fonts.subtitle,
  }
})