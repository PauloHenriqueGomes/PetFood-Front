import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,CheckBox, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cadastro() {

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

  const [regiao, setregiao] = useState(false);

  const regiao1 = useState(false);


  





  //===========cadastro COM validação========================


  const handleSignClick = async () => {
    if (nome != '' && email.includes('@') && senha != '' && cpf.length > 10 && celular.length > 10 && cep.length > 7 && rua != '' && numero != '' && cidade != '' && uf != '') {


      axios('http://192.168.1.6:8080/user/create?cityZone='+regiao, {
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
            'document': cpf,
            'numberAddress': numero,
            'uf': uf
          }
        })
      })
        .then(function (response) {
          /* console.log(response); */
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
      alert("Preencha os campos corretamente!");
    }
  }







  //=============TELA====================================



  return (
<ScrollView>
    <View style={styles.container}>
      

      <View style={styles.form}>

        <TextInput
          style={styles.imput}
          label="teste"
          placeholder="Nome completo"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="none"
          value={nome}
          autoCorrect={false}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.imput}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.imput}
          placeholder="Senha"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="none"
          value={senha}
          autoCorrect={false}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.imput}
          placeholder="CPF"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          value={cpf}
          autoCorrect={false}
          onChangeText={setCpf}
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
          keyboardType="default"
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
          keyboardType="default"
          autoCapitalize="none"
          value={cidade}
          autoCorrect={false}
          onChangeText={setCidade}
        />

        <TextInput
          style={styles.imput}
          placeholder="UF"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="none"
          value={uf}
          autoCorrect={false}
          onChangeText={setUf}
        />


<Text style={styles.Desc}>Sua região</Text>

<View style={styles.rows}>
  
 
    <CheckBox
        value={regiao} 
      onValueChange={() => setregiao('NORTH')}
      style={styles.checkbox}
      />
    <Text style={styles.Desc}>NORTE</Text>
     <CheckBox
      value={regiao} 
      onValueChange={() => setregiao('SOUTH')}
      style={styles.checkbox}
     />
    <Text style={styles.Desc}>SUL</Text>

    <CheckBox
      value={regiao} 
      onValueChange={() => setregiao('EAST')}
      style={styles.checkbox}
      />
      
    <Text style={styles.Desc}>LESTE</Text>

    </View>

    <View style={styles.rows}>
    
    <CheckBox
    value={regiao} 
      onValueChange={() => setregiao('WEST')}
      style={styles.checkbox}
       />
    <Text style={styles.Desc}>OESTE</Text>


    <CheckBox
    value={regiao} 
      onValueChange={() => setregiao('CENTER')}
      style={styles.checkbox}
      />
    <Text style={styles.Desc}>CENTRO</Text>
 
  
</View>


        

        <TouchableOpacity onPress={handleSignClick} style={styles.button}>
          <Text style={styles.buttontext}> Cadastrar</Text>
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
    marginBottom: 40,
  },

  buttontext: {
    color: 'white'
  },
  rows: {
    marginBottom: 15,
    flexDirection: "row",
 
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
  Desc: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
  },


  NovaConta: {
    fontSize: 12,
    alignItems: 'center',
    color: '#999',

  }

});
