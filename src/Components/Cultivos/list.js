import React from 'react';
import fonts from '../../custom/fonts';
import custom from '../../custom/colors'
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function List({ data, alertDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.name} numberOfLines={1}>{data.nome}</Text>
        <Text style={styles.data} >Data de Plantio: <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>{data.dataP}</Text></Text>
      </View>

      <View style={styles.containerDelete}>
        <TouchableOpacity onPress={() => alertDelete(data.key)} activeOpacity={.5}>
          <Feather name='trash-2' size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: custom.bordaLight,
    elevation: custom.elevation
  },
  containerName: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  name: {
    fontSize: fonts.sizeBtn,
    fontWeight: 'bold',
    color: custom.titleGreen,
    maxWidth: 270
  },
  data: {
    fontSize: fonts.sizeText,
    color: custom.text,
  },
  containerDelete: {
    paddingHorizontal: 30
  }

})