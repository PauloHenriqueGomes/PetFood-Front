import React, { useState } from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoCobasi from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/Cobasi.png';
import logoPetz from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/Petz.png';
import logoRacaoForte from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/RacaoForte.png';
import logoCasaRacao from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/CasaRacao.png';
import logoReiAquario from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/ReiAquario.png';
import logoGatoMania from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/GatoMania.png';
import logoTudoAnimal from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/TudoAnimal.png';
import logoRacao from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/LogoRaca.png';
import logoBrinquedo from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/LogoBrinquedo.png';
import logoRemedio from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/LogoRemedio.png';
import axios from 'axios';

export default function Home() {

    const navigation = useNavigation();

   //========================BUSCA CATEGORIAS=========================// 

  const BuscaComida = async () => {
   

      axios.get('http://192.168.1.19:8080/search/seller/category?category=FOOD&isWeek=true&localTime=15%3A00')
      .then(res=>{
          console.log(res.data)})

    };
  //======================== TELA  =========================// 


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>

          <Text style={styles.LojaDest}>Principais categorias</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={BuscaComida} style={styles.bannercategoria}>
          <Image source={logoRacao} style={styles.ImageLoja} />
           <Text style={styles.buttontext}> Alimentos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannercategoria}>
          <Image source={logoBrinquedo} style={styles.ImageLoja} />
          <Text style={styles.buttontext}> Brinquedos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannercategoria}>
          <Image source={logoRemedio} style={styles.ImageLoja} />
            <Text style={styles.buttontext}> Remedios</Text>
          </TouchableOpacity>

          </ScrollView>

          <TextInput
            style={styles.imput}
            
            placeholder="Digite o produto"
            placeholderTextColor="#999"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />

        
          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoPetz} style={styles.ImageLoja} />          
            <Text style={styles.buttontext}> Pets</Text>
            <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista 500</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoCobasi} style={styles.ImageLoja} />
          <Text style={styles.buttontext}> Cobasi</Text>
          <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista 500</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoRacaoForte} style={styles.ImageLoja} />
          <Text style={styles.buttontext}> Ração Forte</Text>
            <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoCasaRacao} style={styles.ImageLoja} />
          <Text style={styles.buttontext}> Casa da Ração</Text>
            <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoReiAquario} style={styles.ImageLoja} />
          <Text style={styles.buttontext}> Rei dos Aquario</Text>
            <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoGatoMania} style={styles.ImageLoja} />
            <Text style={styles.buttontext}> Gato Mania</Text>
            <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoTudoAnimal} style={styles.ImageLoja} />
          <Text style={styles.buttontext}> Tudo Animal</Text>
            <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={styles.bannerlojas}>
          <Image source={logoTudoAnimal} style={styles.ImageLoja} />
          <Text style={styles.buttontext}> Tudo Animal</Text>
            <Text style={styles.buttontext2}> Av Paulista 470 - Jadim Paulista</Text>
          </TouchableOpacity>
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

  bannercategoria:{
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderBottomWidth: 3,
    marginBottom: 16,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    
  },

  bannerlojas: {
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderBottomWidth: 3,
    marginBottom: 16,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    
  },

  ImageLoja:{

    width: 50,
    height: 50,
    borderRadius: 100 / 2,
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 10,
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
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    textAlign: 'justify',
    
    justifyContent: 'space-around',
  },
  buttontext2: {
    color: 'black',
    fontSize: 15,
  },

  imput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 8,
  },


  textotelainicial: {
    color: 'black',
    fontSize: 20,
  },
  LojaDest: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },


});

