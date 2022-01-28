import React from "react";

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

import custom from '../custom/colors';
import customDrawer from './customDrawer';

import Home from '../Pages/Home';
import Vasos from '../Pages/Vasos';
import Adubos from '../Pages/Adubos';
import Frutas from '../Pages/Frutas';
import Info from '../Components/Info';
import Legumes from '../Pages/Legumes';
import Cultivos from '../Pages/Cultivos';
import Hortalicas from '../Pages/Hortalicas';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen name='Inicio' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Cultivos' component={Cultivos} options={{
        title: 'Cultivos',
        headerStyle: {
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }} />
      <Stack.Screen name='Hortaliças' component={Hortalicas} options={{
        title: 'Hortaliças',
        headerStyle: {
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }} />
      <Stack.Screen name='Frutas' component={Frutas} options={{
        title: 'Frutas',
        headerStyle: {
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }} />
      <Stack.Screen name='Legumes' component={Legumes} options={{
        title: 'Legumes',
        headerStyle: {
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }} />
      <Stack.Screen name='Info' component={Info} options={{
        title: 'Informações',
        headerStyle: {
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }} />
      <Stack.Screen name='Adubos' component={Adubos} options={{
        title: 'Tipos de adubos',
        headerStyle: {
          backgroundColor: custom.green
        },
        headerTintColor: '#FFF',
      }} />
    </Stack.Navigator>
  );
};





function NavigationVasos() {
  return (
    <Stack.Navigator
      initialRouteName={'Inicio'}
    >
      <Stack.Screen
        name='Vasos'
        component={Vasos}
        options={{
          headerShown: false,
          title: 'Vasos',
          headerStyle: {
            backgroundColor: custom.green
          },
          headerTintColor: '#FFF',
        }}
      />
    </Stack.Navigator>
  );
};


function AppRoutes() {
  return (
    // {/* É aqui que combinamos o Stack Navigator com o Drawer Navigator */}
    <Drawer.Navigator
      initialRouteName='Inicio'
      drawerContent={customDrawer}
      drawerContentOptions={{
        activeBackgroundColor: '#2AC17E70',
        activeTintColor: '#004400',
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          borderColor: '#bbb',
          borderBottomWidth: 1,
        }
      }}
    >

      <Drawer.Screen name='Inicio' component={NavigationStack}
        options={{
          title: 'Início',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />

      <Drawer.Screen
        name='Vasos'
        component={NavigationVasos}
        options={{
          title: 'Vasos',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'archive' : 'archive-outline'}
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