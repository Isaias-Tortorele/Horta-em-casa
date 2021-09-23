import React from 'react';

import fonts from '../../custom/fonts';
import custom from '../../custom/colors'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function List({data}) {
  const navigation = useNavigation();

  function selecionar(){
    navigation.navigate('Info', {data: data})
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.containerContent} onPress={() => selecionar(data)} activeOpacity={.5}>
            <Image 
                source={{uri: data.photo}} 
                style={{width: 60, height: 60, resizeMode: 'contain'}} 
            />
            <Text style={styles.name}>{data.name}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginBottom: 7,
    marginHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: custom.bordaLight,
    elevation: custom.elevation
  },
  containerContent:{
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  name:{
    fontSize: fonts.sizeBtn,
    fontFamily: fonts.title,
    color: custom.titleGreen,
    marginLeft: 10,
  }

})