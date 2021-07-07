import React from 'react';
import { View} from 'react-native';
import Menu from '../../Components/Menu'
import Header from '../../Components/Header';

function Home() {
 return (
   <View style={{backgroundColor: "#FFF"}}>
      <Menu/>
      <Header />
   </View>
  );
}

export default Home;