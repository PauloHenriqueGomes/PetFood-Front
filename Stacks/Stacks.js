import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


import Login from '../../mobile/Pages/Login';
import Cadastro from '../../mobile/Pages/Cadastro';
import TelaInicio from '../../mobile/Pages/TelaInicio';
import Lojas from '../../mobile/Pages/Lojas';
import Tabs from '../../mobile/Stacks/Tabs';

const Stack = createStackNavigator();


export default function Stacks() {

  return (


    //= voltar a tela inicio pra dentro do Tabs


    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs}
      />

    </Stack.Navigator>

  );

}