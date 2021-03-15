import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../mobile/services/api';

export default function AlterarCadastro() {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');




  //===========ALTERAR CADASTRO========================


  const handleSignClick = async () => {
    if (nome != '' && email != '' && senha != '' && celular != '' && cep != '' && rua != '' && numero != '') {


      axios('http://192.168.1.17:8080/user/update?cityZone=EAST&name='+nome, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Methods, Accept, Content-Type'
        },
        data: JSON.stringify({
          'birthdayDate': '2021-03-04T20:27:36.486Z',
          'email': email,
          'name': nome,
          'password': senha,
          'registrationInfos': {
            'address': rua,
            'cellPhone': celular,
            'cep': cep,
            'city': 'Sp',
            'document': '3',
            'numberAddress': numero,
            'uf': 'SP'
          }
        })
      })
        .then(function (response) {
          console.log(response);
          alert(response.data);
          navigation.reset({
            routes: [{ name: 'Login' }]
          });

        }).catch(error => {
          alert('Alguma informação errada');
        });
    } else {
      alert("Preencha os campos!");
    }
  }

  //=========================EXCLUIR======================================


  const excluir = async () => {
    if (nome != '' && email != '' && senha != '' && celular != '' && cep != '' && rua != '' && numero != '') {


      axios('http://192.168.1.17:8080/user/delete?name='+nome, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Methods, Accept, Content-Type'
        },
        data: JSON.stringify({
          'birthdayDate': '2021-03-04T20:27:36.486Z',
          'email': email,
          'name': nome,
          'password': senha,
          'registrationInfos': {
            'address': rua,
            'cellPhone': celular,
            'cep': cep,
            'city': 'Sp',
            'document': '3',
            'numberAddress': numero,
            'uf': 'SP'
          }
        })
      })
        .then(function (response) {
          console.log(response);
          alert(response.data);
          navigation.reset({
            routes: [{ name: 'Login' }]
          });

        }).catch(error => {
          alert('Alguma informação errada');
        });
    } else {
      alert("Preencha os campos!");
    }
  }







  //=============TELA====================================



  return (

    <View style={styles.container}>

      <View style={styles.form}>

        <TextInput
          style={styles.imput}
          placeholder={nome}
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={nome}
          autoCorrect={false}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.imput}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.imput}
          placeholder="Senha"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={senha}
          autoCorrect={false}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.imput}
          placeholder="Celular"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={celular}
          autoCorrect={false}
          onChangeText={setCelular}
        />

        <TextInput
          style={styles.imput}
          placeholder="CEP"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={cep}
          autoCorrect={false}
          onChangeText={setCep}
        />

        <TextInput
          style={styles.imput}
          placeholder="Rua"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={rua}
          autoCorrect={false}
          onChangeText={setRua}
        />

        <TextInput
          style={styles.imput}
          placeholder="Numero"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          value={numero}
          autoCorrect={false}
          onChangeText={setNumero}
        />

        <TouchableOpacity onPress={handleSignClick} style={styles.button}>
          <Text style={styles.buttontext}> Alterar Cadastro</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.buttonsair}>
          <Text style={styles.buttontext}> Sair</Text>
        </TouchableOpacity>

          <Text onPress={excluir} style={styles.excluir}> Excluir conta</Text>
        



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

  buttonsair: {
    height: 42,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 40,
  },

  buttontext: {
    color: 'white'
  },

  excluir: {
    color: 'black'
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


  NovaConta: {
    fontSize: 12,
    alignItems: 'center',
    color: '#999',

  }

});
