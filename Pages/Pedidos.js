import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit, FlatList, SafeAreaView, Avatar} from 'react-native';
/* import { Avatar } from 'react-native-paper';
 */ 
import logoTudoAnimal from 'C:/Users/paulo.g.silva/PetFood2/mobile/assets/TudoAnimal.png';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: require('C:/Users/paulo.g.silva/PetFood2/mobile/assets/TudoAnimal.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d723',
        title: 'Third Itemm',
      },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const Pedidos = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );


    
  
    return (

      <SafeAreaView style={styles.container}>
 

        <FlatList

          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          

        />
        
      </SafeAreaView>
    );
  };
  


  
  export default Pedidos;



const styles = StyleSheet.create({


    
    item: {
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
      title: {
        fontSize: 32,
      },
    

    container: {

        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 100,
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

