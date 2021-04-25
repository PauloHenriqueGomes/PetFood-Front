import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


import Login from '../Pages/Login';
import LoginLogista from '../Pages/Login Logista';
import Cadastro from '../Pages/Cadastro';
import CadastroLogista from '../Pages/CadastroLogista';
import Carrinho from '../Pages/Carrinho';
import Home from '../Pages/Home';
import Busca from '../Pages/Busca';
import Tabs from '../Stacks/Tabs';
import TabsLogista from '../Stacks/TabsLogista';


const Stack = createStackNavigator();


export default function Stacks() {

  return (


    //= voltar a tela inicio pra dentro do Tabs


    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
      <Stack.Screen options={{ headerShown: false }} name="LoginLogista" component={LoginLogista}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Cadastro Lojista" component={CadastroLogista} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs}/>
      <Stack.Screen options={{ headerShown: false }} name="TabsLogista" component={TabsLogista}
      />

    </Stack.Navigator>

  );

}