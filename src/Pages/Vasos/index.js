import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import colors from '../../custom/colors';

import fonts from '../../custom/fonts';
import Menu from '../../Components/Menu';

export default function Vasos() {
  return (
    <>
      <Menu title="Vasos" />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <View>
            <Text style={styles.title}>3 dicas de como plantar árvores frutíferas no vaso</Text>
            <Text style={styles.textAbout}>
              Ter acesso a frutas saudáveis e sem a contaminação por agrotóxicos pode ser muito mais fácil através das dicas certas.
            </Text>

            <Image
              style={styles.image}
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplicativo-horta.appspot.com/o/images%2FFer-Organico.jpg?alt=media&token=31a0fff2-78f8-409b-b6b7-b08ef5c4be14' }}
            />
          </View>

          <View>
            <Text style={styles.title}>Selecione as espécies corretas</Text>

            <Text style={styles.textAbout}>
              Nem todas às árvores frutíferas podem ser cultivadas em vasos. Por isso, é muito importante separar as espécies corretas.
            </Text>
            <Text style={styles.textAbout}>
              Se você pretende plantar árvores frutíferas no vaso, poderá optar entre árvores de Romã, Amora, Manga, Acerola, Caju, Goiaba, araçá, Jabuticaba, Laranja, Lichia, Bergamota, Limão, Maçã, Pitanga, por exemplo.
            </Text>
          </View>


          <View>
            <Text style={styles.title}>Atenção ao tamanho do vaso e preparação da terra</Text>
            <Text style={styles.textAbout}>
              Cada árvore frutífera demanda um vaso de, no mínimo, 20 litros de terra. É necessário que haja espaço suficiente para as raízes da planta se expandirem.
            </Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplicativo-horta.appspot.com/o/images%2Fvasos.jpg?alt=media&token=ace22e33-24ef-4b93-8381-5b0bc45c0521' }}
            />
            <Text style={styles.textAbout}>
              Depois disso, reserve no fundo do vaso (até uns 15cm da altura) uma camada de drenagem com pedriscos e cacos de telha ou tijolos, por exemplo. Depois disso, realize uma mistura de 50% de terra orgânica e 50% de areia média.
            </Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplicativo-horta.appspot.com/o/images%2FFertilizante.jpg?alt=media&token=b4a9c918-101a-421c-bb16-e818d0f18ae4' }}
            />
          </View>

          <View style={{marginBottom: '10%'}}>
            <Text style={styles.title}>Uso de fertilizantes</Text>
            <Text style={styles.textAbout}>
              Assim como os seres humanos, as plantas necessitam de diversos nutrientes para se manterem vivas e saudáveis. 
              O uso do fertilizante natural não agride o meio-ambiente e não prejudica a saúde dos seres humanos.
            </Text>
            <Text style={styles.textAbout}> 
              O uso do fertilizante natural não agride o meio-ambiente e não prejudica a saúde dos seres humanos.
            </Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplicativo-horta.appspot.com/o/images%2FFer-Organico.jpg?alt=media&token=31a0fff2-78f8-409b-b6b7-b08ef5c4be14' }}
            />
          </View>

        </ScrollView >
      </View>
    </>

  )
}


const styles = StyleSheet.create({
  container: {
    marginBottom: '15%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: colors.fundo
  },
  title: {
    textAlign: 'center',
    marginVertical: '5%',
    fontSize: fonts.sizeTitle,
    fontFamily: fonts.subtitle
  },
  image: {
    height: 149,
    width: '100%',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  textAbout: {
    marginBottom: 10,
    textAlign: 'justify',
    fontSize: fonts.sizeText18,
    fontFamily: fonts.textGeral,
  },
  subtitle: {
    fontSize: fonts.sizeText,
    fontFamily: fonts.subtitle,
  },
})
