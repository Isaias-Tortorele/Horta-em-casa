import React from 'react';

import ClipBoard from 'expo-clipboard';
import fonts from '../../custom/fonts';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Sobre(){
  function copyLink(){
    ClipBoard.setString('hortaemcasa@gmail.com');
  }

 return (
    <View style={styles.container}>
      <Text style={styles.title}>HORTA EM CASA</Text>
      <Text style={styles.text}>
        Ficamos muito feliz por você usar nosso aplicativo, se puder ajudar com uma boa avaliação na PlayStore e compartilhar com seus amigos, Ficariamos muitos feliz!
      </Text>
      <Text style={styles.frases}>
        "A vida é igual uma 
        plantação, quando você 
        escolhe a semente certa e o 
        tempo certo pra plantar. A 
        colheita será muito melhor".
      </Text>
      <View style={styles.linha}></View>
      <Text style={styles.doacao}>Entre em contato</Text>
      <View style={styles.containerPix}>
        <Text style={styles.pix}>hortaemcasa21@gmail.com</Text>
        <TouchableOpacity onPress={copyLink}>
          <Ionicons name='copy' size={30} color='#FFF'/>
        </TouchableOpacity>
      </View>
      <Text>Tortorele Tech</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    paddingVertical: '10%',
    paddingHorizontal: '5%'
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fonts.sizeTitle,
    marginBottom: 10
  },
  text:{
    textAlign: 'center',
    fontSize: fonts.sizeText18,
    marginBottom: 10
  },
  frases:{
    fontSize: fonts.sizeText,
    color: '#00000060',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10
  },
  linha:{
    borderWidth: 1,
    width: '100%',
    marginBottom: 50
  },
  doacao: {
    textAlign: 'center',
    fontSize: fonts.sizeBtn,
    marginBottom: 7
  },
  containerPix:{
    width: '100%',
    height: 55,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    backgroundColor: '#2AC17E',
    elevation: 7,
    marginBottom: 10
  },
  pix:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  }
})


