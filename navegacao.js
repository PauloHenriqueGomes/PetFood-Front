import React from 'react';
import { createAppContainer, createSwitchNavigator, navigationContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation'


import App from 'C:/Users/paulo.g.silva/PetFood2/mobile/App'
import Cadastro from 'C:/Users/paulo.g.silva/PetFood2/mobile/Cadastro'

const Stack = createStackNavigator();


export default function navegacao(){
    return(
        <navegationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="Home" component ={Home}/>
                <Stack.Screen name ="Cadastro" component ={Cadastro}/>

            </Stack.Navigator>
        </navegationContainer>


    );

}

