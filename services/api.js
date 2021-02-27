import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//const api = axios.create({

const baseURL = 'localhost:3000';


export default function api() {

    checkToken: async (token) => {
        const req = await fetch(`${baseURL}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json();
        return json;
    };

    signIn: async (email, password) => {
        const req = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await req.json();
        return json;
    };

    signUp: async (nome, email, senha, celular, cep, rua, numero) => {
        const req = await fetch(`${baseURL}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome, email, senha, celular, cep, rua, numero})
        });
        const json = await req.json();        
        return json;
    };


};
