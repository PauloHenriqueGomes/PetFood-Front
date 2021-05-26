import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  TextInput,CheckBox
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'react-native-paper';


export default function PedidosLoja({route}) {
  const navigation = useNavigation();

  const[Pedidos,setListaPedidos] = useState([]);
  const[NumPedido,setNumPedido] = useState(false);
  const [nome, setNome] = useState('');



  React.useEffect(() => {
  
    axios.get('http://192.168.1.19:8080//seller/find/email?email=' + route.params?.sellerEmail)
    .then(respt => {

    setNome(respt.data.name)
    /* console.log(respt.data.name) */;
})
  } );

  useEffect(() => {
    axios.get('http://192.168.1.19:8080/request/find/seller?sellerName='+nome)
    .then(resp => {

      setListaPedidos(resp.data)
      /* console.log(resp.data); */
  })
});

  
const handleSignClick = async () => {
    
  axios('http://192.168.1.19:8080/request/update/status?id='+NumPedido+'&status=PROCESSED', {
    method: 'PATCH',

  })
    .then(function (response) {
      alert(response.data);
    }).catch(error => {
      if (error.response) {
      alert(error.response.data);
      } else {
      alert(error);
      }
      });

}

const handleSignClick2 = async () => {
    
  axios('http://192.168.1.19:8080/request/update/status?id='+NumPedido+'&status=DELIVERED', {
    method: 'PATCH',

  })
    .then(function (response) {
      alert(response.data);

    }).catch(error => {
      if (error.response) {
      alert(error.response.data);
      } else {
      alert(error);
      }
      });

}



  return (
    <ScrollView>
      <View style={styles.container}>




        <View style={styles.form}>


          <Text style={styles.LojaDest}>Suas vendas</Text>
          
          {Pedidos.map(resp =>
          <View  style={styles.bannerlojas}>          
            <Text style={styles.buttontext}> {resp.userName}</Text>
            <Text style={styles.buttontext2}> Pedido: {resp.id}</Text>
            <Text style={styles.buttontext2}> Produto: {resp.title} Qtd: {resp.totalQuantity} </Text>
            <Text style={styles.buttontext2}> Preço: {resp.totalPrice}  Status Pedido: {resp.status}</Text>
            
            <CheckBox              
            value={NumPedido}
             onValueChange={()=> setNumPedido(resp.id)} 
            style={styles.checkbox}   />

           </View>
          )}
                    
              <TouchableOpacity  onPress={handleSignClick}  style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>
                  Processar pedido
                </Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={handleSignClick2}  style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>
                  Entregue
                </Text>
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

  checkoutButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    marginTop: 30,
    alignItems: 'center',
  },

  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
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
