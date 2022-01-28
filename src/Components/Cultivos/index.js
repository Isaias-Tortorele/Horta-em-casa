console.disableYellowBox = true
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, ActivityIndicator, Alert, Image } from 'react-native';

import { format } from 'date-fns';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import List from './list';
import fonts from '../../custom/fonts';
import custom from '../../custom/colors'

export default function Cultivos() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [dataPlantio, setDataPlantio] = useState(format(new Date(), 'dd/MM/yyyy'));

    useEffect(() => {
        async function loadList() {
            await retornandoDados()
            loadingActivityIndicator()

        }
        loadList()
    }, [])

    async function salvandoDados(novoItens) {
        const stringfiedTodos = JSON.stringify(novoItens);
        await AsyncStorage.setItem('@todos', stringfiedTodos);
    }

    async function retornandoDados() {
        const itens = await AsyncStorage.getItem('@todos');
        try {
            if (itens) {
                const todosLink = JSON.parse(itens);
                setData(todosLink);
                return;
            }
        } catch (error) {
            console.log(error)
        }
    };

    //Adicionado a lista
    async function handleAdd(nome, dataP) {
        if (value !== '' && dataPlantio !== '') {
            const novoItens = await [
                {
                    nome: nome,
                    dataP: dataP,
                    horas: format(new Date(), 'HH:mm'),
                    key: Math.random().toString()
                }, ...data
            ];

            setData(novoItens);
            salvandoDados(novoItens);

            setValue('');
            setDataPlantio(format(new Date(), 'dd/MM/yyyy'));
            setModalVisible(!modalVisible)
        } else {
            Alert.alert('Cuidado 😄',
                'Seu cultivo precisa ter nome e data.')
        }
    }

    // Removendo da lista
    async function deleteItem(key) {
        await setData((prevTodo) => {
            const novoItens = prevTodo.filter((todo) => todo.key !== key);

            salvandoDados(novoItens);

            return novoItens;
        })
    }

    function alertDelete(key) {
        Alert.alert('Atenção!',
            `Você deseja excluir?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    onPress: () => deleteItem(key)
                }
            ]
        )
    }

    function loadingActivityIndicator() {
        setTimeout(
            () => setLoading(false), 2000
        )
    }

    function goBack() {
        navigation.navigate('Inicio')
    }

    return (

        <View style={styles.container} >
            <View style={styles.containerFlatlist} >
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Meus Cultivos</Text>
                </View>

                {!loading && data.length === 0 && (
                    <View style={styles.containerEmpty}>
                        <Image
                            style={styles.containerImage}
                            resizeMode="contain"
                            source={require('../../assets/images/empty.jpg')}
                        />
                        <Text style={styles.textEmpty}>Você ainda não tem cultivos!</Text>
                        <Text>Adicione ⬇</Text>
                    </View>
                )
                }

                {loading ? (
                    <ActivityIndicator size={50} color="#00ff00" style={{ top: '35%' }} />
                ) : (

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 150, paddingTop: 10 }}
                        data={data}
                        keyExtractor={item => String(item.key)}
                        renderItem={({ item }) => (
                            <List data={item} alertDelete={alertDelete} />
                        )}
                    />
                )
                }
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)} activeOpacity={.5} >
                    <Feather name="plus-circle" size={40} color="#FFF" />
                </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={styles.goBack} onPress={() => goBack()}>
                <Ionicons name="arrow-undo-circle" size={30} color="#000" />
            </TouchableOpacity> */}

            <Modal transparent animationType="fade" visible={modalVisible} >
                <View style={styles.containerModal} >
                    <View style={styles.containerContent}>
                        <Text style={styles.title}>Seu cultivo</Text>
                        <Text>Informe um nome e data de plantio 😄</Text>
                        <View style={{ marginVertical: 20 }}>
                            <View style={styles.containerInputs}>
                                <TextInput
                                    placeholder='Nome...'
                                    value={value}
                                    onChangeText={(text) => setValue(text)}
                                    autoFocus={true}
                                    maxLength={50}
                                    placeholderTextColor='#808080'
                                />
                            </View>
                            <View style={styles.containerInputs}>
                                <TextInputMask
                                    placeholder='Data de plantio: Ex: 26/02/2021'
                                    placeholderTextColor='#808080'
                                    type={'datetime'}
                                    options={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                    value={dataPlantio}
                                    onChangeText={(text) => setDataPlantio(text)}
                                />
                            </View>
                        </View>

                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                style={styles.buttonClose}
                                title="Sair"
                                onPress={() => setModalVisible(!modalVisible)}
                                activeOpacity={.5} >
                                <Text style={styles.cancel}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonAdd}
                                onPress={() => handleAdd(value, dataPlantio,)}
                                activeOpacity={.5}>
                                <Text style={styles.add}>Adicionar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: custom.fundo
    },
    containerFlatlist: {
        flex: 1,
        width: '100%',
    },
    containerTitle: {
        borderBottomWidth: 2,
        marginHorizontal: 30,
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: fonts.sizeTitle,
        fontFamily: fonts.subtitle
    },
    containerEmpty: {
        marginHorizontal: 30,
        marginTop: '20%',
        alignItems: 'center',
    },
    containerImage: {
        maxWidth: 150,
        maxHeight: 150,
        marginBottom: '10%',
    },
    textEmpty: {
        fontSize: 22,
    },
    button: {
        width: 80,
        bottom: 30,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: custom.greenLight,
    },
    goBack: {
        bottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: fonts.sizeTitle,
        fontFamily: fonts.subtitle
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000099',

    },
    containerContent: {
        marginHorizontal: '3%',
        paddingVertical: '10%',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: custom.elevation
    },
    containerInputs: {
        width: 320,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: custom.elevation
    },
    containerButton: {
        flexDirection: 'row',
    },
    buttonClose: {
        minWidth: 150,
        maxWidth: 120,
        height: 50,
        justifyContent: 'center',
        marginRight: '3%',
        alignItems: 'center',
        backgroundColor: '#E1342B',
        borderRadius: custom.bordaLight,
        elevation: custom.elevation
    },
    cancel: {
        color: '#FFF',
        fontFamily: fonts.text,
        fontWeight: 'bold'
    },
    buttonAdd: {
        minWidth: 150,
        maxWidth: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: custom.greenLight,
        borderRadius: custom.bordaLight,
        elevation: custom.elevation
    },
    add: {
        color: '#FFF',
        fontFamily: fonts.text,
        fontWeight: 'bold'
    },
})