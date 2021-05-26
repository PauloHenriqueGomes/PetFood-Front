import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Home from '../Pages/Home';
import Busca from '../Pages/Busca';
import AlterarLogista from '../Pages/AlterarLogista';
import Pedidos from '../Pages/Pedidos';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadastroProduto from '../Pages/CadastroProduto';
import EstoqueLojista from '../Pages/EstoqueLojista';
import PedidosLoja from '../Pages/PedidosLoja';



const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function TabsLogista({route}) {

/*   const [nome, setNome] = useState('');

  useEffect(() => {
  
    axios.get('http://192.168.1.19:8080//seller/find/email?email=' + route.params?.email)
    .then(respt => {

    setNome(respt.data.name)
     console.log(respt.data.name) ;
})
  } ); */
  


  return (



    <Tab.Navigator activcolor='#d3d3d3'>



      <Tab.Screen name="Produtos"component={CadastroProduto} initialParams={{sellerEmail: route.params?.email}}
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="home"color ={'#808080'} size={28}/>),
        }}
      />

     <Tab.Screen name="EstoqueLojista" component={EstoqueLojista} initialParams={{sellerEmail: route.params?.email}}
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="clipboard"color ={'#808080'} size={28}/>),
        }}
        />

      <Tab.Screen name="PedidosLoja" component={PedidosLoja} initialParams={{sellerEmail: route.params?.email}}
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="clipboard"color ={'#808080'} size={28}/>),
        }}
        />
      <Tab.Screen name="Perfil" component={AlterarLogista} initialParams={{sellerEmail: route.params?.email}}
      options={{
        tabBarIcon:({focused})=>
        (<Icon  name="user"color ={'#808080'} size={28}/>),
        }}
        />


        
    </Tab.Navigator>

  );



}
