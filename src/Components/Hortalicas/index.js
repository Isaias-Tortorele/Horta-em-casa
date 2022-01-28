import React from 'react';

import List from './list';
import custom from '../../custom/colors';
import { View, FlatList } from 'react-native';
import { plantas } from '../../services/server.js';

export default function Hortalicas() {
 return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: custom.fundo}}>
        <View style={{flex: 1, width: '100%',}}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingTop: 15, paddingBottom: 30, backgroundColor: '#FFF'}}
                data={plantas.sort((a, b) => a.name.localeCompare(b.name))}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => 
                <List data={item}/>
            }
            />
        </View>
    </View>
  );
}