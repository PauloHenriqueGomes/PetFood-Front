import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function Carrinho({ route }) {


  const navigation = useNavigation();
  



  const [cart, setCart] = useState([
    {
      id: 'PID000101',
      name: route.params?.title,
      company: route.params?.sellername,
      img: route.params?.imgprod,
      quantity: 1,
      price: route.params?.price,
      perPrice: route.params?.price,
    },
    /*     {
          id: 'PID000106',
          name: 'Ração Premier',
          company: 'Premier',
          img:
          'C:/Users/paulo.g.silva/PetFood2/mobile/PetFood-Front/assets/ReiAquario.png',
          quantity: 1,
          price: 40,
          perPrice: 40,
        }, */
  ]);
  const [shippingMethod, setShippingMethod] = useState('Normal');

  const [nome, setNome] = useState('');
  const [num,setnum]= useState(1);      
  
  
  useEffect(() => {
  
    axios.get('http://192.168.1.19:8080/user/find/email?email=' + route.params?.userEmail)
    .then(respt => {

    setNome(respt.data.name)
    console.log(respt.data.name)
    /* console.log(respt.data.name) */;
})
  } );



  //==================FUNÇÃO COMPRAR==================//

  const [quantity] = useState('1');

  const handleSignClick = async () => {

    axios('http://192.168.1.19:8080/request/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        'products': [{

          'quantity': num,
          'title': route.params?.title,
        }],
        'sellerName': route.params?.sellername,
        'shippingPrice': 0,
        'userName': route.params?.userc,
      })
    })
      .then(function (response) {
        console.log(response);
        alert(response.data);
/*         navigation.reset({
          routes: [{ name: 'Home'}], 

        });*/

      }).catch(error => {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error);
        }
      });

  }

  

  //============================================================

  return (
    <View style={styles.container}>


      <View style={styles.cartContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cartTitleView}>
            <Icon name='shopping-cart' type='font-awesome-5' />
            <Text style={styles.cartTitle}>Carrinho</Text>
            
            <Text style={styles.cartTitle}>{route.params?.email}{nome}</Text>
            <Text style={styles.cartTitle}></Text>
          </View>

          {cart.length > 0 ? (
            <View>
              {cart
                .sort((a, b) => a.name > b.name)
                .map((product) => (
                  <View style={styles.productView}>
                    <Image
                      style={styles.productImage}
                      source={{
                        uri: product.img,
                      }}
                    />
                    <View style={styles.productMiddleView}>
                      <Text style={styles.productTitle}>{product.name}</Text>
                      <Text style={styles.productCompanyTitle}>
                        {product.company}
                      </Text>
                    </View>
                    <View style={styles.productRightView}>
                      <Text
                        style={styles.productPriceText}
                      >{`R$ ${product.price}`}</Text>
                      <View style={styles.productItemCounterView}>
                        <TouchableOpacity
                          onPress={() => {                           
                            
                            
                            if (product.quantity === 1) {
                              return Alert.alert(
                                `Remover ${product.name}?`,
                                '',
                                [
                                  { text: 'Cancelar' },
                                  {
                                    text: 'Remover',
                                    onPress: () => {
                                      const newCart = cart.filter(
                                        (p) => p.id !== product.id
                                      );
                                      setCart(newCart);
                                    },
                                  },
                                ]
                              );
                            }  
                             const newProd = {
                              ...product,
                              quantity: product.quantity - 1,
                              price: product.price - product.perPrice,
                            };
                            const restProds = cart.filter(
                              (p) => p.id !== product.id
                            );
                            setCart([...restProds, newProd]);
                            setnum(newProd.quantity)
                              

                          }}
                        >
                          <Icon
                            style={styles.toggleCounterButton}
                            name='minus-circle'
                            type='font-awesome'
                          />
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>
                          {product.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            const newProd = {
                              ...product,
                              quantity: product.quantity + 1,
                              price: product.price + product.perPrice,
                            };
                            const restProds = cart.filter(
                              (p) => p.id !== product.id
                            );
                            setCart([...restProds, newProd]);
                            setnum(newProd.quantity)
                          }}
                        >
                          <Icon 
                            style={styles.toggleCounterButton}
                            name='plus-circle'
                            type='font-awesome'
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))}



              <View style={styles.totalView}>
                <Text style={styles.totalText}>Total - </Text>
                {shippingMethod === 'Normal' ? (
                  <Text style={styles.totalPrice}>
                    R$ {cart.reduce((acc, val) => val.price + acc, 0)}
                  </Text>
                ) : (
                  <Text style={styles.totalPrice}>
                    R$ {cart.reduce((acc, val) => val.price + acc, 0) + 60}
                  </Text>
                )}
              </View>
              <TouchableOpacity onPress={handleSignClick } style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>
                  Finalizar Compra
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.emptyCartView}>
              <Text style={styles.emptyCartViewText}>Your cart is empty.</Text>
            </View>
          )}


         
          <View style={{ height: 100 }}></View>
          

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  paymentTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 16,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  cartTitleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 10,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 8,
    // borderRadius: 10,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    // shadowRadius: 2,
    elevation: 2,
    marginTop: 14,
  },
  productImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  productMiddleView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  productCompanyTitle: {
    fontSize: 16,
    fontWeight: '300',
  },
  productRightView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productItemCounterView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  counterValue: {
    fontSize: 20,
    fontWeight: '500',
  },
  productPriceText: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  toggleCounterButton: {
    paddingHorizontal: 10,
  },
  couponInputView: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  couponInput: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  couponButton: {
    backgroundColor: '#333',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  couponButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  subtotalView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: '500',
  },
  subtotalPrice: {
    fontSize: 18,
    fontWeight: '300',
  },
  shippingView: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    paddingBottom: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  shippingItemsView: {
    marginTop: 10,
  },
  shippingText: {
    fontSize: 18,
    fontWeight: '500',
  },
  shippingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shippingItemText: {
    fontSize: 16,
    paddingVertical: 4,
    fontWeight: '300',
  },
  totalView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '500',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '300',
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
  emptyCartView: {
    flex: 1,
    marginTop: 140,
  },
  emptyCartViewText: {
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
});