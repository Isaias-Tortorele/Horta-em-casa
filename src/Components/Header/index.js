import React from 'react';

import List from './list';
import fonts from '../../custom/fonts';
import custom from '../../custom/colors';
import { plantas } from '../../services/server.js';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';

export default function Header() {
    const navigation = useNavigation();

return (
    <ScrollView style={{height: '100%', backgroundColor:  custom.fundo}}>
        <View style={styles.container}>
            
            <Text style={styles.title}>HORTA EM CASA</Text>
            <View style={styles.containerButtons}>
                <View>
                    <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Hortaliças')} activeOpacity={.5}>
                        <Image source={require('../../assets/images/Hortaliças.jpg')} style={styles.imageButtons} />
                    </TouchableOpacity>
                    <Text style={styles.nameButtons}>Hortaliças</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Frutas')} activeOpacity={.5}>
                        <Image source={require('../../assets/images/Frutas.jpg')} style={styles.imageButtons} />
                    </TouchableOpacity>
                    <Text style={styles.nameButtons}>Frutas</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Legumes')} activeOpacity={.5}>
                        <Image source={require('../../assets/images/Legumes.jpg')} style={styles.imageButtons} />
                    </TouchableOpacity>
                    <Text style={styles.nameButtons}>Legumes</Text>
                </View>

            </View>

            
                <Text style={styles.subtitle}>Vamos plantar?</Text>
                <View style={styles.containerFlatlist}>
                    <View style={styles.viewFlatlist}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingHorizontal: 20}}
                            horizontal
                            data={plantas.sort((a, b) => a.name.localeCompare(b.id))}
                            keyExtractor={(item => String(item.id))}
                            renderItem={ ({item}) => ( 
                            <List data={item}/> 
                            )}
                            />
                    </View>
                </View>
            
            <View style={styles.containerAddButton}>
                <TouchableOpacity 
                    colors={['#0C986B', '#0f7353' ]} 
                    start={{ x: 0, y: 0 }}
                    end={{x: 0.5, y: 0 }}
                    style={styles.addButton} 
                    onPress={() => navigation.navigate( 'Cultivos')} activeOpacity={.5}
                >
                    <Text style={styles.textAddButton}>Meus cultivos</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 30,
        alignItems: 'center',
    },
    title:{
        fontSize: fonts.sizeTitle,
        fontFamily: fonts.subtitle,
    },
    containerButtons: {
        width: '90%',
        height: 120,
        padding: 10,
        marginBottom: '5%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        elevation: custom.elevation,
        justifyContent: 'space-around',
        borderRadius: custom.bordaLight, 
    },
    buttons:{
        marginBottom: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
    imageButtons:{
        width: 70, 
        height: 70, 
        borderRadius: 10 
    },
    nameButtons:{
        textAlign: 'center',
        fontFamily: fonts.subtitle,
        fontSize: fonts.sizeTextGeral,
    },
    subtitle:{
        marginBottom: 5,
        fontFamily: fonts.text,
        fontSize: fonts.sizeSubtitle,
    },
    containerFlatlist:{
        width: '90%',
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        elevation: custom.elevation,
        borderRadius: custom.bordaLight, 
    },
    viewFlatlist:{
        flex: 1, 
        alignItems: 'center'
    },
    containerAddButton:{
        alignItems: 'center',
        marginVertical: '10%',
    },
    addButton: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: custom.elevation,
        borderRadius: custom.bordaLight, 
        backgroundColor: custom.greenButton,
    },
    textAddButton: {
        letterSpacing: 1,
        fontWeight: 'bold',
        color: custom.textWhite,
        fontSize: fonts.sizeText18,
    }
})