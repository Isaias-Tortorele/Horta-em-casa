import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default function customDrawer({ ...props }) {
  return (
    <>
      <View style={{}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '10%' }}>
          <Image
            source={require('../../assets/icon.png')}
            style={{ width: 100, height: 100 }}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bem-Vindo!</Text>
        </View>

        <DrawerItemList {...props} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View style={{borderBottomColor: '#bbb', borderTopWidth: 1}}/>
        <DrawerItem
          label="Avaliação Play Store"
          icon={({ size, color }) => (
            <Ionicons
              name={'logo-google-playstore'}
              color={color}
              size={size}
            />
          )}
          onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.isaiasTortorele.Hortaemcasa')}
        />
      </View>
    </>
  );
}