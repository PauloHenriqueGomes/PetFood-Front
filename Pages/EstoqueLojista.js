import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function EstoqueLojista({ route }) {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [resultado, setResultado] = useState([]);
  const navigation = useNavigation();
  const [produto, setproduto] = useState('');
  const [nome, setNome] = useState('');


  React.useEffect(() => {
  
    axios.get('http://192.168.1.19:8080//seller/find/email?email=' + route.params?.sellerEmail)
    .then(respt => {

    setNome(respt.data.name)
    /* console.log(respt.data.name) */;
})
  } );


  useEffect(() => {


    axios.get('http://192.168.1.19:8080/search/seller/products?sellerName='+nome )
      .then(resp => {

        setResultado(resp.data)
      })/* .catch(error => {
        if (error.response) {
          alert(error.response.data);
        } 
      }) */;
  });

  return (

    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
{/*           <View style={styles.imputView}>

            <TextInput
               defaultValue={searchText} 
              style={styles.imput}
              placeholder='Procurar produto'
              textContentType='name'
               value={users} 
              onChangeText={setUsers}
            />

          </View> */}

          {resultado.map(resp =>
            <TouchableOpacity  style={styles.bannerlojas}>
              <Image style={styles.ImageLoja}
                source={{ uri: resp.imageUrl }}
              />

            <View style={styles.textdesc}>
              <Text > {resp.title}</Text>
              <Text> Estoque: {resp.stock}</Text>
              <Text> R$:{resp.price}</Text>
            </View>  
            </TouchableOpacity>)}

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
  searchView: {
    display: 'flex',
    flexDirection: 'row',

  },

  textdesc :{
    alignItems: 'stretch', // Centered horizontally
    flex:1
 },
  inputView: {
    flex: 1,
    height: 40,
    backgroundColor: '#dfe4ea',
    paddingHorizontal: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imputView: {
    flex: 1,
    height: 40,
    paddingHorizontal: 0,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 10,
    marginBottom: 30

  },

  text: {
    flex: 1,
    color: 'black',
    fontSize: 15,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

  },

  bannercategoria: {
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

  buttoncadastro: {
    height: 42,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 70,
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },

  ImageLoja: {

    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    //borderRadius: 4,
    //marginBottom: 12,


  },

  imput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#444',
    height: 40,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 8,
  },



  userCard: {
    backgroundColor: '#fafafa',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
  messageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBoxText: {
    fontSize: 20,
    fontWeight: '500',
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
});