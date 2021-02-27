import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../../mobile/Pages/Login';
import Cadastro from '../../mobile/Pages/Cadastro';
import TelaInicio from '../../mobile/Pages/TelaInicio';
import Lojas from '../../mobile/Pages/Lojas';
import AlterarCadastro from '../../mobile/Pages/AlterarCadastro';
import Pedidos from '../../mobile/Pages/Pedidos';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function Tabs() {


  return (



    <Tab.Navigator activcolor='#d3d3d3'>

      <Tab.Screen name="Home"component={TelaInicio} 
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="home"color ={'#808080'} size={28}/>),
        }}
      />
      <Tab.Screen name="Busca" component={Lojas} 
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="search"color ={'#808080'} size={28}/>),
        }}
        />
      <Tab.Screen name="Pedidos" component={Pedidos} 
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="clipboard"color ={'#808080'} size={28}/>),
        }}
        />
      <Tab.Screen name="Perfil" component={AlterarCadastro} 
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="user"color ={'#808080'} size={28}/>),
        }}
        />
    </Tab.Navigator>

  );



}
