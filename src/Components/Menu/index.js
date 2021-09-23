import React from 'react';
import fonts from '../../custom/fonts';
import custom from '../../custom/colors'
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

export default function menu() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <LinearGradient 
        colors={['#0C986B', '#0f7353' ]} 
        start={{ x: 0, y: 0 }}
        end={{x: 0.5, y: 0 }}
        style={styles.container}>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.openDrawer()} activeOpacity={.5}>
            <Feather name='menu' size={30} color="#000" color="#FFF" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Inicio</Text>
        </View>
        
      </LinearGradient>
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    
    backgroundColor: custom.green,
    elevation: 15
  },
  containerButton:{
    paddingLeft: '5%',
    paddingRight: '10%'
  },
  text:{
    fontSize: 25,
    fontFamily: fonts.subtitle,
    color: custom.textWhite,
  }
})