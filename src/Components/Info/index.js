import React from 'react';

import fonts from '../../custom/fonts';
import custom from '../../custom/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image, ScrollView, } from 'react-native';

export default function Info({ route }) {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <LinearGradient colors={['#FFF', '#000']} style={styles.container}>
                <Text style={styles.title}>{route.params?.data.name}</Text>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={{ uri: route.params?.data.photo }} />
                </View>
                <View style={styles.containerContent}>
                    <View>
                        <Text style={styles.textAbout}>{route.params?.data.about}</Text>

                        {route.params?.data.vaso ? (
                            <View>
                                <Text style={styles.subtitle}>Tipo de vaso</Text>
                                <Text style={styles.textAbout}>{route.params?.data.vaso}</Text>
                            </View>
                        ) : (
                            <View />
                        )
                        }

                        {route.params?.data.solo ? (
                            <View>
                                <Text style={styles.subtitle}>solo</Text>
                                <Text style={styles.textAbout}>{route.params?.data.solo}</Text>
                            </View>
                        ) : (
                            <View />
                        )
                        }

                        {route.params?.data.clima ? (
                            <View>
                                <Text style={styles.subtitle}>Clima</Text>
                                <Text style={styles.textAbout}>{route.params?.data.clima}</Text>
                            </View>
                        ) : (
                            <View />
                        )
                        }



                        {route.params?.data.plantar ? (
                            <View>
                                <Text style={styles.subtitle}>Como Plantar</Text>
                                <Text style={styles.textAbout}>{route.params?.data.plantar}</Text>
                            </View>
                        ) : (
                            <View>
                                <Text style={styles.subtitle}>{route.params?.data.caract ? (<Text>Caracteristicas</Text>) : (<View />)}</Text>
                                <Text style={styles.textAbout}>{route.params?.data.caract}</Text>
                            </View>
                        )
                        }

                    </View>
                    {/* Fazer um for */}
                    {route.params?.data.regiao1 ? (
                        <View style={{ width: '100%' }}>
                            <Text style={styles.textEpoca}>Melhor época para o plantio</Text>

                            <View style={styles.containerItens}>
                                <View style={{ flex: 1 }} >
                                    <Text style={styles.textRegiao}>{route.params?.data.regiao1}</Text>
                                    <Text style={styles.textName}>{route.params?.data.tempo1}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.textRegiao}>{route.params?.data.regiao2}</Text>
                                    <Text style={styles.textName}>{route.params?.data.tempo2}</Text>
                                </View>
                                <View >
                                    <Text style={styles.textRegiao}>{route.params?.data.regiao3}</Text>
                                    <Text style={styles.textName}>{route.params?.data.tempo3}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.textRegiao}>{route.params?.data.regiao4}</Text>
                                    <Text style={styles.textName}>{route.params?.data.tempo4}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.textRegiao}>{route.params?.data.regiao5}</Text>
                                    <Text style={styles.textName}>{route.params?.data.tempo5}</Text>
                                </View>
                            </View>

                            <Text><Text style={styles.x}>"X"</Text> Não é recomendado o plantio.</Text>

                        </View>

                    ) : (
                        <View />
                    )
                    }

                    {route.params.data.colheita ? (
                        <View style={styles.containerColheita}>
                            <Text style={styles.textColheita}>Colheita: </Text>
                            <Text style={styles.x}>{route.params.data.colheita}</Text>
                        </View>
                    ) : (
                        <View />
                    )}

                </View>
            </LinearGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#CAFFB3',
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: fonts.sizeTitle,
        fontFamily: fonts.subtitle
    },
    containerImage: {
        width: 350,
        height: 200,
        zIndex: 9999,
        elevation: 10,
        borderRadius: 10,
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    image: {
        height: 200,
        width: 350,
        resizeMode: 'contain',
    },
    containerContent: {
        top: -80,
        zIndex: 0,
        elevation: 9,
        width: '100%',
        height: '100%',
        minHeight: 500,
        paddingTop: 120,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: custom.bordaGreat,
        borderTopRightRadius: custom.bordaGreat,

    },
    containerItens: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    textRegiao: {
        fontSize: 13,
        paddingVertical: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        fontFamily: fonts.text,
        color: custom.textWhite,
        backgroundColor: custom.greenLight,
    },
    textName: {
        color: custom.text,
        textAlign: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        fontFamily: fonts.text,
        backgroundColor: '#FFF',
    },
    x: {
        fontFamily: fonts.subtitle,
        fontSize: fonts.sizeTextGeral,
    },
    textAbout: {
        marginBottom: 15,
        fontSize: fonts.sizeText,
        fontFamily: fonts.textGeral,
    },
    subtitle: {
        fontSize: fonts.sizeText,
        fontFamily: fonts.subtitle,
    },
    textEpoca: {
        color: custom.text,
        fontSize: fonts.sizeText,
        fontFamily: fonts.subtitle,
    },
    containerColheita: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textColheita: {
        color: 'red',
        fontSize: fonts.sizeText,
        fontFamily: fonts.subtitle,
    }
})