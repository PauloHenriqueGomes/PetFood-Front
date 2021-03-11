import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../mobile/services/api';

export default function Cadastro() {

  //const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');


//===========cadastro SEM validação========================

const hhandleSignClick = async () => {
  navigation.reset({
    routes: [{ name: 'Tabs' }]

  })
};






 //===========cadastro COM validação========================


  const handleSignClick = async () => {
    if(nome != '' && email != '' && senha != ''&& celular != ''&& cep != ''&& rua != ''&& numero != '') {

      let api = axios.create({
        baseURL: 'http://192.168.1.17:8080'
        });

        
        let requestHeaders = {
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Methods, Accept, Content-Type'
        }
        }
        
        //api.get('/user/login?email=' + email + '&password=' + senha, [requestHeaders])
        

        api.post('user/create?cityZone=' +  nome + email + senha + celular + cep + rua + numero , [requestHeaders])
        
        
        
        
      .then(function (response) {
        console.log(response);
        alert(response.data);
        navigation.reset({
          routes: [{ name: 'Tabs' }]
        });

        }).catch(error => {
          alert('Erro cadastro');
        });
    } else {
        alert("Preencha os campos");
    }
}

const handleMessageButtonClick = () => {
    navigation.reset({
        routes: [{name: 'SignIn'}]
    });
}










//=============TELA====================================



  return (

    <View style={styles.container}>

      <View style={styles.form}>

        <TextInput
          style={styles.imput}
          placeholder="Nome completo"
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
          keyboardType="email-adress"
          autoCapitalize="none"
          value={numero}
          autoCorrect={false}
          onChangeText={setNumero}
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
