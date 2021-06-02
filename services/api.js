import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//const api = axios.create({

//const baseURL = 'localhost:8080';

//const api = axios.post(
  //  baseURL = 'http://192.168.1.6:8080', values,
//).then(resp => console.log(resp));


//export default api;
const baseURL= 'http://192.168.1.6:8080';


export default {

    checkToken: async (token) => {
        const req = await fetch(`${baseURL}/user/create?cityZone=NORTH`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json();
        return json;
    },

    signIn: async (email, senha) => {


        


        const req = await fetch(`${baseURL}/user/create?cityZone=NORTH`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });
        const json = await req.json();
        return json;
    },

    signUp: async (nome, email, senha, celular, cep, rua, numero) => {
        const req = await fetch(`${baseURL}/user/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome, email, senha, celular, cep, rua, numero})
        });
        const json = await req.json();        
        return json;
    }


};
