import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, CheckBox, state, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
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
  const [logo, setlogo] = useState('');
  const [SInic, setSInic] = useState('');
  const [SFim, setSFim] = useState('');
  const [FInic, setFInic] = useState('');
  const [FFim, setFFim] = useState('');

  const [categoria, setcategoria] = useState(false);
  const [regiao, setregiao] = useState(false);

  

  //===========cadastro COM validação========================


  const handleSignClick = async () => {
    if (nome != '' && email.includes('@') && senha != '' && cnpj.length > 13 && celular.length > 10 && cep.length > 7 && rua != '' && numero != '' && cidade != '' && uf != '' && logo != '' && SInic != '' && SFim != '' && FInic != '' && FFim != '') {


      axios('http://192.168.1.6:8080/seller/create?categories=' + categoria + '&cityZone='+regiao, {
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
          'imageUrl': logo,
          'category': categoria,
          'cityZone': regiao,
          'registrationInfos': {
            'address': rua,
            'cellPhone': celular,
            'cep': cep,
            'city': cidade,
            'document': cnpj,
            'numberAddress': numero,
            'uf': uf,
          },
          'weekFinalTimeOperation': SFim,
          'weekInitialTimeOperation': SInic,
          'weekendFinalTimeOperation': FFim,
          'weekendInitialTimeOperation': FInic,

        })
      })
        .then(function (response) {
          /* console.log(response); */
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
            placeholder="CNPJ"
            placeholderTextColor="#999"
            keyboardType="default"
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

          <TextInput
            style={styles.imput}
            placeholder="URL logo"
            placeholderTextColor="#999"
            keyboardType="default"
            autoCapitalize="none"
            value={logo}
            autoCorrect={false}
            onChangeText={setlogo}
          />

          <Text style={styles.Desc}>Horário Funcionamento</Text>

          <Text style={styles.Desc}>Semana</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.imputh}
              placeholder="Inicio 00:00"
              placeholderTextColor="#999"
              keyboardType="default"
              autoCapitalize="none"
              value={SInic}
              autoCorrect={false}
              onChangeText={setSInic}
            />


            <TextInput
              style={styles.imputh}
              placeholder="Fim 00:00"
              placeholderTextColor="#999"
              keyboardType="default"
              autoCapitalize="none"
              value={SFim}
              autoCorrect={false}
              onChangeText={setSFim}
            />


          </View>


          <Text style={styles.Desc}>Fim de semana</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.imputh}
              placeholder="Inicio 00:00"
              placeholderTextColor="#999"
              keyboardType="default"
              autoCapitalize="none"
              value={FInic}
              autoCorrect={false}
              onChangeText={setFInic}
            />

            <TextInput
              style={styles.imputh}
              placeholder="Fim 00:00"
              placeholderTextColor="#999"
              keyboardType="default"
              autoCapitalize="none"
              value={FFim}
              autoCorrect={false}
              onChangeText={setFFim}
            />

          </View>
          <Text style={styles.Desc}>Suas Categorias</Text>


          <View style={styles.rows}>
            

            {/* <View style={styles.center}> */}
              <CheckBox
                value={categoria}
                onValueChange={() => setcategoria('FOOD')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>Comida</Text>
              <CheckBox
                value={categoria}
                onValueChange={() => setcategoria('TOYS')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>Brinquedos</Text>

              <CheckBox

                value={categoria}
                onValueChange={() => setcategoria('PHARMACY')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>Remédios</Text>

            {/* </View> */}
          </View>


  

          <Text style={styles.Desc}>Sua região</Text>

          <View style={styles.rows}>
            
            {/* <View style={styles.center}> */}
              <CheckBox
                value={regiao}
                onValueChange={() => setregiao('NORTH')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>NORTE</Text>
              <CheckBox
                value={regiao}
                onValueChange={() => setregiao('SOUTH')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>SUL</Text>

              <CheckBox

                value={regiao}
                onValueChange={() => setregiao('EAST')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>LESTE</Text>
              <CheckBox

                value={regiao}
                onValueChange={() => setregiao('WEST')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>OESTE</Text>


              <CheckBox

                value={categoria}
                onValueChange={() => setregiao('CENTER')}
                /* style={styles.checkbox} */ />
              <Text style={styles.Desc}>CENTRO</Text>

            {/* </View> */}
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
/*   center: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
    fontSize: 20,
  }, */

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
  Desc: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
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
  imputh: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    width: 150,
    marginTop: 4,
    borderRadius: 8,

  },


  NovaConta: {
    fontSize: 12,
    alignItems: 'center',
    color: '#999',

  },

  row: {
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  rows: {
    marginBottom: 15,
    flexDirection: "row",
 
  },

});
