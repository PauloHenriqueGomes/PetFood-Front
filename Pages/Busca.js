import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  TextInput,
} from 'react-native';
import Axios from 'axios';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoCobasi from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/Cobasi.png';
import logoPetz from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/Petz.png';
import logoRacaoForte from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/RacaoForte.png';
import logoCasaRacao from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/CasaRacao.png';
import logoReiAquario from 'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/ReiAquario.png';




export default function Busca() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
/*   const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results);
    });
  }, []); */


  return (
    <ScrollView>
      <View style={styles.container}>




        <View style={styles.form}>

          <TextInput
            style={styles.imput}
            
            placeholder="Digite o produto"
            placeholderTextColor="#999"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.LojaDest}>Lojas perto de voce</Text>

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
    //borderRadius: 4,
    //marginBottom: 12,
    

  },

  ImageLoja:{

    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    //borderRadius: 4,
    //marginBottom: 12,
    

  },

  xbannerlojas: {
    height: 65,
    borderColor: '#ddd',
    backgroundColor: '#b7d5ac',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 1,
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
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 8,
  },


  NovaConta: {
    fontSize: 12,
    alignItems: 'center',
    color: '#999',

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
    marginBottom: 5,
  },



  lista: {
    height: 500,
    alignSelf: 'stretch',
    //paddingHorizontal: 30,  
    //marginTop: 5,

    //borderWidth:1,
    //borderColor: '#ddd',
    //backgroundColor: 'black',
    fontSize: 16,
    marginTop: 20,

    //color:'#444',
    //height: 44,
    //borderRadius:8, 

  },

  cardView: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 30,
    fontSize: 16,
    color: '#444',
    height: 54,
    marginTop: 1,
    marginBottom: 5,
    borderRadius: 8,
  },

});
