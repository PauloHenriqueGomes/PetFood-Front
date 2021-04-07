import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView,KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AlterarCadastro({route}) {

  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  React.useEffect(() => {
    if (route.params?.userEmail) {
      console.log("AlterarCadastro userEmail: " + route.params?.userEmail);

      let api = axios.create({
        baseURL: 'http://192.168.1.19:8080'
      });
    
      let requestHeaders = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Methods, Accept, Content-Type'
        }
      }
    
      api.get('/user/find/email?email=' + route.params?.userEmail, [requestHeaders])
      .then(function (response) {
        setNome(response.data.name);
        setEmail(response.data.email);
        setCpf(response.data.registrationInfos.document);
        setCelular(response.data.registrationInfos.cellPhone);
        setCep(response.data.registrationInfos.cep);
        setRua(response.data.registrationInfos.address);
        setNumero(response.data.registrationInfos.numberAddress.toString());
        setCidade(response.data.registrationInfos.city);
        setUf(response.data.registrationInfos.uf);
      }).catch(error => {
        if (error.response) {
          alert(error.response.data);
          } else {
          alert(error);
          }
      });
    }
  }, [route.params?.userEmail]);




  //===========ALTERAR CADASTRO========================


  const handleSignClick = async () => {
    if (nome != '' && email != '' && senha != '' && cpf != '' && celular != '' && cep != '' && rua != '' && numero != '' && cidade != '' && uf != '') {


      axios('http://192.168.1.19:8080/user/update?cityZone=EAST&document='+cpf, {
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
          'address': rua,
          'cellPhone': celular,
          'cep': cep,
          'city': cidade,
          'numberAddress': numero,
          'uf': uf
        })
      }).then(function (response) {
        console.log(response);
          alert(response.data);
          navigation.reset({
            routes: [{ name: 'Login' }]
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

  //=========================EXCLUIR======================================


  const excluir = async () => {
    if (nome != '') {


      axios('http://192.168.1.19:8080/user/delete?name='+nome, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Methods, Accept, Content-Type'
        }
      })
        .then(function (response) {
          console.log(response);
          alert(response.data);
          navigation.reset({
            routes: [{ name: 'Login' }]
          });

        }).catch(error => {
          if (error.response) {
            alert(error.response.data);
          } else {
            alert(error);
          }
        });
    } else {
      alert("Preencha o nome!");
    }
  }







  //=============TELA====================================



  return (

    
<ScrollView>
    <View style={styles.container}>


      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={nome}
          autoCorrect={false}
          onChangeText={setNome}
          label="Nome Completo"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
          onChangeText={setEmail}
          label="Email"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={senha}
          autoCorrect={false}
          onChangeText={setSenha}
          label="Senha"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="Celular"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          value={celular}
          autoCorrect={false}
          onChangeText={setCelular}
          label="Celular"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          value={cep}
          autoCorrect={false}
          onChangeText={setCep}
          label="CEP"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="Rua"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={rua}
          autoCorrect={false}
          onChangeText={setRua}
          label="Rua"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="Numero"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          value={numero}
          autoCorrect={false}
          onChangeText={setNumero}
          label="Numero"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={cidade}
          autoCorrect={false}
          onChangeText={setCidade}
          label="Cidade"
          selectionColor="black"
          underlineColor="black"
        />

        <TextInput
          style={styles.input}
          placeholder="UF"
          placeholderTextColor="#999"
          keyboardType="email-adress"
          autoCapitalize="none"
          value={uf}
          autoCorrect={false}
          onChangeText={setUf}
          label="UF"
          selectionColor="black"
          underlineColor="black"
        />

        <TouchableOpacity onPress={handleSignClick} style={styles.button}>
          <Text style={styles.buttontext}> Alterar Cadastro</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.buttonsair}>
          <Text style={styles.buttontext}> Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={excluir} style={styles.buttonsair}>
          <Text style={styles.buttontext}> Excluir conta</Text>
        </TouchableOpacity>



        <StatusBar style="auto" />
      </View>
      
    </View>
    </ScrollView>
    
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
    marginBottom: 20,
  },

  buttonsair: {
    height: 42,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 20,
  },

  buttontext: {
    color: 'white'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 30,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginTop: 30,
    borderRadius: 8
  },


  NovaConta: {
    fontSize: 12,
    alignItems: 'center',
    color: '#999',

  }

});
