import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

const handleSignClick = async () => {
  navigation.reset({
    routes: [{ name: 'Tabs' }]

  })
};






 //===========cadastro COM validação========================


  const hhandleSignClick = async () => {
    if(nome != '' && email != '' && senha != ''&& celular != ''&& cep != ''&& rua != ''&& numero != '') {
        let res = await api.signUp(nome, email, senha, celular, cep, rua, numero);
        
        if(res.token) {
            await AsyncStorage.setItem('token', res.token);

            userDispatch({
                type: 'setAvatar',
                payload:{
                    avatar: res.data.avatar
                }
            });

            navigation.reset({
                routes:[{name:'Tabs'}]
            });

        } else {
            alert("Erro: "+res.error);
        }
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
        />

        <TextInput
          style={styles.imput}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
        />

        <TextInput
          style={styles.imput}
          placeholder="Senha"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={senha}
          autoCorrect={false}
        />

        <TextInput
          style={styles.imput}
          placeholder="Celular"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={celular}
          autoCorrect={false}
        />

        <TextInput
          style={styles.imput}
          placeholder="CEP"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={cep}
          autoCorrect={false}
        />

        <TextInput
          style={styles.imput}
          placeholder="Rua"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={rua}
          autoCorrect={false}
        />

        <TextInput
          style={styles.imput}
          placeholder="Numero"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={numero}
          autoCorrect={false}
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
