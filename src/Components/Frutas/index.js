import React from 'react';
import List from '../Hortalicas/list';
import custom from '../../custom/colors';
import { View, FlatList } from 'react-native';
import { frutas } from '../../services/server.js';

export default function Frutas() {
 return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor:  custom.fundo}}>
        <View style={{flex: 1, width: '100%',}}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: 15, backgroundColor: '#FFF'}}
                data={frutas.sort((a, b) => a.name.localeCompare(b.name))}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => 
                <List data={item}/>
            }
            />
        </View>
    </View>
  );
}