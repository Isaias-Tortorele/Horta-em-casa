import React from "react";

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator} from "@react-navigation/drawer";

import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Frutas from '../Pages/Frutas';
import Info from '../Components/Info';
import custom from '../custom/colors';
import Legumes from '../Pages/Legumes';
import Cultivos from '../Pages/Cultivos';
import customDrawer from './customDrawer';
import Hortalicas from '../Pages/Hortalicas';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function NavigationStack(){
  return (
    <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen name='Inicio' component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='Cultivos' component={Cultivos}  options={{
        title: 'Cultivos',
        headerStyle:{
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }}/>
      <Stack.Screen name='Hortaliças' component={Hortalicas} options={{
        title: 'Hortaliças',
        headerStyle:{
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }}/>
      <Stack.Screen name='Frutas' component={Frutas} options={{
        title: 'Frutas',
        headerStyle:{
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }}/>
      <Stack.Screen name='Legumes' component={Legumes} options={{
        title: 'Legumes',
        headerStyle:{
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }}/>
      <Stack.Screen name='Info' component={Info} options={{
        title: 'Informações',
        headerStyle:{
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }}/>
      <Stack.Screen name='Sobre' component={Sobre} />


    </Stack.Navigator>
  );
};

function NavigationCultivos(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='Cultivos' component={Cultivos}
      options={{
        title: 'Cultivos',
        headerStyle:{
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }}
      />
    </Stack.Navigator>
  );
};

function NavigationSobre(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='Sobre' component={Sobre}
      options={{
        title: 'Faça uma doação',
        headerStyle:{
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }}
       />
    </Stack.Navigator>
    
  );
};

function AppRoutes(){
    return (
      // {/* É aqui que combinamos o Stack Navigator com o Drawer Navigator */}
    <Drawer.Navigator 
    initialRouteName='Inicio' 
    drawerContent={customDrawer}
    drawerContentOptions={{
      activeBackgroundColor: '#2AC17E70',
      activeTintColor: '#004400',
      labelStyle:{
        fontSize: 16,
        fontWeight: "bold",
      }   
    }}
    >
      <Drawer.Screen name='Inicio' component={NavigationStack}
        options={{
          title: 'Início',
        drawerIcon: ({ focused, size, color}) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            color={color}
            size={size}
          />
        )
        }}
      />  
      
      <Drawer.Screen name='Cultivos' component={NavigationCultivos}
      options={{
        title: 'Seus Cultivos',
        drawerIcon: ({ focused, size, color}) => (
          <Ionicons
            name={focused ? 'list-circle' : 'list-circle-outline'}
            color={color}
            size={size}
          />
        )
      }}
      />
      
      <Drawer.Screen 
      name='Sobre' 
      component={NavigationSobre}
      options={{
        title: 'Contato',
        drawerIcon: ({ focused, size, color}) => (
          <Ionicons
            name={focused ? 'people-circle' : 'people-circle-outline'}
            color={color}
            size={size}
          />
        )
      }}
      />
    </Drawer.Navigator>
  );
};

export default AppRoutes;