import React from 'react';
import { View, Text, Image } from 'react-native';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default function customDrawer({...props}) {
 return (
   <View>
       <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: '10%'}}>
            <Image
                source={require('../../assets/icon.png')}
                resizeMode='contain'
                style={{width: 100, height: 100}}
            />
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Bem-Vindo!</Text>
       </View>

        <DrawerItemList {...props}/>

        <View style={{borderWidth: 0.5, marginHorizontal: 15}}></View>
        
        <DrawerItem 
        label="Adubo (em breve)"
        icon={({ size, color}) => (
            <Ionicons
              name={'logo-buffer'}
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem 
        label="Vasos (em breve)"
        icon={({ size, color}) => (
            <MaterialCommunityIcons
              name={'cup-outline'}
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem 
        label="Vídeos (em breve)"
        icon={({ size, color}) => (
            <MaterialCommunityIcons
              name={'youtube-subscription'}
              color={color}
              size={size}
            />
          )}
        />
   </View>
  );
}