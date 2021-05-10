import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


export default function CadastroInfAdicionais({ route }) {

  const navigation = useNavigation();

  const [titulo, settitulo] = useState('');
  const [marca, setmarca] = useState('');
  const [descricao, setdescricao] = useState('');
  const [preco, setpreco] = useState('');
  const [promo, setpromo] = useState('');
  const [vendedor, setvendedor] = useState('');
  const [estoque, setestoque] = useState('');
  const [InfAdicionais, setInfAdicionais] = useState('');
  const [imgProd, setimgProd] = useState('');


  //===========CADASTRAR PRODUTO========================


  const handleSignClick = async () => {
    if (InfAdicionais != '' && marca != '' && descricao != '' && preco != '' && promo != '' && vendedor != '' && estoque != '' && titulo != '' && imgProd != '') {


      axios('http://192.168.1.19:8080/product/create?category=FOOD', {
        method: 'POST',
        headers: {
          'Acpromot': 'application/json',
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({

          'additionalInfo': InfAdicionais,
          'brand': marca,
          'description': descricao,
          'price': preco,
          'pricePromotion': promo,
          'sellerName': vendedor,
          'stock': estoque,
          'title': titulo,
          'imageUrl': imgProd

        })
      })
        .then(function (response) {
          console.log(response);
          alert(response.data);
          navigation.reset({
            routes: [{ name: 'TabsLogista' }]
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



  //===========PESQUISAR PRODUTO========================


  const handleSignClickPesquisar = async () => {
    if (vendedor != '' && titulo != '') {


      axios('http://192.168.1.19:8080/product/find/title/seller?sellerName=' + vendedor + '&title=' + titulo, {
        method: 'GET',
        headers: {
          'Acpromot': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Methods, Acpromot, Content-Type'
        },
        data: JSON.stringify({
          'additionalInfo': InfAdicionais,
          'brand': marca,
          'description': descricao,
          'price': preco,
          'pricePromotion': promo,
          'sellerName': vendedor,
          'stock': estoque,
          'title': titulo,
          'imageUrl': imgProd
        })
      }).then(function (response) {

        setmarca(response.data.brand);
        setdescricao(response.data.description);
        setpreco(response.data.price.toString());
        setpromo(response.data.pricePromotion.toString());
        setestoque(response.data.stock.toString());
        setInfAdicionais(response.data.additionalInfo);
        setimgProd(response.data.imageUrl);


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


  //===========ALTERAR PRODUTO========================


  const handleSignClickAlterar = async () => {
    if (InfAdicionais != '' && marca != '' && preco != '' && promo != '' && vendedor != '' && estoque != '' && titulo != '') {


      axios('http://192.168.1.19:8080/product/update?category=FOOD&sellerName=' + vendedor + '&title=' + titulo, {
        method: 'PUT',
        headers: {
          'Acpromot': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Methods, Acpromot, Content-Type'
        },
        data: JSON.stringify({
          'additionalInfo': InfAdicionais,
          'brand': marca,
          'description': descricao,
          'price': preco,
          'pricePromotion': promo,
          'sellerName': vendedor,
          'title': titulo,
          'stock': estoque,
          'imageUrl': imgProd
        })
      }).then(function (response) {
        console.log(response);
        alert(response.data);
        navigation.reset({
          routes: [{ name: 'TabsLogista' }]
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



  //=========================EXCLUIR PRODUTO======================================


  const excluir = async () => {
    if (titulo != '') {


      axios('http://192.168.1.19:8080/product/delete?sellerName=' + vendedor + '&title=' + titulo, {
        method: 'DELETE',
        headers: {
          'Acpromot': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Methods, Acpromot, Content-Type'
        }
      })
        .then(function (response) {
          console.log(response);
          alert(response.data);
          navigation.reset({
            routes: [{ name: 'TabsLogista' }]
          });

        }).catch(error => {
          if (error.response) {
            alert(error.response.data);
          } else {
            alert(error);
          }
        });
    } else {
      alert("Preencha o produto!");
    }
  }







  //=============TELA====================================



  return (
    <ScrollView>
      <View style={styles.container}>


        <View style={styles.form}>

          <TextInput
            style={styles.imput}
            placeholder="Titulo Produto"
            placeholderTextColor="#999"
            keyboardType="default"
            autoCapitalize="none"
            value={titulo}
            autoCorrect={false}
            onChangeText={settitulo}
          />

          <TextInput
            style={styles.imput}
            placeholder="Marca"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={marca}
            autoCorrect={false}
            onChangeText={setmarca}
          />

          <TextInput
            style={styles.imput}
            placeholder="Descricao"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={descricao}
            autoCorrect={false}
            onChangeText={setdescricao}
          />


          <TextInput
            style={styles.imput}
            placeholder="Preco"
            placeholderTextColor="#999"
            keyboardType="numeric"
            autoCapitalize="none"
            value={preco}
            autoCorrect={false}
            onChangeText={setpreco}
          />

          <TextInput
            style={styles.imput}
            placeholder="Promo"
            placeholderTextColor="#999"
            keyboardType="numeric"
            autoCapitalize="none"
            value={promo}
            autoCorrect={false}
            onChangeText={setpromo}
          />

          <TextInput
            style={styles.imput}
            placeholder="Estoque"
            placeholderTextColor="#999"
            keyboardType="numeric"
            autoCapitalize="none"
            value={estoque}
            autoCorrect={false}
            onChangeText={setestoque}
          />

          <TextInput
            style={styles.imput}
            placeholder="Vendedor"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={vendedor}
            autoCorrect={false}
            onChangeText={setvendedor}
          />



          <TextInput
            style={styles.imput}
            placeholder="Informações Adicionais"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={InfAdicionais}
            autoCorrect={false}
            onChangeText={setInfAdicionais}
          />
          <TextInput
            style={styles.imput}
            placeholder="Imagem Produto"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={imgProd}
            autoCorrect={false}
            onChangeText={setimgProd}
          />





          <TouchableOpacity onPress={handleSignClick} style={styles.button}>
            <Text style={styles.buttontext}> Cadastrar produto</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignClickPesquisar} style={styles.button}>
            <Text style={styles.buttontext}> Consultar produto</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={handleSignClickAlterar} style={styles.button}>
            <Text style={styles.buttontext}> Alterar produto</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={excluir} style={styles.buttonsair}>
            <Text style={styles.buttontext}> Excluir Produto</Text>
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
    marginTop: 10,
    marginBottom: 10,
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
