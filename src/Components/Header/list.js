import React from 'react';

import fonts from '../../custom/fonts';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function List({data}) {
  const navigation = useNavigation();

  function selecionar(){
    navigation.navigate('Info', {data: data})
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => selecionar(data)} activeOpacity={.5}>
            <Image 
                source={{uri: data.photo}} 
                style={styles.image} 
            />
        </TouchableOpacity>
        <Text style={styles.textName}>{data.name}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
    container:{
        marginRight: 5,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textName:{
        textAlign: 'center',
        fontFamily: fonts.subtitle,
        fontSize: fonts.sizeTextGeral,
    },
    image:{
        width: 100,
        height: 100, 
        resizeMode: 'contain'
    }
})