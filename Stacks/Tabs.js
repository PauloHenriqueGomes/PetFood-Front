import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import axios from 'axios';
import Login from '../../mobile/PetFood-Front/Pages/Login';
import Cadastro from '../../mobile/PetFood-Front/Pages/Cadastro'; */
import Home from '../Pages/Home';
import Busca from '../Pages/Busca';
import AlterarCadastro from '../Pages/AlterarCadastro';
import Pedidos from '../Pages/Pedidos';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function Tabs({route}) {
  return (
    <Tab.Navigator activcolor='#d3d3d3'>

      <Tab.Screen name="Home"component={Home} 
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="home"color ={'#808080'} size={28}/>),
        }}
      />
      <Tab.Screen name="Busca" component={Busca} initialParams={{userEmail: route.params?.email}}
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="search"color ={'#808080'} size={28}/>),
        }}
        />
      <Tab.Screen name="Pedidos" component={Pedidos} initialParams={{userEmail: route.params?.email}}
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="clipboard"color ={'#808080'} size={28}/>),
        }}
        />
      <Tab.Screen name="Perfil" component={AlterarCadastro} initialParams={{userEmail: route.params?.email}}
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="user"color ={'#808080'} size={28}/>),
        }}
        />

    </Tab.Navigator>
  );



}
