import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default function CadastroLogista() {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');




  //===========cadastro COM validação========================


  const handleSignClick = async () => {
    if (nome != '' && email != '' && senha != '' && cnpj != '' && celular != '' && cep != '' && rua != '' && numero != '' && cidade != '' && uf != '') {


      axios('http://localhost:8080/seller/create?categories=FOOD&cityZone=NORTH', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
            'city': cidade,
            'document': cnpj,
            'numberAddress': numero,
            'uf': uf
          }
        })
      })
        .then(function (response) {
          console.log(response);
          alert(response.data);
          navigation.reset({
            routes: [{ name: 'LoginLogista' }]
          });

        }).catch(error => {
          if (error.response) {
          alert(error.response.data);
          } else {
          alert(error);
          }
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
          placeholder="Nome completo"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={nome}
          autoCorrect={false}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.imput}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.imput}
          placeholder="Senha"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={senha}
          autoCorrect={false}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.imput}
          placeholder="CNPJ"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={cnpj}
          autoCorrect={false}
          onChangeText={setCnpj}
        />

        <TextInput
          style={styles.imput}
          placeholder="Celular"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          value={celular}
          autoCorrect={false}
          onChangeText={setCelular}
        />

        <TextInput
          style={styles.imput}
          placeholder="CEP"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          value={cep}
          autoCorrect={false}
          onChangeText={setCep}
        />

        <TextInput
          style={styles.imput}
          placeholder="Rua"
          placeholderTextColor="#999"
          keyboardType="email-address"
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
        
        <TextInput
          style={styles.imput}
          placeholder="Cidade"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={cidade}
          autoCorrect={false}
          onChangeText={setCidade}
        />

        <TextInput
          style={styles.imput}
          placeholder="UF"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={uf}
          autoCorrect={false}
          onChangeText={setUf}
        />

        <TouchableOpacity onPress={handleSignClick} style={styles.button}>
          <Text style={styles.buttontext}> Cadastrar</Text>
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


  NovaConta: {
    fontSize: 12,
    alignItems: 'center',
    color: '#999',

  }

});
