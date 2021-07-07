import React from 'react';
import { View} from 'react-native';
import MeusCultivos from '../../Components/Cultivos';

export default function Cultivos() {
 return (
   <View style={{backgroundColor: "#FFF", flex: 1}}>
      <MeusCultivos />
   </View>
  );
}