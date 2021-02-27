
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import logo from '../assets/LogoPet.png';
import api from '../../mobile/services/api';

export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  async function handleSubmit() {
    const response = await api.post()
  }



  //=========Email senha sem validação====================
  const handleSignClick = async () => {
    navigation.reset({
      routes: [{ name: 'Tabs' }]

    })
  };
  //===========Email senha COM validação========================

  const hhandleSignClick = async () => {
    if (email != '' && senha != '') {

      let json = await Api.signIn(email, senha);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar
          }
        });

        navigation.reset({
          routes: [{ name: 'Tabs' }]
        });
      } else {
        alert('E-mail e/ou senha errados!');
      }

    } else {
      alert("Preencha os campos!");
    }
  }




  //===================Tela==============================



  return (

    <View style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>

        <TextInput
          style={styles.imput}
          placeholder="Seu Email"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.imput}
          placeholder="Sua senha"
          placeholderTextColor="#999"
          keyboardType="number"
          autoCapitalize="none"
          autoCorrect={false}
          value={senha}
          secureTextEntry={true}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={handleSignClick} style={styles.button}>
          <Text style={styles.buttontext}> Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.buttoncadastro}>
          <Text style={styles.buttontext}> Criar conta</Text>
        </TouchableOpacity>


        <StatusBar style="auto" />
      </View>
    </View>
  );
}














const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },


  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  button: {
    height: 42,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },

  buttoncadastro: {
    height: 42,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },

  buttontext: {
    color: 'white'

  },

  imput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginTop: 20,
    borderRadius: 8,
  },

});
