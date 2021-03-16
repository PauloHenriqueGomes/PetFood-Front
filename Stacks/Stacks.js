import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


import Login from '../../mobile/Pages/Login';
import LoginLogista from '../../mobile/Pages/Login Logista';
import Cadastro from '../../mobile/Pages/Cadastro';
import Home from '../../mobile/Pages/Home';
import Busca from '../Pages/Busca';
import Tabs from '../../mobile/Stacks/Tabs';
import TabsLogista from '../../mobile/Stacks/TabsLogista';
import CadastroLogista from '../Pages/CadastroLogista';

const Stack = createStackNavigator();


export default function Stacks() {

  return (


    //= voltar a tela inicio pra dentro do Tabs


    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
      <Stack.Screen options={{ headerShown: false }} name="LoginLogista" component={LoginLogista}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Cadastro Logista" component={CadastroLogista} />
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs}/>
      <Stack.Screen options={{ headerShown: false }} name="TabsLogista" component={TabsLogista}
      />

    </Stack.Navigator>

  );

}