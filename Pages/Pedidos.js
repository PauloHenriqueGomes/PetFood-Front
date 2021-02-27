import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInputComponent, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, handleSubmit } from 'react-native';

export default function Pedidos() {

    return (

        <View style={styles.container}>

            <View style={styles.form}>

                <TextInput
                    style={styles.imput}
                    placeholder="Nome completo"
                    placeholderTextColor="#999"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.imput}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.imput}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.imput}
                    placeholder="Celular"
                    placeholderTextColor="#999"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.imput}
                    placeholder="CEP"
                    placeholderTextColor="#999"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.imput}
                    placeholder="Rua"
                    placeholderTextColor="#999"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.imput}
                    placeholder="Numero"
                    placeholderTextColor="#999"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttontext}> Cadastrar</Text>
                </TouchableOpacity>




                <StatusBar style="auto" />
            </View>
        </View>
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
