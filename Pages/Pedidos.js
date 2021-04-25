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


export default function Pedidos() {
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


          <Text style={styles.LojaDest}>Seus pedidos</Text>

          <TouchableOpacity  style={styles.bannerlojas}>
            <Text style={styles.buttontext}> Pedido 1</Text>
            <Text style={styles.buttontext2}> Ração Pedigree cachorro</Text>
          </TouchableOpacity>
          
          <TouchableOpacity  style={styles.bannerlojas}>
          <Text style={styles.buttontext}> Pedido 2</Text>
          <Text style={styles.buttontext2}> Ração Pedigree gato</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.bannerlojas}>
          <Text style={styles.buttontext}> Pedido 3</Text>
            <Text style={styles.buttontext2}> Ração Premier cachorro</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.bannerlojas}>
          <Text style={styles.buttontext}> Pedido 4</Text>
            <Text style={styles.buttontext2}> Ração Premier gato</Text>
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
    flexDirection: 'column',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    fontSize: 40,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 80,
    marginBottom: 40,
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
